const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

const students = [
    {
        id:1014,
        name:'khushi',
        email:"khushi@darshan.ac.in",
        department:"CSE",
        city:'rajkot'
    },
    {
        id:1054,
        name:'darsh',
        email:"darsh@darshan.ac.in",
        department:"CSE",
        city:'rajkot'
    },
];

//getAllX
app.get('/students',(req,res)=>{
    res.send(students);
});

//getXByID
app.get('/students/:id',(req,res)=>{
    const ans = students.find((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    res.send(ans);
});

//create
app.post('/students',(req,res)=>{
    students.push(req.body);
    res.send("Student added");
});

//delete
app.delete('/students/:id',(req,res)=>{
    const {id} = req.params;
    const index = students.findIndex((stu)=>{
        if(stu.id==id){
            return true;
        }
    })
    students.splice(index,1);
    res.send("Student Deleted Successfully");
});

app.patch('/students/:id',(req,res)=>{
    const {id} = req.params;
    const index = students.findIndex((stu)=>{
        if(stu.id==id){
            return true;
        }
    });

    students[index] = req.body;
    res.send("Student Edited");
})

app.listen(3000,()=>{
    console.log('server started @ 3000');
})