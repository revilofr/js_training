/**
 * Created by revilo on 07/08/2016.
 */
var http = require('http');
var fs = require ('fs');

http.createServer(function(request, response) {
    var newFile = fs.createWriteStream("readme_copy.md")
    request.pipe(newFile);

    request.on('end', function (){
       response.end('uploaded');
    });
}).listen(8080);