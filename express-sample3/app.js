var express = require('express')
var ejs = require('ejs')
var cookieParser = require('cookie-parser')

var app = express()
app.engine('ejs', ejs.renderFile)
app.use(cookieParser())

app.get('/', function (req, res) {
    var cnt = req.cookies.cnt || 0
    cnt++
    res.cookie('cnt', cnt, { maxAge: 5000 })
    res.render('temp.ejs', {
        cnt: cnt
    })
})

port = 8024
app.listen(port, function () {
    console.log("run server listen " + port);
})
