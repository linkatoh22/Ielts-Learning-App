const { ReadingTest, PassageReading } = require("../models/readingExamModel.js");
const {ListeningTest, audioListening } = require("../models/listeningExamModel.js")
const Submission = require("../models/submissionModel.js")

const submitReadingTest = async (req, res) => {
  try {
    
    const { id } = req.params; // readingTestId
    const { answers } = req.body; 
    const readingTest = await ReadingTest.findById(id).populate("passages");
    let userId = req.user._id;

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
    const submission = new Submission({
      examType:"Reading",
      userId,
      readingTestId: id,
      passageId:passage._id,
      answers:userAnswer,
      score
    });

    await submission.save();

    res.status(200).json({
      message: "Submitted successfully",
      submitDetail:{
        score,
        total: allQuestions.length,
        submission
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


const submitListeningTest = async (req, res) => {
  try {
    
    const { id } = req.params; // readingTestId
    const { answers } = req.body; 
    const listeningTest = await ListeningTest.findById(id).populate("audio");
    let userId = req.user._id;

    if (!listeningTest) {
      return res.status(404).json({ message: "Listening test not found" });
    }

    const audio = await audioListening.findById(listeningTest.audio);
    
    if (!audio) {
      return res.status(404).json({ message: "Listening Audio not found" });
    }

    
    const allQuestions = audio.questionsPart
      .map((item) => [
        ...(item.questionDetail || [])
      ])
      .flat();


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
    const submission = new Submission({
      examType:"Listening",
      userId,
      listeningTestId: id,
      audioId:audio._id,
      answers:userAnswer,
      score
    });

    
    await submission.save();

    res.status(200).json({
      message: "Submitted successfully",
      submitDetail:{
        score,
        total: allQuestions.length,
        submission
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


const getAllSubmittedListeningTest = async (req, res, next) => {
  try {
    let userId = req.user._id;
    const ListeningTest = await Submission.find({userId:userId,examType:"Listening"})
    if(!ListeningTest) {res.status(404); throw new Error("No Listening Test Found")}
    res.status(200).json({
      message: "Submitted successfully",
      exam:ListeningTest
    });

  } catch (error) {
    next(error)
  }
};

const getAllSubmittedReadingTest = async (req, res,next) => {
  try {
    const userId = req.user._id;
    console.log("userId: ", userId)
    const ReadingTest = await Submission.find({userId:userId,examType:"Reading"})
    if(!ReadingTest) {res.status(404); throw new Error("No Reading Test Found")}
    res.status(200).json({
      code:200,
        status:"SUCCESS",
      message: "Submitted successfully",
      exam:ReadingTest,
      
      
    });

  } catch (error) {
    next(error)
  }
};




const getDetailSubmittedListeningTest = async(req,res,next)=>{
  try{
      
      const { id } = req.params; // readingTest
      const ListeningTest = await Submission.findOne({_id:id})
      if(!ListeningTest) {res.status(404); throw new Error("No Listening Test Found")}
      res.status(200).json({
        code:200,
        status:"SUCCESS",
        message: "Submitted successfully",
        exam:ListeningTest
    });
  }
  catch(error){
      next(error)
  }
}

const getDetailSubmittedReadingTest = async(req,res,next)=>{
  try{
      
      const { id } = req.params; // readingTest
   
      const ReadingTest = await Submission.findOne({_id:id})
      if(!ReadingTest) {res.status(404); throw new Error("No Reading Test Found")}
      res.status(200).json({
        code:200,
        status:"SUCCESS",
        message: "Get test successfully",
        exam:ReadingTest
    });
  }
  catch(error){
      next(error)
  }
}
module.exports = { submitReadingTest,submitListeningTest,
  getAllSubmittedListeningTest,getAllSubmittedReadingTest,getDetailSubmittedListeningTest,getDetailSubmittedReadingTest };