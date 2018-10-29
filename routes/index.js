let https = require('https');
let Router = require('express').Router();

Router.get('/', (req, res) => {

	// Request URL
	let user_req_url = `https://api.behance.net/v2/users/${process.env.BEHANCE_USER_ID}?client_id=${process.env.BEHANCE_API_KEY}`;
	let pro_req_url = `https://api.behance.net/v2/users/${process.env.BEHANCE_USER_ID}/projects?client_id=${process.env.BEHANCE_API_KEY}&per_page=${process.env.BEHANCE_PER_PAGE}`;


	// Send the request to the behance api
	https.get(user_req_url, (resp) => {

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



				// Pull all the projects of the user
				https.get(pro_req_url, (resp_pro) => {
					
					let proj_data = '';

					resp_pro.on('data', (proj_chuck) => {
						proj_data += proj_chuck;
					});

					resp_pro.on('end', () => {
						projects_data = JSON.parse(proj_data);

						console.log(projects_data.projects[0].covers);

						if (projects_data.http_code === 200) {
							res.render('index', {user: user_data.user, projects: projects_data.projects});
						}else {
							res.render('index', {user: user_data.user, projects: false});
						}
					});

				}).on('error', (err) => {
					console.log(`Error: ${err}`);
				});


				// res.render('index', {user: user_data.user, test: 'nojoda'});
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
});

module.exports = Router;