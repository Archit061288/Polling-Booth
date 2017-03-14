var express = require("express");
var bodyParser = require("body-parser")
var config = require("./server/configs")
var session = require("express-session");
var flash = require("connect-flash");
var passport = require("passport");
var cookieParser =  require("cookie-parser");
var bcrypt = require("bcryptjs");
var app = express();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }));

var impobj = {
	'jwtsecret':'mysecret'
}

app.set("superSecret",impobj.jwtsecret)
//app.use(express.static(__dirname+'/public'))

app.use(session({
	secret:"mysecretcode",
	saveUninitialized:true,
	resave:true,	

}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(passport.initialize())
app.use(passport.session())
app.use(cookieParser());
app.use(flash())

require("./server/passport")(app,passport,bcrypt)

require("./server/route/routes")(app,express,config,passport)
app.listen(3000,function(){
	console.log("Server listening to this port")
})


