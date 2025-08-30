const User = require("../../models/userModel")

const getUserDetail= async(req,res,next)=>{
    try{ 
        const userId = req.user._id;

        const user = await User.findOne({_id:userId});

        return res.status(200).json({
            message:"Change Password Successfully",
            status:"Success",
            code:200,
            user
            
        
        });

    }
    catch(error){
        next(error)
    }
}



module.exports = {getUserDetail}