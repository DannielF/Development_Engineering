const fs = require("fs");

const file = process.argv[2];
/**
 * [0]    [1]    [2]
 * node fileJS fileTxt
 */

if (!file) {
  throw new Error("You must select at least one file");
}

const content = fs.readFile(file, function (err, content) {
  if (err) {
    return console.log(err);
  }

  const lines = content.toString().split("\n").length;
  console.log(lines);
});