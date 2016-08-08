/**
 * Created by revilo on 07/08/2016.
 */
var http = require('http');
var fs = require ('fs');

http.createServer(function(request, response) {
    var newFile = fs.createWriteStream("readme_copy.md");
    var fileBytes = request.headers['content-length'];
    var uploadedByte = 0 ;

    // Actually, we don't perform any action with chunk but keeping progress
    request.on('readable', function(){
        var chunk = null;
        while(null !== (chunk = request.read())){
            uploadedByte += chunk.length;
            var progress = (uploadedByte / fileBytes) * 100;
            response.write("progress: " + parseInt(progress, 10) + "%\n");
        }
    });

    //The real deal is still done though "pipe"
    request.pipe(newFile);

    request.on('end', function (){
       response.end('uploaded');
    });
}).listen(8080);