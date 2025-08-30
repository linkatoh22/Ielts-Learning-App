const express=  require("express");
const router= express.Router();

const {logIn,logOut,signUp} = require("../controllers/Authentication/authController.js")
const {verifyOTP,resendOTP} = require("../controllers/Authentication/authOTPControllers.js");

const {googleCallback} = require("../controllers/Authentication/authGoogleControllers.js")
const passport = require("passport");

const {handleAccessToken} = require("../controllers/Authentication/tokenController.js")
require('../configs/google.js')
 
const {sendResetLinkToEmail,changePassword} = require("../controllers/User/changePassword.js")
const {AuthMiddleware} = require("../middlewares/authMiddlewares");


const {getUserDetail} = require("../controllers/User/userInfoControllers.js")
//LOG IN AND SIGN UP GOOGLE
router.get('/google',
    passport.authenticate('google',{
        scope:['profile','email']
    })
);

router.get(
    '/google/callback',
    passport.authenticate('google',{session:false,failureRedirect:'/log-in'}),
    googleCallback
    
)

//RESET REFRESH TOKEN
router.route("/handle-access-token").get(handleAccessToken)


//LOGIN AND SIGN UP NORMAL
router.route("/sign-up").post(signUp);

router.route("/log-in").post(logIn);

router.route("/log-out").get(logOut);


///OTP
router.route("/verify-OTP").post(verifyOTP);
router.route("/resend-OTP").post(resendOTP);

//CHANGE PASSWORD
router.route("/forget-password/send-link").post(sendResetLinkToEmail);
router.route("/forget-password/change-password/:token").put(changePassword);


router.route("/get-user-info").get(AuthMiddleware,getUserDetail)
module.exports = router;