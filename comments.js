// create web server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// create a route
app.get('/comments', (req, res) => {
  res.json({ comments: [
    { id: 1, author: 'user1', body: 'comment1' },
    { id: 2, author: 'user2', body: 'comment2' },
  ] });
});

// Path: index.js
// create web server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// create a route
app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Path: index.js
// create web server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// create a route
app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});
// create a route
app.get('/comments', (req, res) => {
  res.json({ comments: [
    { id: 1, author: 'user1', body: 'comment1' },
    { id: 2, author: 'user2', body: 'comment2' },
  ] });
});

// Path: index.js
// create web server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// create a route
app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});
// create a route
app.get('/comments', (req, res) => {
  res.json({ comments: [
    { id: 1, author: 'user1', body: 'comment1' },
    { id: 2, author: 'user2', body: 'comment2' },
  ] });
});
// create a route
