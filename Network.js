var http = require('http'),
  urls = ['fox.com', 'www.bbc.co.uk', 'cnn.com', 'globalwindows.com','google.com','vduny.org'];

function fetchPage(url) {
  var start = new Date();
  http.get({ host: url }, function(res) {
    console.log("Got response from: " + url + ' the request took:', new Date() - start, 'ms');
  });
}

for(var i = 0; i < urls.length; i++) {
  fetchPage(urls[i]);
}

