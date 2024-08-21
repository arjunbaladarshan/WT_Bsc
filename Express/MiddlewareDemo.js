const express = require('express');
const app = express();
const facultyRoutes = require('./FacultyRoute');
const studentRoutes = require('./StudentRoute');

app.use('/faculty',facultyRoutes);
app.use('/student',studentRoutes);
app.use('/koinenokav',express.static('pdf'));

app.listen(3000,()=>{
    console.log("Server started @ 3000");
})