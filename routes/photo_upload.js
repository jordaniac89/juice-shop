const express = require('express');
const csurf = require('csurf');
const helmet = require('helmet');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(csurf());
app.use(helmet());
const upload = multer({ dest: 'uploads/' });

// Serve static files
app.use(express.static('public'));

// Handle file upload
app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }

    // Do something with the uploaded file
    // For example, you can save it to a database or store it on disk

    res.send('File uploaded successfully');
});

// Handle file download
app.get('/download/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'uploads', filename);

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        return res.status(404).send('File not found');
    }

    // Stream the file to the client
    res.sendFile(filePath);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});