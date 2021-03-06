var createDataModule = function() {
	function getCity() {
		var input = document.querySelector('input#set-city');		
		var city = input.value;
		return city;
	}
	async function getData() {
		var city = getCity();
		var base = 'http://api.openweathermap.org/data/2.5/weather?q=';	
		var keyID = '&appid=7f3bc6859ab3a95663e462e956a1a6ab';
		var api = base + city + keyID;				
		var res = await fetch(api);
		var data = await res.json();
	  	return data;		
	}	
	
	return { getData: getData };	
}
