/**
 * Created by revilo on 08/08/2016.
 */
exports.goodbye = function() {
    console.log("bye!");
}

// We could consider to create non exportable methods known as 'private'
function privateFunction(){
    console.log("private method unreachable from the outside");
}