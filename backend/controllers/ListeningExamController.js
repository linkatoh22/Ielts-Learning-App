const { ListeningTest, audioListening } = require("../models/listeningExamModel")
const getAllAudio= async (req,res,next)=>{
    try{
        
          const tests = await audioListening.find();
            return res.status(200).json({
              code:200,
              status:"SUCCESS",
              message:"Get Audio successfully",  
              exam:tests
            });
    }
    catch(error){
        next(error);
    }
}

const getAllListeningTest = async (req, res, next) => {
  try {
    const tests = await ListeningTest.find().populate("audio"); // đúng model
     return  res.status(200).json({
              code:200,
              status:"SUCCESS",
              message:"Get Listening test successfully",  
              exam:tests
    });
  } catch (error) {
    next(error);
  }
};

const getDetailListeningTest = async(req,res,next)=>{
  try {
      
      const { id } = req.params; // listeningTest

      const tests = await ListeningTest.findOne({_id:id}).populate("audio"); // đúng model
      if(!tests) {res.status(404); throw new Error("No Listening Test Found")}
      
      return res.status(200).json({
              code:200,
              status:"SUCCESS",
              message:"Get Listening test successfully",
              exam:tests
      });

  } catch (error) {
      next(error);
      
  }
}


module.exports = {getAllAudio,getAllListeningTest,
  getDetailListeningTest};