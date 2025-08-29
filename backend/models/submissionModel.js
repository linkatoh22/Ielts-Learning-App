const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId, required: true }, // tham chiếu tới câu hỏi trong passage
  answer: { type: String}, // đáp án mà user chọn/nhập
  correctAnswer:{ type: String },
  isCorrect:{type:Boolean}
});

const SubmissionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    
    examType:{type:String,enum: ["Listening", "Reading"]},

    listeningTestId: { type: mongoose.Schema.Types.ObjectId, ref: "ListeningTest" },
    audioId: { type: mongoose.Schema.Types.ObjectId, ref: "AudioListening" },

    readingTestId: { type: mongoose.Schema.Types.ObjectId, ref: "ReadingTest" },
    passageId: { type: mongoose.Schema.Types.ObjectId, ref: "PassageReading" },
    
    answers: [answerSchema],
        
    score:{type:Number},
    questionlength:{type:Number},
    submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Submission", SubmissionSchema);
