var PORT = 8889;

var HOST = '192.168.10.1';

var dgram = require('dgram');
var message = new Buffer('command');

var client = dgram.createSocket('udp4');

client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
    if (err) throw err;
    console.log('UDP client message sent to ' + HOST + ':' + PORT);
}); 

 client.send('takeoff', 0, message.length, PORT, HOST, function (err, bytes) {
    if (err) throw err;
    console.log('UDP client message sent to ' + HOST + ':' + PORT);
});

client.send('land', 0, message.length, PORT, HOST, function (err, bytes) {
    if (err) throw err;
    console.log('UDP client message sent to ' + HOST + ':' + PORT);
});

client.on('connection', function (message, remote) {
    console.log('connected !');
});

client.connect(8889, HOST, function () {
    console.log('Vous êtes connecté');
})