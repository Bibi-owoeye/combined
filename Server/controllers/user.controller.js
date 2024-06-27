const userModel = require("../models/user.model");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const secret = process.env.SECRET
const dotenv = require ("dotenv")
dotenv.config()



const ListofStudents = (req, res) => {
    res.send([
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz"
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv"
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net"
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org"
        }
    ])
}
const welcomeUser = (req, res) => {
    res.send("Welcome user");

}
const dashboard = (req, res) => {
    userModel.find().then((data)=>{
        res.send({data:data});
        console.log(data);
        
    })

}
const Verified = (req, res) => {
    let token = (req.headers.authorization.split(" ")[1]);
    jwt.verify( token, secret,(err, result)=>{
        if (err){
            res.send({message: "authenticated failed", status:false, user: err});
            console.log(err);
        }else{
            res.send({message: "authenticated user", status:true, user: result});
            console.log(result);}
    })
}
const getRegister = (req, res) => {
    res.send("welcome to register route");

}
const postRegister = async (req, res) => {
    try {
        const { firstName, lastName, password, email, number } = req.body
        let user = new userModel({ firstName: firstName, lastName: lastName, password: password, email: email, number: number })
        await user.save()
        console.log("user is saved");
        console.log(req.body);
        res.send("user saved");
    } catch (err) {
        console.log(err);
        console.log("user is not saved");
        res.status(400).send("user not saved")
        // if (err){
        //     usedEmail.style.display = "yes"
        // }
    }


}

const sendMail = (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    const mailOptions = {
        from: process.env.EMAIL, // sender address
        to: 'olabisiowo123@gmail.com, samsonaderoumu', // list of receivers
        subject: "Hello Bibi", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      };
       transporter.sendMail(mailOptions).then((info)=>{
        console.log(info);
        res.status(201).json({message: 'message sent succesfully', status: 'true'});
      }).catch((error)=>{
        res.status(201).json({message: 'Failed', status: 'false'});
        console.log(error);
      })
    
}

// const transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // Use `true` for port 465, `false` for all other ports
//     auth: {
//       user: "maddison53@ethereal.email",
//       password: "jn7jnAPss4f63QBp6D",
//     },
//   });
const getSignin =async (req, res) => {
    const {email,passwod}= req.body

}

const postSignin = async (req, res) => {

    const {email, password} = req.body
    let user;
    try{
        user = await userModel.findOne({email:email})
        console.log(user);
    }catch(error){
        return new Error
    }
    if (!user){
        res.status(400).json({
            Message: "user not found, please sign up!!"
        })
        console.log(("user not found,please sign up!!"));
    }

    const correctPassword = await bcrypt.compareSync(password, user.password)
    if (!correctPassword){
        res.status(401).json({
            Message:"Wrong login details"
        })
        console.log("Wrong login details");
    }
    else{
        const token = jwt.sign({user: user.email }, secret, {expiresIn : 10})
        res.status(200).json({
            Message: 'User logged in successfully',
            status:true,
            token: token
        })
        console.log("user logged in successfully");
    }
    //userModel.findOne({email:email}).then((result)=>{

    //    if (result) {
    //     console.log(result);
    //     res.send("user saved")
        
    //    }else{
    //     console.log("user error");
    //    }
    // }).catch ((err)=>{
    //         console.log(err);
    //         res.send("user does not exist")
    //         console.log("user not saved")
    //     }) 




    // try {
    //     const { email, password } = req.body
    //     let user = await userModel.find({ email: email, password: password })
        
    //     console.log("user saved");
    //     res.send("user saved")

    // }
    // catch (err) {
    //     console.log(err);
    //     res.send("user does not exist")
    //     console.log("user not saved");
    // }

}


module.exports = { welcomeUser,Verified, ListofStudents,sendMail, dashboard, postRegister, getRegister, getSignin, postSignin }
