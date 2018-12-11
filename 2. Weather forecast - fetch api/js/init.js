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
