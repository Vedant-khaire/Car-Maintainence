const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// In-memory storage for users (replace with a database in a real-world scenario)
const users = [];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  // Save user data to storage (in-memory storage in this example)
  users.push({ username, password });

  // Log the users array (for development purposes)
  console.log('Users array:', users);

  return res.json({ message: 'User registered successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
