const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
        fullname:{
            type:String
        
        },
        email:{
            type:String,
            required:[true,"Please add the email"],
            unique:true,
            match: [/^\S+@\S+\.\S+$/, "Email không hợp lệ"]
        },
        password:{
            type:String,
            required:function() {
                return !this.isGoogleUser; 
            },
        },

        gender:{

            type:String,
            enum:['Nữ','Nam','Khác'],
            default:'Khác'
        },

        cardInfo:[
            {
                nganHang: String,
                ngayPhatHanh: { type: Date },
                soThe: { type: String, select: false },
                tenChuThe: String,
                ngayHetHan: { type: Date }
            }
        ],

        role:{
            type:String,
            enum:['Free user','Paid user','Admin'],
            required:[true,"Vui long them role"]
        },
        refreshToken:{

            type:String
        },
        isGoogleUser:{
            type:Boolean,
            required:[true,"Please type of the user"],
            default:false
        }
    
    }
    ,
    {
        timestamps: true
    }


    
);

module.exports = mongoose.model("User",userSchema);