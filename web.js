var gzippo = require('gzippo');
var express = require('express');
var modRewrite = require('connect-modrewrite');

var app = express();
 
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
// app.use("/scripts", gzippo.staticGzip(__dirname + "/dist/scripts"));
// app.use("/fonts/raleway", gzippo.staticGzip(__dirname + "/dist/fonts/raleway"));
// app.use("/images", gzippo.staticGzip(__dirname + "/dist/images"));
// app.use("/styles", gzippo.staticGzip(__dirname + "/dist/styles"));
// app.use("/views", gzippo.staticGzip(__dirname + "/dist/views"));
// app.use("/views/global", gzippo.staticGzip(__dirname + "/dist/views/global/"));
// app.use("/views/global/desktop", gzippo.staticGzip(__dirname + "/dist/views/global/desktop"));
app.listen(process.env.PORT || 5000);