let _birdNames;

export async function loadBirdNames() {
	if (_birdNames) {
		return _birdNames;
	} else {
		let response = await fetch('http://localhost:3000/birdnames');
		_birdNames = JSON.parse(await response.json());
		return _birdNames;
	}
}