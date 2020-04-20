var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var dji = require('dji-tello');

dji.connect();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.get('/takeoff', function (req, res, next) {
    dji.takeoff();
    res.json({
        success: true
    })
});

app.get('/land', function (req, res, next) {
    dji.land();
    res.json({
        success: true
    })
});

app.get('/left', function (req, res, next) {
    dji.left(60);
    res.json({
        success: true
    })
});

app.get('/right', function (req, res, next) {
    dji.right(60);
    res.json({
        success: true
    })
});

app.get('/back', function (req, res, next) {
    dji.back(60);
    res.json({
        success: true
    })
});

app.get('/forward', function (req, res, next) {
    dji.forward(60);
    res.json({
        success: true
    })
});

app.post('/event', function (req, res, next) {
    dji.event(req.body.command);
    res.json({
        success: true
    })
});

// Error 404
app.use(function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
        'error': 'Url not found'
    });
});


app.listen(8080); // Error 404