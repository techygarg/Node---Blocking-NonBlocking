var http = require('http');
var url = require('url');
var cp = require('child_process');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    if( url.parse(request.url).pathname == '/doWait' ){
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + 15000);
        response.write('Thanks for your time!' + new Date().getTime());
    }
    else{
       response.write('Hello, Have a great day !!!!\n'+new Date().getTime());
    }

    response.end();
}).listen(8080);

console.log('Your Server started');