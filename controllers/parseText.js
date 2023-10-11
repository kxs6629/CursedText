const fs = require('fs');
const readLine = require('readline');

const storedText = fs.readFile('data/kjv.txt', (err,output) => {
    if(err) throw err;
    output.toString();
});

async function CheckText(textToParse){
    const fileStream = fs.createReadStream('data/kjv.txt');
    const lineRead = readLine.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // split text input to search using includes method
    let wordList = textToParse.split(" ");
    // parse bible text file line by line
    for await(const line of lineRead) {
        // Check if any of the words in the given string are in the current line
        for (let word of wordList){
            // If so, break and return (where in the bible?)
            if(line.includes(word)){
                fileStream.destroy();
                let resultString = line.split(" ")
                // Rev22:21 The grace of our Lord Jesus Christ be with you all. Amen.
                // [Book:Chapter:Verse] Yapping
                return word+" located at "+ resultString[0] ;
            }
        }
    // else, keep searching
    }
    fileStream.destroy();
    return "No matches found, this truly is cursed text";

}

module.exports = {
    storedText,
    CheckText
}