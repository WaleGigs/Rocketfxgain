const express = require("express")
const { land, signUp, resetPassword, signIn } = require("../controllers/userController")
const userRouter = express.Router()

userRouter.get("/", land)
userRouter.post("/signup", signUp)
userRouter.post("/resetpassword",resetPassword)
userRouter.post('/signin', signIn)
module.exports = userRouter