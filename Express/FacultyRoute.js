const express = require('express');
const route = express.Router();

route.get('/first',(req,res)=>{
    res.send("fac 1");
})

route.get('/second',(req,res)=>{
    res.send("fac 2");
})

module.exports = route;