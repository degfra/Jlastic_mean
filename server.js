/**
 * Created by francois on 7/22/15.
 */

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Mean Stack\n');
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');



