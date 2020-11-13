const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user_routes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/', userRoutes);

mongoose.connect('mongodb://localhost:27017/new_db', {useFindAndModify: false,useNewUrlParser: true, useUnifiedTopology: true});

app.listen(5000, ()=>{
    console.log('server started')
});