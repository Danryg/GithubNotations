const express = require('express');
const request = require('request');

const app = express();
const port = process.env.PORT = 3000;




app.listen(port, ()=> console.log('Listening to port: ${port}.......'));