var http = require('http')
var port = 8003

var fs = require('fs')
var indexPage = fs.readFileSync('./index.html', 'utf-8')
var nextPage = fs.readFileSync('./next.html', 'utf-8')

var server = http.createServer(function (req, res) {
    var data
    switch (req.url) {
        case '/':
        case '/index':
            data = indexPage
            break
        case '/next':
            data = nextPage
            break
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('bad resuest')
            return
    }

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(data)
    res.end()
})
server.listen(port)
console.log('run server listen ' + port)
