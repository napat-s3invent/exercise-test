const express = require('express');
const path = require('path');
const app = express();
const http = require("https")


app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8082);
http.createServer(app).listen(3004);