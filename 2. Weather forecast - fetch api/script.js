function addTextToSelector(selector, value) {
	var elem = document.querySelector(selector);	
	elem.innerHTML = value;
}

function setImage(selector, apiImageCode) {
	var weatherImage = document.querySelector(selector);
	document.querySelector(selector).src = 'http://openweathermap.org/img/w/'+ apiImageCode + '.png';
}

function makeVisible(selector) {
	var elem = document.querySelector(selector);
	elem.style.visibility = 'visible';	
}

function toCelsius(tempKelvin) {
	return Math.round(tempKelvin - 273.15);
}

function getCity() {
	var input = document.querySelector('input#set-city');		
	var city = input.value;
	return city;
}

var submit = document.querySelector('#submit-city');
submit.addEventListener('click', function() {
	makeVisible('#show-weather-block')
	getWeather();	
});

function getWeather() {
	var city = getCity();
	var base = 'http://api.openweathermap.org/data/2.5/weather?q=';	
	var keyID = '&appid=7f3bc6859ab3a95663e462e956a1a6ab';
	var api = base + city + keyID;
	
	fetch(api)
		.then(function(response) { return response.json(); })
		.then(function(data) {				
			addTextToSelector('#city', data.name);
			addTextToSelector('#temperature', toCelsius(data.main.temp) + ' &deg;C');
			addTextToSelector('#weather', data.weather[0].main);
			addTextToSelector('#wind-speed', data.wind.speed + ' mps');
			addTextToSelector('#humidity', data.main.humidity + ' %');
			setImage('#weather-image', data.weather[0].icon);		
      })	  
}
