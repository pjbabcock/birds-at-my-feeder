(function configureAutocomplete() {
	
	//loads the data for the autocomplete and adds the data to it's contents.
	fetch('http://localhost:3000/birdnames').then(function (response) {
		return response.json();
	}).then(function (birdNames) {
		birdNames = JSON.parse(birdNames);
		new Autocomplete("#species-name-div", {
			search: input => {
				if (input.length < 1) { return [] }
				return birdNames.filter(bird => {
					return bird.toLowerCase().includes(input.toLowerCase())
				})
			},
			autoselect: true
		});
	});
})();