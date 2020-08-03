var sqlite3 = require("sqlite3");

var file = "college.db";
var db = new sqlite3.Database(file);
db.all("SELECT * FROM students", function (err, rows) {
  rows.forEach(function (row) {
    console.log(row.studentname, row.studentid);
  });
});
db.close();
