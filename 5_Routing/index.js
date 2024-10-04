const http = require('http');

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName === '/' || pathName === '/overview') {
        res.end('This is the overview');
    } else if (pathName === '/product') {
        res.end('This is the product');
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
To request to server use following on web browser
http://127.0.0.1:8000 => This is the overview
http://127.0.0.1:8000/overview => This is the overview
http://127.0.0.1:8000/product => This is the product
http://127.0.0.1:8000/q => Page not found
*/
