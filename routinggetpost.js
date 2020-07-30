var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("GET request to the homepage");
});
app.post("/post", function (req, res) {
  res.send("POST request to the homepage");
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
