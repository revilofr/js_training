/**
 * Created by revilo on 07/08/2016.
 */
var fs=require('fs');

fs.readFile('index.html', 'utf8', function(err, contents){
    console.log(contents);
});