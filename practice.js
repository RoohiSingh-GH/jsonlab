var express = require("express");

var sqlite3 = require("sqlite3");
var app = express();

var file = "college.db";
var db = new sqlite3.Database(file);

app.get("/", function (req, res) {
  db.all("SELECT * FROM students", function (err, rows) {
    rows.forEach(function (row) {
      res.send(row.studentname, row.studentid);
    });
  });
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
