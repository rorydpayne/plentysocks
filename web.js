var gzippo = require('gzippo');
var express = require('express');
var modRewrite = require('connect-modrewrite');
var morgan = require('morgan');

var app = express();
 
app.use(morgan('combined'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);