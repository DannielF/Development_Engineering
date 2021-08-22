const fs = require("fs");

fs.mkdir("folder/subFolder/subFolder", { recursive: true }, err => {
  if (err) {
    return console.log(err);
  }
});