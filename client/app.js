var app  = angular.module("app",['ui.router','toaster']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
$stateProvider
	.state("register",{
		url:'/register',
		templateUrl:'views/registerview.html',
		controller:'registerctrl'
	})
	.state("login",{
		url:'/login',
		templateUrl:'views/loginview.html',
		controller:'loginctrl'
	})
	.state("createpoll",{
		url:"/createpoll",
		templateUrl:'views/createpollview.html',
		controller:'createpollctrl'
	})
	.state('/',{
		url:'/'
	})
	$urlRouterProvider.otherwise("/")
}])

