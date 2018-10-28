let https = require('https');
let Router = require('express').Router();

Router.get('/', (req, res) => {

	// Request URL
	let req_url = `https://api.behance.net/v2/users/${process.env.BEHANCE_USER_ID}?client_id=${process.env.BEHANCE_API_KEY}`;

	// Send the request to the behance api
	https.get(req_url, (resp) => {

		let data = '';

		// A chunk of data has been recieved.
		resp.on('data', (chunk) => {
			data += chunk;
		});

		// The whole response has been recieved.
		resp.on('end', () => {
			let user_data = JSON.parse(data);

			// Check if there's any error with the API
			if (user_data.http_code === 200) {
				// console.log(user_data);
				res.render('index', {user: user_data.user, test: 'nojoda'});
			}else {
				console.log(user_data);

				// Change to an actual error handler
				res.send('Error');
			}
		});
	})

	// Error handler
	.on('error', (err) => {
		console.log(`Error: ${err.message}`);
	});

	// res.render('index');
});

module.exports = Router;