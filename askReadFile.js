 var fs = require('fs');
 var path = require('path');

console.log("Filename: ");

process.stdin.on('data', function (filename) { 

  var filePath = path.join(__dirname, filename.toString().replace(/(\n|\r|\r\n)$/, '') );
  var contents = fs.readFile(filePath,'utf8',function(err,contents){
		if(err){
			console.log(err.errno);
			process.exit();
		} 
		else
		{
			console.log(contents);
		}
	}
  ); 

});
