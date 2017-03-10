var express = require("express");
var bodyParser = require("body-parser")
var config = require("./server/configs")
var app = express();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }));

//app.use(express.static(__dirname+'/public'))


require("./server/route/routes")(app,express,config)
app.listen(3000,function(){
	console.log("Server listening to this port")
})


