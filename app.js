const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//connect to database 
mongoose.connect('mongodb://localhost/invoicer');
const db = mongoose.connection;

const app = express();
const port = 3000;

// Enable CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Please use /api/customers or /api/invoices');
});

app.listen(port, () => {
    console.log('Server Started on Port ' + port);
});

const customers = require('./routes/customers');
app.use('/api/customers', customers);

const invoices = require('./routes/invoices');
app.use('/api/invoices', invoices);