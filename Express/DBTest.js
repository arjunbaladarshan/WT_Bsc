const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Student = require('./Student');
const Faculty = require('./Faculty');


const connectionString = "mongodb+srv://user2:User2@cluster0.yc9qf4t.mongodb.net/bscdb"
mongoose.connect(connectionString).then(()=>{
    console.log("Connected to DB");
    const app = express();
    app.use(bodyParser.urlencoded());

    //Get all
    app.get('/faculties',async (req,res)=>{
        const ans = await Faculty.find();
        res.send(ans);
    });

    //Get all
    app.get('/students',async (req,res)=>{
        const ans = await Student.find();
        res.send(ans);
    });

    //Get by ID
    app.get('/students/:id',async (req,res)=>{
        const ans = await Student.findOne({rollNo:req.params.id});
        res.send(ans);
    });

    //Create
    app.post('/students',async (req,res)=>{
        stu = new Student({...req.body});
        const ans = await stu.save();
        res.send(ans);
    });

    //Delete
    app.delete('/students/:id',async (req,res)=>{
        const ans = await Student.deleteOne({rollNo:req.params.id});
        res.send(ans);
    });

    //Update
    app.patch('/students/:id',async (req,res)=>{
        const stu = await Student.findOne({rollNo:req.params.id});
        stu.name = req.body.name;
        
        const ans = await stu.save();
        res.send(ans);
    })


    app.listen(3000,()=>{
        console.log("Server started @ 3000");
    })
});


