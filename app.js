//#region SERVER SETUP

const { exec } = require('child_process');
const express = require('express'),
    app = express(),
    port = 3000;

// Express Middleware for serving static files.
app.use(express.static(__dirname + '/public'));

//Kicks off the app on a specified port
app.listen(port);
console.log(`Your server available at http://localhost:${port}`);

//#endregion

//#region ROUTES

//The landing page of the site. 
app.get('/', function (req, res) {
    res.redirect('index.html');
});

//Endpoint to load the names of the birds. 
app.get('/birdnames', (req, res) => {
    exec('node scripts/load-bird-names', (error, stdout) => {
        if (error) {
            console.error(`error: ${error.message}`);
            res.status(500);
        }
        else {
            res.json(stdout);
            res.status(200);
        }
    });
});

//#endregion

