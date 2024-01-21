const fs = require('fs');
const CsvReadableStream = require('csv-reader');
const birdNames = [];
let rowCount = 0;

//load the list of bird names from a csv file
let inputStream = fs.createReadStream('resources/bird_list/NACC_list_species.csv', 'utf8');
inputStream
	.pipe(new CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
	.on('data', function (row) {
		if(rowCount === 0){ //skip the header row
			rowCount ++;
			return;
		}
		birdNames.push(row[2]); //the birds common name
		rowCount ++;
	})
	.on('end', function () {
		return birdNames;
	});

