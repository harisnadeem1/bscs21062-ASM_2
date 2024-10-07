const express = require('express');
const fs = require('fs');
const csv = require('csv-parser'); 
const app = express();

app.use(express.json());

app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}`);
});
