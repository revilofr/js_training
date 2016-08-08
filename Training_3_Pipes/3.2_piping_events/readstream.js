/**
 * Created by revilo on 07/08/2016.
 */
var fs = require('fs');

var file = fs.createReadStream('upload_file.js');

// The following part could be replaced by :
// file.pipe(process.stdout);
file.on('readable', function(){
    var chunk = null;
    while (null!==(chunk = file.read())){
        console.log(chunk.toString());
    }
});