var http = require('http');
var fs  = require('fs');
var mime = require('mime');



var port = 3000;

var ip = "127.0.0.1";

var server = http.createServer(function(request, response){

  var responseType = '';

  if(request.url === '/'){
    responseType = './client/index.html';
  }
  response.writeHead(200, {'Content-Type': mime.lookup(responseType)});
  fs.exists(responseType, function(exists){
    if(exists){
      fs.readFile(responseType, function(err, data){
        if(err){
          throw err;
        }
        response.end(data);
      });
    }
    else {
      response.end();
    }
  });
});
console.log("Listening on http://" + ip + ":" + port);

server.listen(port, ip);
