var fs = require('fs');

var contents = fs.readFile('./index.html',	'utf8',	function(err,contents){
		if(err){
			console.log('Error');
		} 
		else
		{
			console.log(contents);
		}
	}
);
