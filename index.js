//console.log("Hello World");

/*
* Primary files for the API
*
*/
//Dependencies
var http = require('http');
var url = require('url');

// The server should respond to all request with a string
var server = http.createServer(function (req, res){
  // set the url and parse it
var parsedUrl = url.parse(req.url, true);

//Get the path
var path = parsedUrl.pathname;
var trimmedPath = path.replace(/^\/+|\/+$/g, '');

//send the request
console.log('Hello World...! Good luck for next step.');
res.end('Hello World...! Good luck for next step.\n');

  //set the port

  //send the request

    //log the request path

    console.log('Request received on ' +trimmedPath );

});

//Start the server, and have it listen to port 3000
server.listen(3000, function(){
console.log('server is listening on port 3000 now');
})
