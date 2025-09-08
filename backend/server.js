const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// DEBUG: Check what files exist
app.get('/debug', (req, res) => {
  try {
    const currentDir = __dirname;
    const parentDir = path.join(__dirname, '..');
    
    const backendFiles = fs.readdirSync(currentDir);
    const parentFiles = fs.readdirSync(parentDir);
    
    res.json({
      currentDirectory: currentDir,
      parentDirectory: parentDir,
      backendFiles: backendFiles,
      parentFiles: parentFiles,
      indexExists: fs.existsSync(path.join(parentDir, 'index.html'))
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// Serve static files from parent directory
app.use(express.static(path.join(__dirname, '..')));

// API routes
app.get('/api/health', (req, res) => {
  res.json({ message: 'Poker Bankroll API is running!' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
