var express = require("express");
var path = require('path');
var app = express();

// app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './client')));

app.listen(process.env.PORT || 8000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});