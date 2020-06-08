var http = require('http')
var port = 8012
var fs = require('fs')
var ejs = require('ejs')

var main = fs.readFileSync('./main.ejs', 'utf-8')
var sub = fs.readFileSync('./sub.ejs', 'utf-8')

var server = http.createServer(function (req, res) {
    var data = ejs.render(main, {
        contents: ejs.render(sub, {
            data: '<p>hogehoge</p>'
        })
    })
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(data)
    res.end()
})
server.listen(port)
console.log('run server listen ' + port)
