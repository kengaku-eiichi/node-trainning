var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello Express')
})

var port = 8021
var server = app.listen(port, function () {
    console.log("run server listen " + port);
})
