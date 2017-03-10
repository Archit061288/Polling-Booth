var userctrl = require("../controller/user_poll_controller")
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
module.exports =  function(app,express,config){
	
	var router = express.Router();
	
	router.post("/register")


	router.post('/createpoll',userctrl.createpoll)
	app.use(config.api_url,router)
}