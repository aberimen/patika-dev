const Koa = require('koa');
const app = new Koa();

const port = 3000;

app.use(ctx => {
    url = ctx.url;
    switch (url) {
        case '/':
            ctx.body = "<h2>Index Page.</h2>";
            break;
        case '/about':
            ctx.body = "<h2>About Page.</h2>";
            break;
        case '/contact':
            ctx.body = "<h2>Contact Page.</h2>";
            break;
    }

});

app.listen(port);