app.controller("loginctrl",['$scope','userservice','toaster','$state',function($scope,userservice,toaster,$state){
	$scope.word = /^[A-Za-z0-9\.\-]+@[a-z]+\.[a-z]{3,5}$/;
	console.log("login")
	$scope.loginctrl = function(){
		var data = {
			email:$scope.email,
			password:$scope.password
		}
		userservice.login(data).then(function(result){
			if(result.data.success){
				toaster.pop('success', result.data.message);
				$state.go('createpoll');	
			}else{
				toaster.pop('error', result.data.message);	
			}
		},function(err){
			console.log(err)
		})
	}
}])