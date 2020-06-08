var express = require('express')
var ejs = require('ejs')

var msg = ''

var app = express()
app.get('/', function (req, res) {
    res.render('temp.ejs', {})
})
app.post('/ajax', function (req, res) {
    msg += 'hoge'
    res.json({ msg: msg })
})

port = 8026
app.listen(port, function () {
    console.log("run server listen " + port);
})
