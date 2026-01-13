const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Sample")
.then(()=>console.log("connected sucessfully"))
.catch((err)=>{console.log(err)})

const student = new mongoose.Schema({
  name:String,
  workOut:Boolean,
  height:Number
})


const Student = new mongoose.model("Student",student)


const add = async ()=>{

const ss = await Student.create({
   
  name:"GOURAV",
  workOut:true,
  height:6

})

console.log(ss)

}

// add();
const find = async ()=>{
const f = await Student.find({height:{$eq:6}});

console.log(f)

}

find();