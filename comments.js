// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Include comments.js
const comments = require('./comments');

// Create a route for comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
