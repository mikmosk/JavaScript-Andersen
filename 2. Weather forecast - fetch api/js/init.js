var submit = document.querySelector('#submit-city');
	submit.addEventListener('click', function() {		
		var dataModule = createDataModule();	
		var showDataModule = createShowDataModule();
	
		var dataState = dataModule.getData();
		dataState .then(data => {
			showDataModule.showData(data);
		})
		.catch(err => showDataModule.showError());	
});

window.addEventListener("load", showHints);

function showHints(){
    var name_input = document.getElementById('set-city');
    name_input.addEventListener("input", function(event){debounce(hinter(event), 1000)});

    window.hinterXHR = new XMLHttpRequest();

    function hinter(event) {
	    var input = event.target;
	    var cities_list = document.getElementById('cities_list');
	    var min_characters = 0;

	    if (input.value.length < min_characters ) { 
	        return;
	    } else { 	    	      
        	window.hinterXHR.abort();
       
	        window.hinterXHR.onreadystatechange = function() {
	            if (this.readyState == 4 && this.status == 200) {
	                var response = JSON.parse( this.responseText ); 
					cities_list.innerHTML = "";

					for (var i = 0; i < response.length; i++) {
					    var cityData = response[i];
					    for (var property in cityData) {					        
					  	  	var option = document.createElement('option');
							option.value = cityData.name;
							cities_list.appendChild(option);
					    }					    		
					}
			    }
			};
		    
		    window.hinterXHR.open("GET", "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json", true);
	        window.hinterXHR.send()
		}
	}
}
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
