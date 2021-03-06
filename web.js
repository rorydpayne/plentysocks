var gzippo = require('gzippo');
var express = require('express');
var modRewrite = require('connect-modrewrite');

var app = express();

app.use(modRewrite(['^[^\\.]*$ /index.html [L]'])); 
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);