const express = require("express");
const app = express();
app.use(express.json()); // для розбору JSON у вхідних запитах
const notes = []; // "in-memory" масив для зберігання заміток
// Головний маршрут
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
// Отримання списку заміток
app.get("/notes", (req, res) => {
  res.json(notes);
});
// Додавання нової замітки
app.post("/notes", (req, res) => {
  const note = req.body;
  notes.push(note);
  res.status(201).json(note);
});
// Оновлення замітки за ідентифікатором
app.put("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedNote = req.body;
  const noteIndex = notes.findIndex((note) => note.id === id);
  if (noteIndex !== -1) {
    notes[noteIndex] = updatedNote;
    res.json(updatedNote);
  } else {
    res.status(404).send("Note not found");
  }
});
// Видалення замітки за ідентифікатором
app.delete("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const noteIndex = notes.findIndex((note) => note.id === id);
  if (noteIndex !== -1) {
    notes.splice(noteIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send("Note not found");
  }
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
