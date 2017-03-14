app.constant("appconstant",{
	baseurl:'http://localhost:3000/api'
})

app.service("userservice",function($http,appconstant){
	return {
		"register":function(data){
			return $http.post(appconstant.baseurl+'/signup',data)
		},
		"login":function(data){
			return $http.post(appconstant.baseurl+'/login',data)
		},
		"createpoll":function(data){
			return $http.post(appconstant.baseurl+'/createpoll',data)
		}
	}
})