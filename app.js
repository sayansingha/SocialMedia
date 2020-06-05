const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const {MONGOURI} = require('./keys')

const PORT = 5000;

const app = express();

mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', ()=>{
    console.log("connected to mongo");
});

mongoose.connection.on('error', (err)=>{
    console.log("err connecting", err);
});

require('./models/user');
require('./models/post');

app.use(express.json());

app.use(require('./routes/auth'));
app.use(require('./routes/post'));
app.use(express.static(path.resolve("./client/build")))
app.get('*', (req, res) => {
    res.sendFile(path.resolve('./client/build'));
});
app.listen(PORT,()=>{
    console.log("Server is running on", PORT);
})
