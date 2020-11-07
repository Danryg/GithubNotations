const express = require('express');
const request = require('request');

const app = express();
const port = process.env.PORT = 3000;


var options = {
    url: 'https://api.github.com/users/lillelink',
    headers: {
      'User-Agent': 'request'
    }
  };

request(options, function (error, response, body) {

    var info = JSON.parse(body);
  console.log('body:', info); // Print the HTML for the Google homepage.
  
});







app.listen(port, () => console.log(`Listening to port: ${port}.....`));