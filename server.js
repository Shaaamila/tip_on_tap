var express = require("express");
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, './client')));

var routeSetter = require('./server/config/routes.js');
routeSetter(app);

// app.listen(8000, function() {
// 	console.log('The server is listening on port 8000');
// });

app.listen(process.env.PORT || 8000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});