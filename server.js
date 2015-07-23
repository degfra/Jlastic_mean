/**
<<<<<<< HEAD
 * Created by francois on 7/22/15.
=======
 * Created by francois de grandi on 7/21/15.
>>>>>>> serverjs
 */

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(3000, '127.0.0.1');
<<<<<<< HEAD
console.log('Server running at http://127.0.0.1:3000/');
=======
console.log('Server running at http://127.0.0.1:3000/');
>>>>>>> serverjs
