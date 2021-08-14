//Destructuring
// accessing to a property
const { exec, spawn } = require('child_process');
const { stdout, stderr } = require('process');
// const exec = require('child_process').exec;

//  exec ('node modules/console.js', )
exec('ls --lha', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return false;
  }
  console.log(stdout);
})

//spawn a new process of nodejs
let process = spawn('ls', ['-lha']);

console.log(process.id);
console.log(process.connected);

process.stdout.on('data', function (datA) {
  console.log(datA.toString());
})

process.on('exit', function () {
  console.log('End process');
})