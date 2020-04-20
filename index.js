function launch() {

    var PORT = 8889;
    var HOST = '127.0.0.1';

    var dgram = require('dgram');
    var client = dgram.createSocket('udp4');


    console.log('[✓] Current connection to DJI Tello...');
    setTimeout(() => {
        console.log('[✓] Connected to Tello 🚁');
        setTimeout(() => {
            var message = new Buffer('command');
            client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
                if (err) throw err;
                console.log('[✓] You are taking control of Tello 🎮');
            });

            var message = new Buffer('takeoff');
            client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
                if (err) throw err;
                console.log('[✓] You Tello Take Off 🛫');
            });

            setTimeout(() => {
                var message = new Buffer('land');
                client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
                    if (err) throw err;
                    console.log('[✓] You Tello Land 🛬');
                });
            }, 5000);

        }, 500);
    }, 500);

}

launch();

exports.connect = launch;