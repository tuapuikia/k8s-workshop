var http = require("http");
var name = process.env.appname;

if (process.env.appname) {
  var name = process.env.appname;
} else {
  var name = "Ubuntu"
}

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});

  response.end('Hello ' + name );

}).listen(8080);

console.log('Server running at http://127.0.0.1:8080')
