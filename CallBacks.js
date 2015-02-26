var fs = require('fs');
var http = require('http');

http.get({ host: 'shapeshed.com' }, function(res) {
    console.log("Internet response from shapeshed.com");
}).on('error', function(e) {
    console.log("There was an error from shapeshed.com");
});

http.get({ host: 'www.bbc.co.uk' }, function(res) {
    console.log("Internet response from bbc.co.uk");
}).on('error', function(e) {
    console.log("There was an error from bbc.co.uk");
});

fs.readFile('askReadFile.js', 'utf8', function (err, data) {
    if (err) { throw err; }
    console.log('Local file askReadFile.js read');
});

fs.readFile('server.js', 'utf8', function (err, data) {
    if (err) { throw err; }
    console.log('Local File server.js read');
});
