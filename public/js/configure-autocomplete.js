export function configureAutoComplete(birdNames) {
	const elements = document.querySelectorAll(".autocomplete");
	const search = input => {
		if (input.length < 1) { return [] }
		return birdNames.filter(bird => {
			return bird.toLowerCase().includes(input.toLowerCase())
		})
	}
	elements.forEach(el => {
		new Autocomplete(el, {
			search,
			autoselect: true
		});
	})
}
