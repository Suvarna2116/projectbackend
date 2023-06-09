const express=require("express")
const cors=require("cors")
const bodyParser=require("body-parser")
const port=process.env.PORT||5000;
const mongoose=require("mongoose")
const Content=require("./Schema")
console.log(Content)
const app=express()
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())
app.use(cors())
mongoose.connect("mongodb+srv://Suvarna:Suvarna@cluster0.zctitke.mongodb.net/FirstDB?retryWrites=true&w=majority")
    .then(()=>{
        console.log("MongoDB connected Successfully")
    })
    .catch((err)=>{
        console.log(err)
    })
app.get("/",(req,res)=>{
    res.send("Hello!!!!")
})
app.get("/users",async(req,res)=>{
    await Content.find()
         .then(found=>console.log(found))
})
app.get("/store",(req,res)=>{
    const username="Test@mail.com"
    const password="Test"
    const newData=new Content({
        username,password
    })
    newData.save()
})
app.listen(port,()=>console.log("Server Started"))
