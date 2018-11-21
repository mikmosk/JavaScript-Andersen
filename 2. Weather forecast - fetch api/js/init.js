var submit = document.querySelector('#submit-city');
	submit.addEventListener('click', function() {	
	var dataModule = createDataModule();	
	dataModule.getData();
});