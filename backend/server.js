const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API routes
app.get('/api/health', (req, res) => {
  res.json({ message: 'Poker Bankroll API is running!' });
});

// Explicit routes for each HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.get('/plo.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'plo.html'));
});

app.get('/tournament.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'tournament.html'));
});

app.get('/strategies.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'strategies.html'));
});

app.get('/plostrategies.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'plostrategies.html'));
});

app.get('/tournamentstrategies.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'tournamentstrategies.html'));
});

// Catch-all for any other requests
app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
