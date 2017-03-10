var app = angular.module("app1",['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/calc',{
		templateUrl:'calc.html',
		controller:'calc'
	})
	.when('/calc/multiply/:a/:b',{
		templateUrl:'calc.html',
		controller:'calcmulti',
		resolve:{
			multiplyres : function(dataService,$route,$routeParams,$q){
				var a =$route.current.params.a;
				var b =$route.current.params.b;
				var c = dataService.add(a,b)
				if(c > 200){
					$q.reject("Error is occured")
				}else{
					return c;
				}
			}
		}
	})
	.when('/first-msg',{
		template:"asd"
	})
	.when('/',{
		template:"Welcome to my App."
	})
	.otherwise({
		template:"NO content availbale here"	
	})
}])

app.controller('calcmulti',['$scope','multiplyres',function($scope,multiplyres){	
	$scope.c = multiplyres	
}])

app.controller("calc",['$scope','dataService','$location','$routeParams','$route',function($scope,dataService,$location,$routeParams,$route){

	console.log("here")
	$scope.a = 0;
	$scope.b = 0;

	if($routeParams.a){
		$scope.a = $routeParams.a;
	}
	if($routeParams.b){
		$scope.b = $routeParams.b;
	}

	// if($routeParams.option && $routeParams.a && $routeParams.b){
	// 	if($routeParams.option == "add"){
	// 		//console.log("call started");
	// 		$scope.c = dataService.add($scope.a,$scope.b)
	// 		console.log($scope.c)
	// 		//console.log("call ended")
	// 	}
	// 	else{
	// 		$location.url('/calc')
	// 	}
		
	// }

	$scope.dosum = function(){
		//$scope.c = dataService.add($scope.a,$scope.b)
	
		var path = '/calc/add/'+$scope.a +'/'+$scope.b;
		if($location.path() == path){
			$route.reload()
		}else{
			$location.url(path);	
		}
	}

	$scope.multiplyres = function(){

		var path = '/calc/multiply/'+ $scope.a + '/'+ $scope.b;
		$location.url(path);
	}


	$scope.updateres = function(){
		$route.updateParams({
			a: $scope.a,
			b: $scope.b
		})
	}

}])

app.run(['$rootScope',function($rootScope){
	$rootScope.$on("$routeChangeStart",function(e,curr,prev,rejection){
		console.log("start")
	})
	$rootScope.$on("$routeChangeSuccess",function(e,curr,prev,rejection){
		console.log("end")
	})
	$rootScope.$on("$routeChangeError",function(e,curr,prev,rejection){
		console.log("error")
	})
}])




