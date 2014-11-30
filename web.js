var gzippo = require('gzippo');
var express = require('express');
var modRewrite = require('connect-modrewrite');

var app = express();
 
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.use("/scripts", gzippo.staticGzip(__dirname + "/dist/app/scripts"));
app.use("/fonts", gzippo.staticGzip(__dirname + "/dist/app/fonts"));
app.use("/images", gzippo.staticGzip(__dirname + "/dist/app/images"));
app.use("/styles", gzippo.staticGzip(__dirname + "/dist/app/styles"));
app.use("/views", gzippo.staticGzip(__dirname + "/dist/app/scripts"));
app.listen(process.env.PORT || 5000);