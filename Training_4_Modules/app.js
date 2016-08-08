/**
 * Created by revilo on 07/08/2016.
 */
var hello = require('./custom_hello');
var gb = require('./custom_goodbye');

hello();

gb.goodbye();

// the following one in unreachable
// gb.privateFunction();