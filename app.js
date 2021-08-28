var express = require('express');
var cors = require('cors')
var app = express();


var port = process.env.PORT || 3000;
 app.use(cors())
app.get('/', function (req, res) {
    console.log("recevuied");
    res.send('Sample Node.js App');
});
app.get('/user', function (req, res) {
    console.log("recevuied");
    res.send('Sample Node.js App');
});

app.listen(port, function () {
    console.log('Sample Application Listening on Port ' + port);
});