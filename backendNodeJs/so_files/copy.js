const fs = require("fs");

fs.copyFile("file1", "file2", err => {
  if (err) {
    console.log(err);
  }

  console.log("It was successfully copy");
});