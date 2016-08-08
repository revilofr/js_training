/**
 * Created by revilo on 08/08/2016.
 */
var express = require('express');

var app = express();

app.get('/', function(request, response){
    response.sendFile(__dirname + "/index.html");
});
//__dirname means current directory
app.listen(8080);
