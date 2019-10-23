const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3333;

const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


