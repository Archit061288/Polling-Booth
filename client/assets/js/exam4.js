var app = angular.module("app1",['ui.router'])

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state("firstMessage",{
		url:'/first-msg/:a/:b',
		templateUrl:'mymsg.html',
		controller: 'msg1'
	})
	.state("SecondMessage",{
		url:'/second-msg/{a:[0-9]+}/{b}',
		templateUrl:'mymsg2.html',
		controller: 'msg2'
	})
	.state("ThirdMessage",{
		url:'/third-msg/:a',
		templateUrl:'mymsg2.html',
		controller: 'msg2'
	})
	.state("ThirdMessage2",{
		url:'/third-msg/:a/:b',
		templateUrl:'mymsg2.html',
		controller: 'msg2'
	})
	.state("fourthmessage",{
		url:'/fourth-msg?a&b',
		templateUrl:'mymsg2.html',
		controller: 'msg2',
		params:{
			a:{value:'1'},
			b:{array:true}
		}
	})
	.state("root",{
		url:'/',
		template:'This is default'
	})
	$urlRouterProvider.otherwise('/')
}])

app.controller("msg1",['$scope','$stateParams',function($scope,$stateParams){
	$scope.a = $stateParams.a;
	$scope.b = $stateParams.b;
}])
app.controller("msg2",['$scope','$stateParams',function($scope,$stateParams){
	$scope.c = $stateParams.a;
	$scope.d = $stateParams.b;
}])