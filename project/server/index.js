const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const StudentModel = require('./model/Employee')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://ganesh123:ganesh123@cluster0.40z2ucv.mongodb.net/ga")

app.post('/log',(req,res)=>{
    const {email, password} = req.body;
    StudentModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("success")
            }
            else{
                res.json("the password is wrong")
            }

        }
        else{
            res.json("the record is not existing")   
        }
    })

})


app.post('/register',(req,res)=>{
    StudentModel.create(req.body)
    .then(student => res.json(student))
    .catch(err => res.json(err))

})

app.get("/",(req,res)=>{
    res.send("charan y from")
})

app.listen(3006, () => {
    console.log("server is running")
})