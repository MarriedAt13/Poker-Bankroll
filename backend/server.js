const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API first
app.get('/api/health', (req, res) => {
  res.json({ message: 'Poker Bankroll API is running!' });
});

// Serve all static files from the repo root (parent of backend)
app.use(express.static(path.join(__dirname, '..')));

// No explicit app.get('/') needed; express.static serves index.html by default
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
