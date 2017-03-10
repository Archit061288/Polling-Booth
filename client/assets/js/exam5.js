var app = angular.module("app1",['ui.router'])

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state("calc",{
		url:'/calc',
		templateUrl:'calc.html',
		controller:'calcontroller'
	})
	.state("sample02",{
		url:'/sample',
		views:{
			'':{
				templateUrl:'sample.html',
				controller:'sample'
			},
			'test':{
				template:'<strong>Hello</strong>'
			}
		}
	})
	.state("add",{
		url:'/add/:a/:b',
		templateUrl:'mymsg.html',
		controller:'addcontroller',
		data:{
			multiplier: 10
		}
	})
	.state("root",{
		url:'/',
		template:'This is default'
	})
	$urlRouterProvider.otherwise("/")
}])

app.controller("calcontroller",['$scope','$rootScope','$state',function($scope,$rootScope,$state){
	$scope.a = 0;
	$scope.b = 0;

	$scope.dosum = function(){
		$state.go("add",{
			a: $scope.a,
			b: $scope.b
		})
	}
}])

app.controller("sample",['$scope','$rootScope','$state',function($scope,$rootScope,$state){
	$scope.a = 0;
	$scope.b = 0;

	$scope.c = 30;

}])

app.controller("addcontroller",['$scope','$stateParams','$state',function($scope,$stateParams,$state){
	$scope.a = 0;
	$scope.b = 0;

	
	if($stateParams.a){
		$scope.a = $stateParams.a;
	}
	if($stateParams.b){
		$scope.b = $stateParams.b;
	}

	$scope.result = (parseInt($scope.a) + parseInt($scope.b) + $state.current.data.multiplier) 

		$scope.goback = function(){
		$state.go('calc')	
	}

}])

app.run(['$rootScope',function($rootScope){
	$rootScope.$on("$statechangestart",function(e,toState,toParams,fromState,fromParams,options){

	})
}])