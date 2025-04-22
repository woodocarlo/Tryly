// server.js (Backend - Express)
const express = require('express');
const cors = require('cors');
const multer = require('multer'); // for handling image uploads
const path = require('path');
const app = express();
const port = 5000;

app.use(cors());

// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// API endpoint to upload the captured image
app.post('/upload', upload.single('image'), (req, res) => {
  if (req.file) {
    res.json({ message: 'File uploaded successfully', filePath: `/uploads/${req.file.filename}` });
  } else {
    res.status(400).json({ message: 'No file uploaded' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
