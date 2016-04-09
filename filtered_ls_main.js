var mymodule = require('./filtered_ls_module')

mymodule(process.argv[2], process.argv[3], collectResult)

  function collectResult(err, files) {
    if(err) {
      console.log(err);
      throw err
    }
    
    files.forEach(function(file) {
      console.log(file);
    });

  }


