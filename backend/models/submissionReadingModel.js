const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId, required: true }, // tham chiếu tới câu hỏi trong passage
  answer: { type: String, required: true } // đáp án mà user chọn/nhập
});

const readingAttemptSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  readingTestId: { type: mongoose.Schema.Types.ObjectId, ref: "ReadingTest" },
  passageId: { type: mongoose.Schema.Types.ObjectId, ref: "PassageReading" },
  
    answers: [answerSchema],
    
  score:{type:Number},
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("ReadingSubmission", readingAttemptSchema);
