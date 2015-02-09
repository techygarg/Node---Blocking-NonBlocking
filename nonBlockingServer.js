var http = require('http');
var url = require('url');
var childThread = require('child_process');

function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    if( pathname == '/doWait' ){
        childThread.exec('node blockingCode.js', waitCompletedCallback);
    }
    else{
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hello, Have a great day !!!!\n'+new Date().getTime());
        response.end();
    }

    function waitCompletedCallback(){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Thanks for your time! \n'+new Date().getTime());
        response.end();
    }
}
http.createServer(onRequest).listen(8080);
console.log('Your Server started');