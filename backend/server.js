const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static files from parent directory (where index.html is)
app.use(express.static(path.join(__dirname, '..')));

// API routes
app.get('/api/health', (req, res) => {
  res.json({ message: 'Poker Bankroll API is running!' });
});

// Serve your calculator at the root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
