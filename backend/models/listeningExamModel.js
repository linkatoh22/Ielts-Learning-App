const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");


const CompletePassage= new mongoose.Schema({ //Complete Passage 
    qid: { type: String, default: uuidv4 }, 
    answer: { type: String }
}) 


const CompleteSentences= new mongoose.Schema({ //CHOOSE ANSWER
    qid: { type: String, default: uuidv4 }, 
    CompleteSentences:{ type: String, required: true },
    answer: { type: String }
}) 


const ChooseAnswer= new mongoose.Schema({ //MULTIPLE CHOICE
    qid: { type: String, default: uuidv4 }, 
    questionText:{ type: String, required: true },
    optionText:[{ type: String, required: true }],
    answer: { type: String, enum: ["A", "B", "C","D"] }
}) 


const questionDetailSchema= new mongoose.Schema({ //MULTIPLE CHOICE
    qid: { type: String, default: uuidv4 }, 
    questionText:{ type: String},
    optionText:[{ type: String}],
    answer: { type: String},
    CompleteSentences:{ type: String}
}) 


const questionSchema = new mongoose.Schema({
  type: { 
    type: String, 
    enum: [
      
      "Complete Passage", //Hinh anh optional
      "Choose Answer",
      "Complete Sentences", //Hinh anh optional
      
    ],
    required: true
  },
    questionGuideline : {type:String},
    questionDescription : {type:String},

    questionPassage : {type:String}, //Complete Passage

    questionMatchOption:[{ type: String }], //Matching

    questionTextMA :[{ type: String, required: true }], ///Matching Answer
    questionDetail:[questionDetailSchema],
    // questionCP: [CompletePassage],
    // questionCA : [ChooseAnswer],
    // questionCS : [CompleteSentences],

    

});

const audioSchema = new mongoose.Schema({
  title: { type: String},
  audioSrc: { type: String, required: true },
  questionsPart: [questionSchema]
});

const listeningTestSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  audio: { type: mongoose.Schema.Types.ObjectId, ref: "AudioListening" },
  createdAt: { type: Date, default: Date.now }
});

const ListeningTest = mongoose.model("ListeningTest", listeningTestSchema);
const audioListening = mongoose.model("AudioListening", audioSchema);

module.exports = { ListeningTest, audioListening };
