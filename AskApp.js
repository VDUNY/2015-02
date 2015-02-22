var ask = require('./ask.js').ask;

 ask("Name", /.+/, function(name) {
  ask("Email", /^.+@.+$/, function(email) {
    console.log("Your name is: ", name);
    console.log("Your email is:", email); 
    process.exit();
  });
});