const express = require('express');
const app = express();
const port = 12000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


// npm init -y
// npm install express
// node server.js --host 0.0.0.0