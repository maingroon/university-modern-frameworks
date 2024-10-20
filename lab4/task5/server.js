const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/check-email', (req, res) => {
  const email = req.body.email;
  
  // Імітація перевірки унікальності email
  if (email === 'test@example.com') {
    res.json({ isUnique: false });
  } else {
    res.json({ isUnique: true });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
