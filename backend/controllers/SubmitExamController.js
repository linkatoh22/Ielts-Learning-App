const { ReadingTest, PassageReading } = require("../models/readingExamModel.js");
const ReadingSubmission = require("../models/submissionReadingModel.js");
const ListeningSubmission  = require("../models/submissionListeningModel.js")
const {ListeningTest, audioListening } = require("../models/listeningExamModel.js")


const submitReadingTest = async (req, res) => {
  try {
    
    const { id } = req.params; // readingTestId
    const { userId, answers } = req.body; 
    const readingTest = await ReadingTest.findById(id).populate("passages");


    if (!readingTest) {
      return res.status(404).json({ message: "Reading test not found" });
    }

    const passage = await PassageReading.findById(readingTest.passages);
    
    if (!passage) {
      return res.status(404).json({ message: "Passage not found" });
    }

    // Gom hết question có đáp án
    const allQuestions = [
      ...passage.questionsPartOne?.questionMultipleChoice || [],
      ...passage.questionsPartOne?.questionTFN || [],
      ...passage.questionsPartOne?.questionYNN || [],
      ...passage.questionsPartOne?.questionMatching || [],
      ...passage.questionsPartOne?.questionCompletePassage || [],

      ...passage.questionsPartTwo?.questionMultipleChoice || [],
      ...passage.questionsPartTwo?.questionTFN || [],
      ...passage.questionsPartTwo?.questionYNN || [],
      ...passage.questionsPartTwo?.questionMatching || [],
      ...passage.questionsPartTwo?.questionCompletePassage || [],

      ...passage.questionsPartThree?.questionMultipleChoice || [],
      ...passage.questionsPartThree?.questionTFN || [],
      ...passage.questionsPartThree?.questionYNN || [],
      ...passage.questionsPartThree?.questionMatching || [],
      ...passage.questionsPartThree?.questionCompletePassage || [],
    ];
    
    // Tạo map questionId -> answer đúng
    const correctAnswers = {};
    allQuestions.forEach(q => {
      correctAnswers[q._id.toString()] = q.answer;
    });

    console.log("correctAnswers: ", correctAnswers)
    // Chấm điểm
    let score = 0;
    answers.forEach(ans => {
      const correct = correctAnswers[ans.questionId];
      
      if (correct && correct.toLowerCase().trim() === ans.answer.toLowerCase().trim()) {
        score++;
      }
    });

    // Lưu kết quả
    const submission = new ReadingSubmission({
      userId,
      readingTestId: id,
      answers,
      score
    });

    await submission.save();

    res.status(200).json({
      message: "Submitted successfully",
      score,
      total: allQuestions.length,
      submission
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


const submitListeningTest = async (req, res) => {
  try {
    
    const { id } = req.params; // readingTestId
    const { userId, answers } = req.body; 
    const listeningTest = await ListeningTest.findById(id).populate("passages");


    if (!listeningTest) {
      return res.status(404).json({ message: "Listening test not found" });
    }

    const audio = await audioListening.findById(listeningTest.audio);
    
    if (!audio) {
      return res.status(404).json({ message: "Listening Audio not found" });
    }

    
    // Gom hết question có đáp án

    // const allQuestions = [
    //   ...audio.questionsPart?.questionCP || [],
    //   ...audio.questionsPart?.questionCA || [],
    //   ...audio.questionsPart?.questionCS || [],
    // ];
    
    const allQuestions = () => {
      return audio.questionsPart
        .map((item) => [
          ...(item.questionCP || []),
          ...(item.questionCA || []),
          ...(item.questionCS || []),
        ])
        .flat();
    };
    // Tạo map questionId -> answer đúng
    const correctAnswers = {};
    allQuestions.forEach(q => {
      correctAnswers[q._id.toString()] = q.answer;
    });

    
    // Chấm điểm
    let score = 0;
    answers.forEach(ans => {
      const correct = correctAnswers[ans.questionId];
      
      if (correct && correct.toLowerCase().trim() === ans.answer.toLowerCase().trim()) {
        score++;
      }
    });

    // Lưu kết quả
    const submission = new ListeningSubmission({
      userId,
      listeningTestId: id,
      answers,
      score
    });

    await submission.save();

    res.status(200).json({
      message: "Submitted successfully",
      score,
      total: allQuestions.length,
      submission
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { submitReadingTest,submitListeningTest };