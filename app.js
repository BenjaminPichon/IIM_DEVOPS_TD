const express = require('express');
var Request = require("request");

const app = express();

app.use('/api/stuff', (req, res, next) => {
    Request.get("https://api.binance.com/api/v3/ticker/price", (error, response, body) => {
        if(error) {
            return console.dir(error)
        }
        res.status(200).json(body)
    }
)} );
module.exports = app;