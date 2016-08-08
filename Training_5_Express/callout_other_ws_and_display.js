/**
 * Created by revilo on 08/08/2016.
 */
var request = require('request');
var url = require('url');
var express = require('express');

var app = express();

//Allows to set views into a specific dir (=!App/views)
app.set('views', __dirname + '/views');

// '/tweets.json/:username' is the route definition
// :username is declared as parameter
app.get('/tweets/:username', function(req, response){
    var username = req.params.username; // retrieve the param from url

    options = {
        protocol: 'http:',
        host: 'localhost:8081',
        pathname: '/1/statuses/user_timeline.json',
        query: {screen_name: username, count:10}
    };

    var twitterUrl = url.format(options);
    request(twitterUrl, function (err, res, body){
        var tweets = JSON.parse(body);
        response.locals = {tweets: tweets, name: username};
        response.render('tweets.ejs');
    });

});

app.listen(8080);