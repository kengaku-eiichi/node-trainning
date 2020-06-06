var http = require('http')
var port = 8005
var fs = require('fs')
var url = require('url')

var indexPage = fs.readFileSync('./index.html', 'utf-8')

var server = http.createServer(function (req, res) {
    var urlParts = url.parse(req.url, true)
    switch (urlParts.pathname) {
        case '/':
            res.write(indexPage)
            break
        default:
            var path = __dirname + '/' + urlParts.pathname
            var stream = fs.createReadStream(path)
            stream.on('data', function (data) {
                res.write(data)
            })
            stream.on('end', function (data) {
                res.end()
            })
    }
})
server.listen(port)
console.log('run server listen ' + port)
