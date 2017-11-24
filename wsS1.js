
var WebSocketServer = require('ws').Server;
var http = require('http');
var count =0;
var fs = require('fs');
var clients = {};
var id;
var d = require('dateformat');
var now = new Date();



var wsServer = new WebSocketServer({port:9060});



wsServer.on('connection',function(socket){
 
    // id =  count++;
    
    // clients[id] = connection;
    //console.log((now)+ 'connection accepted'+'id'+ id);
    console.log((now)+ 'connection accepted'+'id');
    socket.on('message',function(message)
    {
           console.log('got a msg from client' + message);
    });
    socket.on('close',function(reasonCode,description)
    {
        
        console.log((now)+ 'peer disconnected');
    });
});


var server = http.createServer(function(req,resp){

    fs.readFile("WsC.html", function(error,pgres)
    {
        if(error)
        {
            resp.writeHead(404);
            
        }
        else
        {
            resp.writeHead(200,{'Content-Type':'text/html'});
             resp.end(pgres);
        }
    });   
});
server.listen(8080);

console.log('Server started');