const express = require('express');
const path = require('path');
const app = express();
const https = require("https"),
    fs = require("fs");
const options = {
    key: fs.readFileSync("/etc/letsencrypt/live/screening.trueeye.ai/privkey.pem"),
    cert: fs.readFileSync("/etc/letsencrypt/live/screening.trueeye.ai/cert.pem")
};

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8082);
https.createServer(options, app).listen(3004);