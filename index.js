// Module imports
const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const textParse = require('./controllers/parseText.js');

// Create Server
const app = express();

app.listen(3000, () =>{
    console.log(__dirname);
    console.log("Application listening on port 3000")
})

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended: false}));

// Routes

app.get('/', (req,res) => {
    res.render('index');
});

app.post('/',(req,res) =>{
    const {textcheck} = req.body;
    res.render('results', {
        testCheck: textcheck
    });
});