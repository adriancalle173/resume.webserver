var express = require('express');
var app = express();

const answers = require('./answers');

app.get('/', function (req, res) {
  console.log(req.query);
  let response = answers[req.query.q];
  res.send(response);
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Web server listening!');
});
