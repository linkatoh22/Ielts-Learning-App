const { ListeningTest, audioListening } = require("../models/listeningExamModel")

const getAllAudio= async (req,res,next)=>{
    try{
        console.log("GET ALL AUDIO")
          const tests = await ListeningTest.find();
            res.status(200).json(tests);
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: "Lỗi server" });
    }
}

const getAllListeningTest = async (req, res, next) => {
  try {
    console.log("GET ALL LISTENING TEST");
    const tests = await ListeningTest.find().populate("audio"); // đúng model
    res.status(200).json(tests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Lỗi server" });
  }
};



module.exports = {getAllAudio,getAllListeningTest};