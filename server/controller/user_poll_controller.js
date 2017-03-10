var UserModel  = require("../model/user_poll_model");

exports.createpoll = function(req,res){
	var userdata = req.body
	console.log(userdata,"t1")
	var user = new UserModel(userdata);
	user.save(function(err,data){
		if(err) throw err;
		res.json(data);
	})
}