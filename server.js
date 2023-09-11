const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');
const favicon = require('serve-favicon');

const loginRoutes = require('./routes/login');
const splashRoutes = require('./routes/splash');
const sginupRoutes = require('./routes/sginup');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use(loginRoutes);
app.use(splashRoutes);
app.use(sginupRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
