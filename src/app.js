// first method
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((request, response) => {
//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'text/plain');
//     // response.writeHead(200, {});
//     response.end('Hello World');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

// second method to use express build server
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
