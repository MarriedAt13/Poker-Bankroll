const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Test route to verify backend is working
app.get('/api/health', (req, res) => {
  res.json({ message: 'Poker Bankroll API is running!' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
