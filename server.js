const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const cors = require('cors');

app.use(cors)

app.use(express.static(path.join(__dirname)));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log('Server started');
