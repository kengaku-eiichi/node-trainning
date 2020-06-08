var express = require('express')
var ejs = require('ejs')
var bodyParser = require('body-parser')

var app = express()
app.engine('ejs', ejs.renderFile)
app.use(bodyParser.urlencoded({
    extended: true
}))
app.get('/', function (req, res) {
    console.log('*** request.method is ' + req.method)
    console.log('request.query.name is ' + req.query.name)
    console.log('request.query.age is ' + req.query.age)
    res.render('temp.ejs', {})
})
app.post('/', function (req, res) {
    console.log('*** request.method is ' + req.method)
    console.log('request.body.name is ' + req.body.name)
    console.log('request.body.age is ' + req.body.age)
    res.render('temp.ejs', {})
})
port = 8023
app.listen(port, function () {
    console.log("run server listen " + port);
})
