const http = require('http');
const fs = require('fs');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const server = http.createServer((req, res) => {
    const pathName = req.url;

    // Overview
    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(tempOverview);

    // Product
    } else if (pathName === '/product') {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(tempProduct);

    // API
    } else if (pathName === '/api') {
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(data);

    // Not found
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
Add templates for webpages.
*/
