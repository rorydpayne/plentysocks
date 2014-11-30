var gzippo = require('gzippo');
var express = require('express');
//var bodyParser = require('body-parser');
var compression = require('compression');
var timeout = require('connect-timeout');
var cookieParser = require('cookie-parser');
var session = require('cookie-session');
var methodOverride = require('method-override');
var csrf = require('csurf');
var errorhandler = require('errorhandler');
var session = require('express-session');
var morgan = require('morgan');
var responseTime = require('response-time');
var favicon = require('serve-favicon');
var serveIndex = require('serve-index');
var serveStatic = require('serve-static');
var vhost = require('vhost');
var modRewrite = require('connect-modrewrite');

var app = express();
 
app.use(express.logger('dev'));
app.use(bodyParser.json());
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);