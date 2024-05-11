const multer = require('multer');
const path = require('path');


// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    // Rename uploaded file if needed, for example, appending current timestamp
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage: storage });

// Handle file upload
const uploadFile = (req, res) => {
  upload.single('file')(req, res, (err) => {
    if (err) {
      // Handle upload error
      return res.status(500).json({ error: err.message });
    }
    // If file is uploaded successfully, send a success response
    return res.status(200).send('File uploaded successfully');
  });
};

module.exports = { uploadFile };
