var http = require('http');
var bl = require('bl');

http.get(process.argv[2], callback);

function callback(response) {
  response.pipe(bl(function(err, data) {
    console.log(data.toString().length);
    console.log(data.toString())
  }))
}
