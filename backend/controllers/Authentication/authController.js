const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/userModel")
const {generateAccessToken, generateRefreshToken} = require("../../utils/TokenFunc")
const {sendOTPVerificationEmail} = require("./authOTPControllers");


const signUp = async (req, res,next)=>{
    try{
        const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        console.log("signUp: ", fullUrl);

        const {email,password,fullname} = req.body;
        
        if( !email || !password || !fullname){
            res.status(400);
            throw new Error("Vui lòng nhập đủ các thông tin.");
            
        }
        
        var userAvailable = await User.findOne({email:email});  
        
        if(userAvailable ){
            res.status(400);
            throw new Error("Email này đã được đăng ký.");
        }
        
        const hashedPassword = await bcrypt.hash(password,10);
        
        
            
        const user = await User.create(
                {
                    fullname,
                    email,
                    password:hashedPassword,
                    role:"Free user",
                    isGoogleUser:false
                }
            )
            
        
        return res.status(200).json({
            status:"Success",
            code:200,
            message:"Tạo user thành công",
            data:{
                user
            },
        })
        
    }
    catch (error){
        
         return res.status(404).json({
            status:"FAILED",
            code:404,
            message:error.message,
            
        })
    }

    
    
}

const logIn = async (req, res,next)=>{
    try{
        const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        console.log("logIn: ", fullUrl);


        const {email,password} = req.body;
        const user = await User.findOne({email:email});
        
        if(!user||user.verified==false){

            res.status(400);
            throw Error("Tài khoản email này chưa đăng ký.")
        }
        
        
        const isMatch = await bcrypt.compare(password, user.password);
        
        
        if(!isMatch){
             res.status(401);
            throw new Error ("Sai mật khẩu hoặc email.");
        }
        
        const accessToken = generateAccessToken(user)
        
        const refreshToken = generateRefreshToken(user)
        

        await User.updateOne({_id:user._id},  {refreshToken:refreshToken });
        const Secure = process.env.SECURE == "true"? true:false;
        
        

        res.cookie("refreshToken",refreshToken,{
            httpOnly:true,
            secure: Secure, 
            //DEPLOY THÌ CHUYỂN SANG true
            sameSite: process.env.SAME_SITE, 
            //DEPLOY THÌ CHUYỂN SANG None
            maxAge:7*24*60*60*1000
        })

        return res.status(200).json({
            message:"Login Successfully",
            status:"Success",
            code:200,
            data:{
                email:user.email,
                fullname: user.fullname
            },
            token:{
                accessToken,
                refreshToken
            }
        
        });
        

    }
    catch(error){
        next(error);
    }
}

const logOut = async(req,res,next) =>{
    try{
        const refreshToken = req.cookies.refreshToken;
        
        if(!refreshToken){
            res.status(404)
            throw new Error("Không tìm thấy Refresh Token.");
        }

        const user = await User.findOne({refreshToken}).lean();
        
        if(!user){
            res.status(400)
            throw new Error("Refresh Token không hợp lệ.");
        }
        
        await User.updateOne({refreshToken:refreshToken},{$unset:{refreshToken:refreshToken}})
        
        res.clearCookie("refreshToken", { httpOnly: true, secure: true, sameSite: 'None' });

        return res.status(200).json({
            message:"Log Out Successfully",
            
            status:"Success",
            code:200,
        });

    }   
    catch(error){
        next(error);
    } 

}



module.exports = {logIn,signUp,logOut};