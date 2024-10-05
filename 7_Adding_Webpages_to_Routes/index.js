const http = require('http');
const fs = require('fs');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);
const Overview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8');
const Product = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(Overview);
    } else if (pathName === '/product') {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(Product);
    } else if (pathName === '/api') {
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(data);
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page not found</h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});

/*
To request api to server use following on web browser
http://127.0.0.1:8000/api => This will give back data present on server.
Here the data is present on dev-data/data.json.
All the data is loaded at the startup in blocking manner.
Whenever a client requests for data, it responds with the data present on server.
*/
