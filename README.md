![package](https://img.shields.io/badge/npm-dji--tello-red) ![node](https://img.shields.io/badge/node-npm--package-green)


# DJI Tello Drone Controller 

This NPM package allows you to control your Tello UAV remotely.
You can send him all the instructions (Here are the most used ones: command, takeoff, land, up, down, left, right, forward, back, flip, speed, speed?, battery?)




## Installation

Create your node.js project and install my npm package [https://www.npmjs.com/package/dji-tello](https://www.npmjs.com/package/dji-tello) 

```unix
mkdir tello-controller
cd tello-controller
npm init
npm i dji-tello
```

Now, you have the dji-tello package, all you have to do is use it

## Usage

Don't forget to connect to your drone's wifi with your computer.
With this example, this program will display the current drone battery, make it take off, make it flip forward, then land.

```javascript
var dji = require('dji-tello');

dji.setHost('192.168.10.1'); //optional (default host : 192.168.10.1)
dji.setPort('8889'); //optional (default port : 8889)

dji.connect();

setTimeout(() => {
    dji.getBattery();
    setTimeout(() => {
        dji.takeoff();
        setTimeout(() => {
            dji.event('flip f');
            setTimeout(() => {
                dji.land();
            }, 5000);
        }, 5000);
    }, 3000);
}, 3000);
```

## Contributing

- [Nooaah](https://noah-chatelain.fr)

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
