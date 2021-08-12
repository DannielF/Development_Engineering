const fs = require('fs');

function read(route, cb) {
  fs.readFile(route, (err, data) => {
    cb(data.toString());
  });
}
function write(route, content, cb) {
  fs.writeFile(route, content, function (err) {
    if (err) {
      console.error('It cannot possible to write', err);
    } else {
      console.log('It has been written');
    }
  });
}
function deleteFile(route, cb) {
  fs.unlink(route, cb);
}

read(__dirname + '/file.txt', console.log);
write(__dirname + '/file1.txt', 'I am new file', console.log);
deleteFile(__dirname + '/file1.txt', console.log);