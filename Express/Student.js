const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: Number,
    name: String,
    age: Number,
    rollNo: Number,
    email:String,
    department: String,
    semester: Number
});

module.exports = mongoose.model("Student",schema);