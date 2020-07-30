//writing a json file
const fs = require("fs");
const std = {
  name: "June",
  studentid: "C44444",
  programid: "2020S MAD T3 S2",
};
const jsonString = JSON.stringify(std);
fs.writeFile("./newstudent.json", jsonString, (err) => {
  if (err) {
    console.log("Error writing file", err);
  } else {
    console.log("Successfully wrote file");
  }
});
