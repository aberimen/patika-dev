const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    switch (url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("<h2>Index Page.</h2>");
            break;
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("<h2>About Page.</h2>");
            break;
        case '/contact':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("<h2>Contact Page.</h2>");
            break;
    }

    res.end();

});

const port = 5000;

server.listen(port, () => {

    console.log("Running on " + port);
});