const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello from the server!!');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server listening on port 8000');
});

/*
To request to server use following on web browser
http://127.0.0.1:8000
*/
