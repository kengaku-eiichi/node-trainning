var http = require('http')
var port = 8004
var fs = require('fs')
var url = require('url')
var qs = require('querystring')

var indexPage = fs.readFileSync('./index.html', 'utf-8')
var server = http.createServer(function (req, res) {
    console.log(req.method + ' ' + req.url)
    switch (req.method) {
        case 'GET':
            var urlParts = url.parse(req.url, true)
            console.log('name is ' + urlParts.query.name)
            console.log('age is ' + urlParts.query.age)
            console.log()
            break
        case 'POST':
            var body = ''
            req.on('data', function (data) {
                body += data
            })
            req.on('end', function () {
                var params = qs.parse(body)
                console.log('name is ' + params.name)
                console.log('age is ' + params.age)
                console.log()
            })
            break
    }

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(indexPage)
    res.end()
})
server.listen(port)
console.log('run server listen ' + port)
