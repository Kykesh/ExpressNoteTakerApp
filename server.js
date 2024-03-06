const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Helper function to read the db.json file
const readDbFile = () => {
  return JSON.parse(fs.readFileSync(path.join(__dirname, 'db/db.json'), 'utf8'));
};

// Helper function to write to the db.json file
const writeDbFile = (notes) => {
  fs.writeFileSync(path.join(__dirname, 'db/db.json'), JSON.stringify(notes, null, 4), 'utf8');
};

// HTML Routes
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// API Routes
app.get('/api/notes', (req, res) => {
  const notes = readDbFile();
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
  const notes = readDbFile();
  const newNote = { ...req.body, id: uuidv4() };
  notes.push(newNote);
  writeDbFile(notes);
  res.json(newNote);
});

// BONUS: DELETE route
app.delete('/api/notes/:id', (req, res) => {
  let notes = readDbFile();
  notes = notes.filter(note => note.id !== req.params.id);
  writeDbFile(notes);
  res.json({ ok: true });
});

// If no matching route is found, default to home
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
