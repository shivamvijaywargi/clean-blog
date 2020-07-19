// Essential imports
const express = require('express');
const path = require('path');

// Initialize express
const app = express();

// Setting static files directory
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages/about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
});

app.get('/post', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages/post.html'));
});

app.listen(PORT, console.log(`Server is listening at port ${PORT}`));
