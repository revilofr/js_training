/**
 * Created by revilo on 07/08/2016.
 */
var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200);
    response.end("hello, this is dog.");
}).listen(8080, function(){
    console.log('Listening on port 8080');
});