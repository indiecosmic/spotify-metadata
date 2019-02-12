var koa = require('koa');
var views = require('koa-views');
var serve = require('koa-static');
var path = require('path');
var app = new koa();

app.use(serve(path.join(__dirname, './dist')));
app.use(views(path.join(__dirname, '/views')));

app.use(async function (ctx) {
    await ctx.render('index');
});

app.listen(process.env.PORT || '3000', function() {
    console.log('Server running');
});