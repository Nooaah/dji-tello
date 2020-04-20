var sleep = require('system-sleep');
var ip = require('ip');

if (ip.address() == '192.168.10.2') {
    console.log('[✓] Connected to Tello\'s wifi, your current ip address ' + ip.address())
} else {
    console.log('[X] You\'re not connected to Tello\'s wifi, your current ip address must be 192.168.10.2')
    return process.exit(1);
}

exports.waitFor = function waitFor(n) {
    sleep(n);
}

var PORT = 8889;
var HOST = '192.168.10.1';

exports.setHost = function setHost(host) {
    HOST = host;
}

exports.setPort = function setHost(port) {
    PORT = parseInt(port);
}
var dgram = require('dgram');
var client = dgram.createSocket('udp4');

client.on('message', function (message) {
    console.log(message.toString());
    //console.log(message.toString());
});

exports.connect = function connect() {


    console.log('[✓] Current connection to DJI Tello at ip ' + HOST + ':' + PORT);
    this.waitFor(500);
    console.log('[✓] Connected to Tello 🚁');

    var message = new Buffer('command');
    client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
        if (err) throw err;
        console.log('[✓] You are taking control of Tello 🎮');
    });

}

exports.takeoff = function takeoff() {
    var message = new Buffer('takeoff');
    client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
        if (err) throw err;
        console.log('[✓] Take Off 🛫');
    });
}

exports.land = function land() {
    var message = new Buffer('land');
    client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
        if (err) throw err;
        console.log('[✓] Land 🛬');
    });
}

exports.left = function left(x) {
    var message = new Buffer('left ' + x);
    client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
        if (err) throw err;
        console.log('[✓] left ' + x);
    });
}

exports.right = function right(x) {
    var message = new Buffer('right ' + x);
    client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
        if (err) throw err;
        console.log('[✓] right ' + x);
    });
}

exports.back = function back(x) {
    var message = new Buffer('back ' + x);
    client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
        if (err) throw err;
        console.log('[✓] back ' + x);
    });
}

exports.forward = function forward(x) {
    var message = new Buffer('forward ' + x);
    client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
        if (err) throw err;
        console.log('[✓] forward ' + x);
    });
}

exports.event = function event(e) {
    e = e.toString();
    var message = new Buffer(e);
    client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
        if (err) throw err;
        console.log('[✓] Execute your command : ' + e);
    });
}

exports.battery = function battery() {
    var message = new Buffer('battery?');
    client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
        if (err) throw err;
        console.log('[✓] Receive Battery');
    });
}