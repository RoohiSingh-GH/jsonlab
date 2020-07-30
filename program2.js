var fs = require("fs");

fs.readFile("./student.json", "utf8", function (err, jsonString) {
  if (err) {
    return console.log(err);
  }
  try {
    const std = JSON.parse(jsonString);
    console.log("Student name is", std.name);
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});
