const express = require('express')
const app=express()

app.get("/home",(req,res)=>{
    res.send("Krisha Devmurari")
})
app.get("/about",(req,res)=>{
    res.send("shubham bakas=samixa bakas")
})
app.get("/contact",(req,res)=>{
    res.send("5678390452")
})
app.get("/blog",(req,res)=>{
    res.send("samixa slaisly cherry bloser")
})
app.listen(3001,()=>{
     console.log("start at 3001:")
})