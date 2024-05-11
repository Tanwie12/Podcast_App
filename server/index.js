const express = require('express');
const app = express();
const path = require('path');
const { uploadFile } = require('./controllers/uploadController');

const cors = require('cors');
const cookieParser = require('cookie-parser');
const db = require('./config/db');
const { notFound, errorHandler } = require('./middlerware/errorMiddleware');
require('dotenv').config();
const OnlineUrl = process.env.ORIGIN_O;
const OfflineUrl = process.env.ORIGIN_F;

// Parse JSON bodies (for JSON-encoded data)
app.use(express.json());

// Parse URL-encoded bodies (for form data)
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// Define allowed origins based on environment
const allowedOrigins = process.env.NODE_ENV === "development"
  ? ['http://localhost:3000']
  : ['https://podcastfinal.netlify.app'];

// CORS configuration
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));


// Route to handle file upload
app.post('/upload', uploadFile);

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// routes
app.use('/api/users', require('./routes/UserRoutes'));
app.use('/api/goals', require('./routes/GoalRoutes'));
app.use(notFound);
app.use(errorHandler);

// MongoDB connection
db().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}!`);
  });
});
