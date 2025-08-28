const { ReadingTest } = require("../models/readingExamModel")
const { PassageReading } = require("../models/readingExamModel")
const getAllPassage = async (req,res,next)=>{
    try{
          const tests = await PassageReading.find();
            res.status(200).json(tests);
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: "Lỗi server" });
    }
}

const getAllReadingTest = async (req,res,next)=>{
    try{
          const tests = await ReadingTest.find().populate("passages");;
            res.status(200).json(tests);
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: "Lỗi server" });
    }
}



module.exports = {getAllReadingTest,getAllPassage};