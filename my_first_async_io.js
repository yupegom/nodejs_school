var fs = require('fs')

function collectResult(err, file) {
  console.log (file.split('\n').length - 1);
}
var file = fs.readFile(process.argv[2], 'utf8', collectResult)
