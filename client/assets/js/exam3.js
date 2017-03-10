app.config(['dataServiceProvider',function(dataServiceProvider){
	dataServiceProvider.config('http://www.w3schools.com/angular/customers.php')
}])

app.provider("dataService",function(){

	var baseurl;
	this.config= function(url){
		baseurl = url;
	}
	this.$get= ['$http','$log','$timeout',function($http,$log,$timeout){
		//$log.log("here");
		var oDataservice={};

		oDataservice.add = function(a,b){
			console.log(a,b)
			
				var ca = parseInt(a) + parseInt(b)	
				console.log(ca)
				return ca;
			
			
		}

		return oDataservice;

	}]
})

