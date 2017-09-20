const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

app.get('/'
    , function (req, res) {
        res.status(200).send('Hello, Express.js!');
    });

app.get('/hello'
    , function (req, res) {
        res.status(200).send('Hello stranger!');
    });

app.get('/hello/:name'
    , function (req, res) {
        res.status(200).send(`Hello, ${req.params.name}!`);
    });

app.all('/sub/*'
    , function (req, res) {
        res.status(200).send(`You requested URI: ${req.url}`);
    });

app.post('/post'
    , function (req, res) {
    if (!req.body) res.sendStatus(400);

    res.status(200).send(req.body);
    });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})