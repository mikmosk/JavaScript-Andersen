var createDataModule = function() {
	function getCity() {
		var input = document.querySelector('input#set-city');		
		var city = input.value;
		return city;
	}
	function getData() {
		var city = getCity();
		var base = 'http://api.openweathermap.org/data/2.5/weather?q=';	
		var keyID = '&appid=7f3bc6859ab3a95663e462e956a1a6ab';
		var api = base + city + keyID;		
		fetch(api)
				.then(function(response) { 
					return response.json(); 
				})
				.then(function(data) {				 															
					showData(data);					
				})			
	}	
	return { getData: getData };	
}




// function getWeather(city) {
	
	// var base = 'http://api.openweathermap.org/data/2.5/weather?q=';	
	// var keyID = '&appid=7f3bc6859ab3a95663e462e956a1a6ab';
	// var api = base + city + keyID;

	// var weatherIcon = document.getElementById('weather-icon');
	
	// var status = function (response) {
	  // if (response.status !== 200) {
	    // return Promise.reject(new Error(response.statusText))
	  // }
	  // return Promise.resolve(response)
	// }
	
	// var json = function (response) {	
	  // return response.json()
	// }

	// fetch(api)
	  // .then(status)
	  // .then(json)	  
	  // .then(function (data) {	   		
		// console.log(typeof(data));
				
		// weatherForecast = data.clone();
		// weatherForecast.id = data.id;
		// console.log(weatherForecast.id);
		
        
		// weatherForecast.city = data.name;
		// console.log(weatherForecast.city);
		
		// weatherForecast.temperature = data.main.temp;
		
		// var imageCode = data.weather[0].icon;
		// weatherForecast.imageSource = 'http://openweathermap.org/img/w/'+ imageCode + '.png';		
		
		
		
	  // })

	  // .catch(function (error) {
	    // console.log('error', error)
	  // })
	
	// return weatherForecast;
// }


