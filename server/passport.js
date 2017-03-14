var LocalStrategy = require("passport-local").Strategy;
var jsonWebToken = require("jsonwebtoken");
var User = require("./model/user_poll_model").userregister;

module.exports = function(app,passport,bcrypt){

	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
	  User.findById(id, function(err, user) {
	    done(err, user);
	  });
	});

	passport.use("local-signup",new LocalStrategy({
		usernameField:"email",
		passwordField:"password",
		passReqToCallback:true
	},function(req,email,password,done){
		User.findOne({'email':email},function(err,data){
			if(err){
				return done(err);
			} 
			if(data){
				return done(null,false,{message:'User Already Exists'})
			}
			if(!data){
				var user = new User();
				user.name =  req.body.name;
				user.email =  req.body.email;
				user.username =  req.body.username;
				user.password =  req.body.password;

				bcrypt.genSalt(10, function(err, salt) {
				    bcrypt.hash(user.password, salt, function(err, hash) {
				        user.password = hash; 
				        user.save(function(err,data){
							if(err) throw err;
							return done(null,data)
						})
				    });
				});
				
			}
		})
	}))

	passport.use("local-login",new LocalStrategy({
		usernameField:"email",
		passwordField:"password",
		passReqToCallback:true
	},function(req,email,password,done){
		User.findOne({'email':email},function(err,data){
			if(err){
				return done(err)
			}	
			if(!data){
				return done(null,false,{message:"Invalid User"})
			}
			if(data){
			bcrypt.compare(req.body.password, data.password, function(err, res) {
				    if(err){
				    	return done(err)
				    }
				    if(res){
				    	var token = jsonWebToken.sign({data:'foobar'},app.get('superSecret'))
				    	data.token = token;
				    	User.findOneAndUpdate({'email':email},{$set:{
				    		'token':data.token
				    	}},function(err,doc){
				    		if(err) {
				    			return done(err);
				    		}
				    		if(doc){
				    			return done(null,data)
				    		}
				    	})
				    	
				    }else{
				    	return done(null,false,{message:"Invalid Password"})
				    }
				});
			}
		})
	}))
	
}