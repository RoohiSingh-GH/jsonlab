//Read a file
var fs = require("fs");

fs.readFile("./student.json", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
