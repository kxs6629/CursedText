// Module imports
const express = require('express');
const textParse = require('./modules/parseText.js');

// Create Server
const app = express();

app.listen(3000, () =>{
    console.log(__dirname);
    console.log("Application listening on port 3000")
})

app.use(express.static(__dirname));

// Routes

app.get('/', (req,res) => {
    res.sendFile(__dirname+ '/pages/index.html');
});

app.post('/',(req,res) =>{
    res.sendFile(__dirname+ '/pages/results.html');
})