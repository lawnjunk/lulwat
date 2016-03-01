var fs = require('fs')

fs.readFile('./lulwat.js', function(err, data){
  if (err) throw err;

  console.log(data.toString())

});
