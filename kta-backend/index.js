require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Simple health endpoint used by load balancers / deployment platforms
app.get('/health', (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

// Root for quick check
app.get('/', (req, res) => {
  res.send('KTA PMII backend (minimal) — /health available');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`KTA PMII backend listening on ${PORT}`));
