
/**
 * Created by revilo on 08/08/2016.
 */
var express = require('express');

var app = express();

app.get('/1/statuses/user_timeline.json', function(request, response){
    console.log('Mock has been called');
    response.sendFile(__dirname + "/tweets.json");
});
//__dirname means current directory
app.listen(8081);
