const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API routes first
app.get('/api/health', (req, res) => {
  res.json({ message: 'Poker Bankroll API is running!' });
});

// Serve static files from backend/public
const publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir));

// Optional explicit routes (guarantee pages work if needed)
// app.get('/', (req, res) => res.sendFile(path.join(publicDir, 'index.html')));
// app.get('/tournament.html', (req, res) => res.sendFile(path.join(publicDir, 'tournament.html')));
// app.get('/plo.html', (req, res) => res.sendFile(path.join(publicDir, 'plo.html')));
// app.get('/strategies.html', (req, res) => res.sendFile(path.join(publicDir, 'strategies.html')));
// app.get('/plostrategies.html', (req, res) => res.sendFile(path.join(publicDir, 'plostrategies.html')));
// app.get('/tournamentstrategies.html', (req, res) => res.sendFile(path.join(publicDir, 'tournamentstrategies.html')));

// 404 fallback (optional)
// app.use((req, res) => res.status(404).send('Page not found'));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
