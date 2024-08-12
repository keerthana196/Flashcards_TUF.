const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.PASSWORD,
  database: 'flashcard_db',
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL is now Connected... ');
});

// Routes
app.get('/flashcards', (req, res) => {
  const sql = 'SELECT * FROM flashcards';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.post('/flashcards', (req, res) => {
  const { question, answer } = req.body;
  const sql = 'INSERT INTO flashcards (question, answer) VALUES (?, ?)';
  db.query(sql, [question, answer], (err, result) => {
    if (err) throw err;
    res.send('Flashcard added');
  });
});

app.put('/flashcards/:id', (req, res) => {
  const { id } = req.params;
  const { question, answer } = req.body;
  const sql = 'UPDATE flashcards SET question = ?, answer = ? WHERE id = ?';
  db.query(sql, [question, answer, id], (err, result) => {
    if (err) throw err;
    res.send('Flashcard updated');
  });
});

app.delete('/flashcards/:id', (req, res) => {
    const { id } = req.params;
  
    console.log(`Received ID: ${id}`); // Debugging line
  
    if (!id || isNaN(id)) {
      return res.status(400).send('Invalid ID');
    }
  
    const sql = 'DELETE FROM flashcards WHERE id = ?';
    db.query(sql, [parseInt(id, 10)], (err, result) => {
      if (err) {
        console.error(err); // Log the error for debugging
        return res.status(500).send('Server error');
      }
      if (result.affectedRows === 0) {
        return res.status(404).send('Flashcard not found');
      }
      res.send('Flashcard deleted');
    });
  });
  
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });