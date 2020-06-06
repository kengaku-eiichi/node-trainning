var http = require('http')
var port = 8002
var server = http.createServer(function (req, res) {
    var target = ''
    switch (req.url) {
        case '/':
            target = './index.html'
            break
        case '/next':
            target = './next.html'
            break
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('bad resuest')
            return
    }

    var fs = require('fs')
    fs.readFile(target, 'utf-8', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        res.end()
    })
})
server.listen(port)
console.log('run server listen ' + port)
