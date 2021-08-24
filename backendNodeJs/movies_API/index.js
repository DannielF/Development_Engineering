const express = require('express');
const app = express();

const { config } = require('./config/index');

app.get('/', function (req, res) {
  res.send('Hello world');
});

app.get('/json', function (req, res) {
  res.json({ Hello: 'World' });
});

app.listen(config.port, function () {
  console.log(`Listening https://localhost:${config.port}`);
});