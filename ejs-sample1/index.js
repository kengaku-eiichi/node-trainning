var http = require('http')
var port = 8011
var fs = require('fs')
var ejs = require('ejs')

var temp = fs.readFileSync('./temp.ejs', 'utf-8')

var server = http.createServer(function (req, res) {
    var data = ejs.render(temp, {
        title: 'ejs sample1',
        contents1: '<p>ここはエスケープされない</p>',
        contents2: '<p>ここはエスケープされる</p>',
        arr: ['いちご', 'めろん', 'ばなな']
    })
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(data)
    res.end()
});
server.listen(port)
console.log('run server listen ' + port)
