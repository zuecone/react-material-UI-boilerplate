var express = require('express');
var app = express();

//static - specify folder name to expose
app.use(express.static('public'));

app.listen(3000, function(){
	console.log('Express started on port: 3000 ');
})