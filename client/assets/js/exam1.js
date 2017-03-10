var app = angular.module("app1",['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/sumurl/:a/:b',{
		templateUrl:'sumurl.html',
		controller: 'message1'
	})
	.when('/suminput',{
		templateUrl:'suminput.html',
		controller: 'message2'
	})
	.when('/sumfour/:a/:b/:c?/:d?',{
		templateUrl:'sumurl.html',
		controller: 'message4'
	})
	.when('/calc/:option/:a?/:b?',{
		redirectTo: function(params,path,search){
			if(params.option == "sum"){
				return '/sumurl/'+ (params.a -0) +'/'+ (params.b -0); 
			}else if(params.option == "input"){
				return '/suminput';
			}else{
				return '/';
			}
		}
	})
	.when('/',{
		template:'Default'
	})
	.otherwise({
		template:'No content available'
	})
}])

app.controller("message1",['$scope','$routeParams',function($scope,$routeParams){
	$scope.a=$routeParams.a;
	$scope.b = $routeParams.b;
}])

app.controller("message2",['$scope','$location','$interpolate',function($scope,$location,$interpolate){
	$scope.a=0;
	$scope.b =0;

	$scope.dosum = function(){
		var url = $interpolate("/sumurl/{{a}}/{{b}}")($scope);
		console.log(url)
		$location.path(url)
	}
}])

app.controller("message4",['$scope','$routeParams',function($scope,$routeParams){
	$scope.a=$routeParams.a;
	$scope.b = $routeParams.b;
	$scope.c = $routeParams.c;
	$scope.d = $routeParams.d;
}])



