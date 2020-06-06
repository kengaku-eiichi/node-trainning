var http = require('http')
var port = 8001
var fs = require('fs')
var server = http.createServer(function (req, res) {
    fs.readFile('./temp.html', 'utf-8', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        res.end()
    })
});
server.listen(port)
console.log("run server listen " + port);