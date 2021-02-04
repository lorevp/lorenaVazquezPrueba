const express = require('express');
const app = express();
const dotenv = require('dotenv');
const fetch = require('node-fetch');
dotenv.config();

 
app.get('/', function (req, res) {
  res.send('Hello World');
})
 
app.listen(process.env.SERVER_PORT);