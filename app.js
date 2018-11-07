var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('the requested url is'+req.url);
    fs.createReadStream(__dirname+'/stuff/readMe.txt','utf8').pipe(res);
});

server.listen(3001,'127.0.0.1');
console.log('Listening to the port 3001');
module.exports = server;
