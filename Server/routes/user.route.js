const express = require("express")
const router = express.Router()
const { welcomeUser ,ListofStudents,Verified, dashboard ,getRegister ,sendMail,postRegister,getSignin,postSignin} = require("../controllers/user.controller")


router.get("/welcome", welcomeUser)
router.get("/dashboard", dashboard)
router.get("/verifyUser", Verified)
router.post("/register", postRegister)
router.get("/register", getRegister)
router.get("/signin", getSignin)
router.post("/signin", postSignin)
router.get("/listofstudent", ListofStudents)
router.get('/sendMail', sendMail)


module.exports = router
