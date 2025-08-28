const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId, required: true }, // tham chiếu tới câu hỏi trong passage
  answer: { type: String}, // đáp án mà user chọn/nhập
  correctAnswer:{ type: String },
  isCorrect:{type:Boolean}
});

const listeningAttemptSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    listeningTestId: { type: mongoose.Schema.Types.ObjectId, ref: "ListeningTest" },
    audioId: { type: mongoose.Schema.Types.ObjectId, ref: "AudioListening" },
    
    answers: [answerSchema],
        
    score:{type:Number},
    submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("ListeningSubmission", listeningAttemptSchema);
