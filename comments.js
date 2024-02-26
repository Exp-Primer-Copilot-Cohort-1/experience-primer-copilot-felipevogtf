// create web server
// start web server on port
// create route to handle comments
// create route to handle form submission

var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname;
  switch(path) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<h1>Hello, World</h1>');
      res.end();
      break;
    case '/comments':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('Comments');
      res.end();
      break;
    case '/form':
      fs.readFile(__dirname + '/form.html', function(err, data) {
        if (err) return send404(res);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data, 'utf8');
        res.end();
      });
      break;
    default:
      send404(res);
  }
});

function send404(res) {
  res.writeHead(404);
  res.write('404');
  res.end();
}

server.listen(8000);

