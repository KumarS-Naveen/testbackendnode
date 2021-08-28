var express = require('express');
var app = express();
// var cors = require('cors')
var port = process.env.PORT || 3000;
// app.use(cors())
app.get('/user', function (req, res) {
    res.send('Sample Node.js App');
});

app.listen(port, function () {
    console.log('Sample Application Listening on Port ' + port);
});