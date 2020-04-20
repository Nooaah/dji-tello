var readlineSync = require('readline-sync');
var sleep = require('system-sleep');

exports.waitFor = function waitFor(n) {
    sleep(n);
}

var PORT = 8889;
var HOST = '127.0.0.1';

exports.setHost = function setHost(host) {
    HOST = host;
}

exports.setPort = function setHost(port) {
    PORT = parseInt(port);
}

exports.connect = function connect() {

    var dgram = require('dgram');
    var client = dgram.createSocket('udp4');


    console.log('[✓] Current connection to DJI Tello at ip ' + HOST + ':' + PORT);
    setTimeout(() => {
        console.log('[✓] Connected to Tello 🚁');
        setTimeout(() => {
            var message = new Buffer('command');
            client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
                if (err) throw err;
                console.log('[✓] You are taking control of Tello 🎮');
            });
        }, 500);
    }, 500);

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

    exports.event = function event(e) {
        e = e.toString();
        var message = new Buffer(e);
        client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
            if (err) throw err;
            console.log('[✓] Execute your command : ' + e);
        });
    }

    exports.command = function command() {
        var command = readlineSync.question('Next command : ');
        this.event(command);
    }
}