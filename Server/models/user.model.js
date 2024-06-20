const mongoose = require("mongoose")
const bcrypt = require("bcrypt")


const userSchema = mongoose.Schema({
    firstName: {type:String,required:true},
    lastName : {type:String,required:true},
    password:{type:String, required:true},
    email: {type:String, unique: true },
    number:{type:Number,required:true }
 }) 
userSchema.pre("save",function(next){
    bcrypt.hash(this.password, 10).then((hashed)=>{
        this.password= hashed
        console.log(hashed);
        next()
    }).catch((err)=>{
        console.log(err);
    })
})


let userModel = mongoose.model("User", userSchema)

module.exports = userModel
