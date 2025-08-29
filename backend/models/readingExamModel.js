const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");


const TFNQuestionSchema = new mongoose.Schema({
    qid: { type: String, default: uuidv4 }, 
    questionText:{ type: String, required: true },
    answer: { type: String, enum: ["TRUE", "FALSE", "NOT GIVEN"] }
})

const YNNQuestionSchema = new mongoose.Schema({
    qid: { type: String, default: uuidv4 }, 
    questionText:{ type: String, required: true },
    answer: { type: String, enum: ["YES", "NO", "NOT GIVEN"] }
}) 

const MatchingQuestionMatching= new mongoose.Schema({ //MATCHING 
    qid: { type: String, default: uuidv4 }, 
    questionText:{ type: String, required: true },
    answer: { type: String }
}) 

const MCQuestionMatching= new mongoose.Schema({ //MULTIPLE CHOICE
    qid: { type: String, default: uuidv4 }, 
    questionText:{ type: String, required: true },
    optionText:[{ type: String, required: true }],
    answer: { type: String, enum: ["A", "B", "C","D"] }
}) 

const MatchingCompletePassage= new mongoose.Schema({ //Complete Passage 
    qid: { type: String, default: uuidv4 }, 
    answer: { type: String }
}) 


const questionDetailSchema= new mongoose.Schema({ //MULTIPLE CHOICE
    qid: { type: String, default: uuidv4 }, 
    questionText:{ type: String },
    optionText:[{ type: String}],
    answer: { type: String}
}) 

const questionSchema = new mongoose.Schema({
  type: { 
    type: String, 
    enum: [
      
      "True / False/ Not Given",
      "Matching",
      "Multiple Choice",
      "Complete Passage"
    ],
    required: true
  },
    questionGuideline : {type:String},
    questionDescription : {type:String},

    questionPassage : {type:String},

    questionMatchOption:[{ type: String }], //Matching
    questionDetail:[questionDetailSchema],
    // questionTFN : [TFNQuestionSchema],
    // questionYNN : [YNNQuestionSchema],
    // questionMatching : [MatchingQuestionMatching],
    // questionMultipleChoice : [MCQuestionMatching],

    // questionCompletePassage : [MatchingCompletePassage],


    // detail: { type: mongoose.Schema.Types.Mixed, required: true } // chứa dữ liệu theo type
});

const passageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  questionsPartOne: questionSchema,
  questionsPartTwo: questionSchema,
  questionsPartThree: questionSchema
});

const readingTestSchema = new mongoose.Schema({
  name: { type: String}, 
  passages: { type: mongoose.Schema.Types.ObjectId, ref: "PassageReading" },
  createdAt: { type: Date, default: Date.now }
});

const ReadingTest = mongoose.model("ReadingTest", readingTestSchema);
const PassageReading = mongoose.model("PassageReading", passageSchema);

module.exports = { ReadingTest, PassageReading };
