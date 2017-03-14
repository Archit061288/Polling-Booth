var userctrl = require("../controller/user_poll_controller")

module.exports =  function(app,express,config,passport){
	
	var router = express.Router();
	
	router.get('/',function(req,res){
		console.log("here")
	})

	router.post('/signup', function(req,res,next){
		passport.authenticate('local-signup',function(err,user,info){
		if(err){
			return next(err);	
		}
		if(!user){
			return res.send({ success : false, message : info.message });
		}
		return res.send({ success : true, message : 'User Register Successfully' ,data:user});
	})(req,res,next)	
	});

	router.post("/login",function(req,res,next){
		passport.authenticate("local-login",function(err,user,info){
			if(err){
				throw err;
			}
			if(!user && info){
				res.send({
					success:false,
					message:info.message
				})
			}
			if(user){
				res.send({
					success: true,
					message:"Login Successfully",
					data:user
				})
			}
		})(req,res,next)
	})


	router.post('/createpoll',userctrl.createpoll)
	app.use(config.api_url,router)
}
//1036743116