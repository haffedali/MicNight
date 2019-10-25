const express = require('express');
const logger = require('morgan')
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('./models');
const PORT = 3333;

const app = express();


app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(require('./routes'));

mongoose.connect("mongodb+srv://admin:1234@cluster0-lfgpa.mongodb.net/test?retryWrites=true&w=majority");


app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`)
})
