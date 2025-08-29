const { ReadingTest } = require("../models/readingExamModel")
const { PassageReading } = require("../models/readingExamModel")
const getAllPassage = async (req,res,next)=>{
    try{
          const tests = await PassageReading.find();
            if(!tests) {res.status(404); throw new Error("No Reading Test Found")};
          
            return  res.status(200).json({
                    code:200,
                    status:"SUCCESS",  
                    exam:tests
            });
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: "Lỗi server" });
    }
}

const getAllReadingTest = async (req,res,next)=>{
    try{
          const tests = await ReadingTest.find()
        //   .populate("passages");

          if(!tests) {
            res.status(404); 
            throw new Error("No Reading Test Found")
        };

        return res.status(200).json({
                    code:200,
                    status:"SUCCESS",  
                    exam:tests
            });
    }
    catch(error){
        next(error)
    }
}

const getDetailReadingTest = async(req,res,next)=>{
  try {
      const { id } = req.params; // readingTest

      const tests = await ReadingTest.findOne({_id:id}).populate("passages"); // đúng model

      if(!tests) {res.status(404); throw new Error("No Reading Test Found")}
      return res.status(200).json({
              code:200,
              status:"SUCCESS",  
              exam:tests
      });

  } catch (error) {
      next(error);
  }
}



module.exports = {getAllReadingTest,getAllPassage
    ,getDetailReadingTest};