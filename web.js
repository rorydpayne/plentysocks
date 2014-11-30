var gzippo = require('gzippo');
var express = require('express');
var modRewrite = require('connect-modrewrite');

var app = express();
 
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.use("/scripts", gzippo.staticGzip(__dirname + "/dist/scripts"));
app.use("/fonts", gzippo.staticGzip(__dirname + "/dist/fonts"));
app.use("/images", gzippo.staticGzip(__dirname + "/dist/images"));
app.use("/styles", gzippo.staticGzip(__dirname + "/dist/styles"));
app.use("/views", gzippo.staticGzip(__dirname + "/dist/scripts"));
app.listen(process.env.PORT || 5000);