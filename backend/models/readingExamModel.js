const mongoose = require("mongoose");

const TFNQuestionSchema = new mongoose.Schema({
    questionText:{ type: String, required: true },
    answer: { type: String, enum: ["True", "False", "Not given"] }
})

const YNNQuestionSchema = new mongoose.Schema({
    questionText:{ type: String, required: true },
    answer: { type: String, enum: ["Yes", "No", "Not given"] }
}) 

const MatchingQuestionMatching= new mongoose.Schema({ //MATCHING 
    questionText:{ type: String, required: true },
    answer: { type: String }
}) 

const MCQuestionMatching= new mongoose.Schema({ //MULTIPLE CHOICE
    questionText:{ type: String, required: true },
    answer: { type: String, enum: ["A", "B", "C","D"] }
}) 

const MatchingCompletePassage= new mongoose.Schema({ //Complete Passage 
    answer: { type: String }
}) 

const questionSchema = new mongoose.Schema({
  type: { 
    type: String, 
    enum: [
      
      "True / False/ Not Given",
      "Yes /No / Not Given",
      "Matching",
      "Multiple Choice",
      "Complete Passage"
    ],
    required: true
  },
    questioGuidline : {type:String, required:true},
    questionDescription : {type:String, required:true},

    questionPassage : {type:String, required:true},

    questionTFN : [TFNQuestionSchema],
    questionYNN : [YNNQuestionSchema],
    questionMatching : [MatchingQuestionMatching],
    questionMultipleChoice : [MCQuestionMatching],

    questionCompletePassage : [MatchingCompletePassage],


    // detail: { type: mongoose.Schema.Types.Mixed, required: true } // chứa dữ liệu theo type
});

const passageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  questionsPart1: [questionSchema],
  questionsPart2: [questionSchema],
  questionsPart3: [questionSchema],
});

const readingTestSchema = new mongoose.Schema({
  title: { type: String, required: true }, //Title
  duration: { type: Number, required: true }, // phút
  passages1: [passageSchema],
  passages2: [passageSchema],
  passages3: [passageSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("ReadingTest", readingTestSchema);
