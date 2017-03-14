var mongoose = require("mongoose")
var config = require("../configs")
mongoose.connect(config.db)

var pollschema = mongoose.Schema({
	question:String,
	choices:{ type : Array , "default" : [] }
})


polllist = mongoose.model("poll_list",pollschema)


var userregisterSchema = mongoose.Schema({
	name:String,
	email:String,
	username:String,
	password:String,
	token:String
})


userregister = mongoose.model("user_register",userregisterSchema)
 module.exports = {
 	userregister: userregister,
 	polllist : polllist
 }