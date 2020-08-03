var express = require("express");

var sqlite3 = require("sqlite3");
var app = express();

var file = "farmerrecord.db";

app.get("/result", function (req, res) {
  var db = new sqlite3.Database(file);
  var posts = [];
  db.serialize(function () {
    db.each(
      "SELECT * FROM farm",
      function (err, row) {
        posts.push({ title: row.farmno, name: row.farmname });
      },
      function () {
        res.render("/result", { title: "test", posts: posts });
      }
    );
  });
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
