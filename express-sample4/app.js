var express = require('express')
var ejs = require('ejs')
var session = require('express-session')

var app = express()
app.engine('ejs', ejs.renderFile)
app.use(session({
    secret: 'hoge',
    resave: true,
    saveUninitialized: true
}))

app.get('/', function (req, res) {
    req.session.cnt = (req.session.cnt || 0) + 1
    res.render('temp.ejs', {
        cnt: req.session.cnt
    })
})

port = 8025
app.listen(port, function () {
    console.log("run server listen " + port);
})
