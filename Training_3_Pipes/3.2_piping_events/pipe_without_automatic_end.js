/**
 * Created by revilo on 07/08/2016.
 */
var fs = require('fs');

var file = fs.createReadStream('app.js');
var destFile = fs.createWriteStream('destination.txt');

//the following code doesn't work cause pipe generate its own 'end' event after
// having received everything it had to
file.pipe(destFile);
//This error raises : Error: write after end


//To solve that, comment the previous line and uncomment the following one
// file.pipe(destFile, { end: false });


file.on('end', function(){
    destFile.end('Finished!');
});