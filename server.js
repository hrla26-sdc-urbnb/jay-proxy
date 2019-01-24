const express = require('express');
const path = require('path');
const parser = require('body-parser');
const router = require('./router.js');
const exp = require('express');

const port = 2019;
const app = exp();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use('/api', router);
app.use(express.static(path.join(__dirname, './public/')));
app.use(express.static(path.join(__dirname, './loaderio')));



app.listen(port, (err) => {
  if (err) {
    console.log('error listening on port ', port);
  } else {
    console.log('successfully listening on port ', port);
  }
});