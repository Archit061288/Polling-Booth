app.controller("createpollctrl",['$scope','userservice',function($scope,userservice){
	$scope.ch4show = false;
	$scope.addchoice = false;
	$scope.createchoice = function(){
		$scope.ch4show = true;
		$scope.addchoice = true;
	}
	$scope.savepoll = function(){
		$scope.datarr=[];
		if($scope.ch1){
			$scope.datarr.push($scope.ch1)
		}
		if($scope.ch2){
			$scope.datarr.push($scope.ch2)
		}
		if($scope.ch3){
			$scope.datarr.push($scope.ch3)
		}
		if($scope.ch4){
			$scope.datarr.push($scope.ch4)
		}

		$scope.data = {
			"question":$scope.question,
			"choices": $scope.datarr
		}
		
		userservice.createpoll($scope.data).then(function(result){
			console.log(result)
		},function(err){
			console.log(err)
		})
	}
}])