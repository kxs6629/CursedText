const fs = require('fs');

const storedText = fs.readFile('data/kjv.txt', (err,output) => {
    if(err) throw err;
    output.toString();
});



function CheckText(textToParse){
    
}

module.exports = {
    storedText
}