app.controller("registerctrl",['$scope','userservice','toaster','$state',function($scope,userservice,toaster,$state){
	$scope.word = /^[A-Za-z0-9\.\-]+@[a-z]+\.[a-z]{3,5}$/;
	$scope.registeruser = function(){
		$scope.data = {
			name:$scope.name,
			email:$scope.email,
			username:$scope.username,
			password:$scope.password
		}
		userservice.register($scope.data).then(function(result){
			if(result.data.success){
				toaster.pop('success', result.data.message);
				setTimeout(function(){
					$state.go('login');	
				},1500)
				
			}else{
				toaster.pop('error', result.data.message);	
			}
			
			
		},function(){
			
		})
	}
}])
