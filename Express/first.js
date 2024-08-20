const express = require('express');
const app = express();
const students = ['arjun','bala','rakjot','gujarat','INDIA'];
app.get('/student',(req,res)=>{
    res.send(students);
});
app.get('/student/:index',(req,res)=>{
    const {index} = req.params;
    res.send(students[index]);
});
app.post('/student/:name',(req,res)=>{
    const {name} = req.params;
    students.push(name);
    res.send("Student Added successfully");
});
app.patch('/student/:index/:newname',(req,res)=>{
    const {index,newname} = req.params;
    students[index] = newname;
    res.send("Student Updated Successfully");
});
app.delete('/student/:index',(req,res)=>{
    const {index} = req.params;
    students.splice(index,1);
    res.send("Student Deleted Successfully");
})
app.listen(3000,()=>{
    console.log("Server started at 3000")
})