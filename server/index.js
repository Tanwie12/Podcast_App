const express=require('express');
const app=express();
const cors=require('cors');
const cookieParser = require('cookie-parser');
const db = require('./config/db');
const { notFound, errorHandler } = require('./middlerware/errorMiddleware');
require('dotenv').config();


// Parse JSON bodies (for JSON-encoded data)
app.use(express.json());

// Parse URL-encoded bodies (for form data)
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(cors());


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
