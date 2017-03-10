var mongoose = require("mongoose")
var config = require("../configs")
mongoose.connect(config.db)

var pollschema = mongoose.Schema({
	question:String,
	choices:{ type : Array , "default" : [] }
})


module.exports = mongoose.model("poll_list",pollschema)