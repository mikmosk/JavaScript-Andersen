function makeVisible(selector) {
	var elem = document.querySelector(selector);
	elem.style.visibility = 'visible';	
}
function addTextToSelector(selector, value) {
	var elem = document.querySelector(selector);	
	elem.innerHTML = value;
}
function setImage(selector, apiImageCode) {
	var weatherImage = document.querySelector(selector);
	document.querySelector(selector).src = 'http://openweathermap.org/img/w/'+ apiImageCode + '.png';
}
function toCelsius(tempKelvin) {
	return Math.round(tempKelvin - 273.15);
}
function showData(data) {
	addTextToSelector('#city', data.name);
	addTextToSelector('#temperature', toCelsius(data.main.temp) + ' &deg;C');
	addTextToSelector('#weather', data.weather[0].main);
	addTextToSelector('#wind-speed', data.wind.speed + ' mps');
	addTextToSelector('#humidity', data.main.humidity + ' %');
	setImage('#weather-image', data.weather[0].icon);
	makeVisible('#show-weather-block');		
}	
