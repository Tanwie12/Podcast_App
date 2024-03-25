const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const cookieParser = require('cookie-parser');
const db = require('./config/db');
const { notFound, errorHandler } = require('./middlerware/errorMiddleware');
require('dotenv').config();



app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());


// routes
app.use('/api/users', require('./routes/UserRoutes'));
app.use('/api/goals',require('./routes/GoalRoutes'));   
app.use(notFound);
app.use(errorHandler);
// mongo db connection

db();


app.listen (process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}! 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 � `);
});
