const http = require('http');

const hostname = 'localhost';
const port = 3000;

const textParse = require('./modules/parseText.js');

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain');
    res.end('Hello World!');
});

server.listen(port,hostname, () => {
    console.log(textParse.readText('a'));
    console.log(`Server started at http://${hostname}:${port}/` );
});
