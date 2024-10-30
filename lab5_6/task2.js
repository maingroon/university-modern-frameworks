const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log("Request received", req.method, req.url);
  next();
});

const items = [];

app.get("/items", (req, res) => {
  res.json(items);
});

app.get("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    res.json(items[itemIndex]);
  } else {
    res.status(404).send("Item not found");
  }
});

app.post("/items", (req, res) => {
  const item = req.body;
  items.push(item);
  res.status(201).json(item);
});

app.put("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  const itemIndex = items.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    items[itemIndex] = updatedItem;
    res.json(updatedItem);
  } else {
    res.status(404).send("Item not found");
  }
});

app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    items.splice(itemIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send("Item not found");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
