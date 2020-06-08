var express = require('express')
var ejs = require('ejs')
var app = express()

app.engine('ejs', ejs.renderFile)
app.get('/', function (req, res) {
    res.render('temp.ejs', {
        contents: '<p>hoge</p>'
    })
})

var port = 8022
var server = app.listen(port, function () {
    console.log("run server listen " + port);
})