
const { abeg, netflix, bamboo } = require("./resources");
const express = require('express');
const app = express();

const port = 5000;

app.get('/netflix', (_, res) => {
    res.send(netflix);
});
app.get('/bamboo', (_, res) => {
    res.send(bamboo);
});
app.get('/abeg', (_, res) => {
    res.send(abeg);
});

app.listen(port, () => console.log('Um, running?!'));