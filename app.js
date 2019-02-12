var koa = require('koa');
var app = new koa();

app.use(function* () {
    this.body = 'Hello world';
});

app.listen(process.env.PORT || '3000', function() {
    console.log('Server running');
});