var express = require('express');
var app = express();

const answers = require('./answers.js');
const puzzle = require('./puzzle.js');

app.get('/', function (req, res) {
  console.log(req.query);
  if(req.query.q === 'Puzzle'){
    answers['Puzzle'] = puzzle.solve(req.query.d);
  }
  let response = answers[req.query.q];
  res.send(response);
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Web server listening!');
});
