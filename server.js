const express = require('express');
const cors = require('cors');
const db = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

/* CREATE */
app.post('/student', (req, res) => {
  const { name, department, email } = req.body;
  const sql = "INSERT INTO student (name, department, email) VALUES (?, ?, ?)";

  db.query(sql, [name, department, email], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Student Added Successfully" });
  });
});

/* READ */
app.get('/student', (req, res) => {
  db.query("SELECT * FROM student", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

/* UPDATE */
app.put('/student/:id', (req, res) => {
  const { name, department, email } = req.body;
  const { id } = req.params;

  const sql = "UPDATE student SET name=?, department=?, email=? WHERE id=?";
  db.query(sql, [name, department, email, id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Student Updated" });
  });
});

/* DELETE */
app.delete('/student/:id', (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM student WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Student Deleted" });
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});







/* TEACHER CRUD API */

/* CREATE */
app.post('/teacher', (req, res) => {
  const { name, subject, email } = req.body;
  const sql = "INSERT INTO teacher (name, subject, email) VALUES (?, ?, ?)";

  db.query(sql, [name, subject, email], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Teacher Added Successfully" });
  });
});

/* READ */
app.get('/teacher', (req, res) => {
  db.query("SELECT * FROM teacher", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

/* UPDATE */
app.put('/teacher/:id', (req, res) => {
  const { name, subject, email } = req.body;
  const { id } = req.params;

  const sql = "UPDATE teacher SET name=?, subject=?, email=? WHERE id=?";
  db.query(sql, [name, subject, email, id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Teacher Updated" });
  });
});

/* DELETE */
app.delete('/teacher/:id', (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM teacher WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Teacher Deleted" });
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
