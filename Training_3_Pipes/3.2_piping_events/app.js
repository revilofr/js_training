/**
 * Created by revilo on 07/08/2016.
 */
var http = require('http');
var server = http.createServer(function(request, response) {
    response.writeHead(200);
    request.pipe(response);
}).listen(8080);