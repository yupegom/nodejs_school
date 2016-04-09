var fs = require('fs');
var path = require('path');

module.exports = function(dirName, extFile, collectResult) {

  fs.readdir(dirName, handleAnswer)

  function isSameExtension(value) {
    return path.extname(value) == '.' + process.argv[3];
  }

  function handleAnswer(err, data) {
    if(err)
      return collectResult(err);
    data = data.filter(isSameExtension);
    collectResult(null, data);
  }

}

