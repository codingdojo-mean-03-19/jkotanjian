const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || '4200';

var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + 'public/dist/public'));

app.listen(port, () => {
	console.log('listening on port:', port);
});

require('./server/config/routes.js')(app);