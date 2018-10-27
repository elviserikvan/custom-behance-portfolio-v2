let https = require('https');
let Router = require('express').Router();

Router.get('/', (req, res) => {

	// Request URL
	let req_url = `https://api.behance.net/v2/users/${process.env.BEHANCE_USER_ID}?client_id=${process.env.BEHANCE_API_KEY}`;

	// Send the request to the behance api
	https.get(req_url, (res) => {

		let data = '';

		// A chunk of data has been recieved.
		res.on('data', (chunk) => {
			data += chunk;
		});

		// The whole response has been recieved.
		res.on('end', () => {
			console.log(JSON.parse(data));
		});
	})

	// Error handler
	.on('error', (err) => {
		console.log(`Error: ${err.message}`);
	});

	res.render('index');
});

module.exports = Router;