const express = require('express')
const app = express()

app.get('/',function (req,res){
  res.send("Ping test completed!")

})

app.listen(3000,function(){
  var net = require('net');
var hosts = [['google.com', 80], ['stackoverflow.com', 80], ['google.com', 444]];
hosts.forEach(function(item) {
    var sock = new net.Socket();
    sock.setTimeout(2500);
    sock.on('connect', function() {
        console.log(item[0]+':'+item[1]+' is up.');
        sock.destroy();
    }).on('error', function(e) {
        console.log(item[0]+':'+item[1]+' is down: ' + e.message);
    }).on('timeout', function(e) {
        console.log(item[0]+':'+item[1]+' is down: timeout');
    }).connect(item[1], item[0]);
});
})
