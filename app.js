const express = require('express');
const path = require('path');

const app = express();
module.exports = app;

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));
