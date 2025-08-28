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
      ...passage.questionsPartOne?.questionDetail || [],
      ...passage.questionsPartTwo?.questionDetail || [],
      ...passage.questionsPartThree?.questionDetail || []
    ];

    
    // Tạo map questionId -> answer đúng
    const userAnswers = {};
      answers.forEach(q => {
        userAnswers[q.questionId.toString()] = q.answer;
      }
    );

   
    // Chấm điểm
    let userAnswer = [];
    let score = 0;

    allQuestions.forEach(ques => {
      const userAns = userAnswers[ques._id];
      
        if (userAns && userAns?.toLowerCase().trim() === ques?.answer?.toLowerCase().trim()) {
        score++;
      }
      

      const temp ={
          answer:userAns??null,
          correctAnswer: ques.answer.toLowerCase().trim(),
          questionId:ques._id,
          isCorrect: userAns?.toLowerCase().trim() === ques?.answer?.toLowerCase().trim()?? false
      }
      userAnswer.push(temp)

    });

    // // Lưu kết quả
    const submission = new ReadingSubmission({
      userId,
      readingTestId: id,
      passageId:passage._id,
      answers:userAnswer,
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
    const listeningTest = await ListeningTest.findById(id).populate("audio");


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
    
    const allQuestions = audio.questionsPart
      .map((item) => [
        ...(item.questionDetail || [])
      ])
      .flat();

    
    // // Tạo map questionId -> answer đúng
    // const correctAnswers = {};
    // allQuestions.forEach(q => {
    //   correctAnswers[q._id.toString()] = q.answer;
    // });
    // // Chấm điểm
    // let score = 0;
    // answers.forEach(ans => {
    //   const correct = correctAnswers[ans.questionId];
      
    //   if (correct && correct.toLowerCase().trim() === ans.answer.toLowerCase().trim()) {
    //     score++;
    //   }
    //   ans.correctAnswers = correct.toLowerCase().trim();
      
    // });

    const userAnswers = {};
      answers.forEach(q => {
        userAnswers[q.questionId.toString()] = q.answer;
      }
    );


    let userAnswer = [];
    let score = 0;

    allQuestions.forEach(ques => {
      const userAns = userAnswers[ques._id];
      
        if (userAns && userAns?.toLowerCase().trim() === ques?.answer?.toLowerCase().trim()) {
        score++;
      }
      

      const temp ={
          answer:userAns??null,
          correctAnswer: ques.answer.toLowerCase().trim(),
          questionId:ques._id,
          isCorrect: userAns?.toLowerCase().trim() === ques?.answer?.toLowerCase().trim()?? false
      }
      userAnswer.push(temp)

    });
    
    // Lưu kết quả
    const submission = new ListeningSubmission({
      userId,
      listeningTestId: id,
      audioId:audio._id,
      answers:userAnswer,
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