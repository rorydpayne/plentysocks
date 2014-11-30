var gzippo = require('gzippo');
var express = require('express');
var modRewrite = require('connect-modrewrite');

var app = express();
 
app.use("/scripts", express.static(__dirname + "/app/scripts"));
app.use("/fonts", express.static(__dirname + "/app/fonts"));
app.use("/images", express.static(__dirname + "/app/images"));
app.use("/styles", express.static(__dirname + "/app/styles"));
app.use("/views", express.static(__dirname + "/app/scripts"));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);