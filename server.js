// server.js
// where your node app starts

// init project
var express = require('express');
var bodyParser =require("body-parser")
  
var multer= require("multer")
var storage = multer.memoryStorage();
//var upload = multer({storage : storage, limits : { fileSize : 2000 }}) 
var upload = multer()
var app = express();

 
app.use(express.static('public'));

app.post('/upload',upload.single("data"), function(req,res){
  
  res.send({size : req.file.size})
  res.end();
})
 

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
