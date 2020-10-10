const express = require('express');

let port = process.env.PORT || 8000;

let app = express();

app.use(express.static('public'));

app.listen(port);