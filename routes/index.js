const axios = require('axios')
let https = require('https');
let Router = require('express').Router();

Router.get('/', async  (req, res) => {


	try {
		// Request user data
		let user_req_url = `https://api.behance.net/v2/users/${process.env.BEHANCE_USER_ID}?client_id=${process.env.BEHANCE_CLIENT_ID}`;
		let user_data = await axios.get(user_req_url)
		if(user_data.data.http_code != 200) throw "An error ocurred requesting user data"

		// Get projects data
		let pro_req_url = `https://api.behance.net/v2/users/${process.env.BEHANCE_USER_ID}/projects?client_id=${process.env.BEHANCE_CLIENT_ID}&per_page=20`;
		let projects_data = await axios.get(pro_req_url)
		
		if (projects_data.data.http_code == 200) {
			res.render('index', {user: user_data.data.user, projects: projects_data.data.projects, title: 'Custom Behance Portfolio!'});
		} else {
			res.render('index', {user: user_data.data.user, projects: false, title: 'Custom Behance Portfolio!'});
		}
	} catch (e){
		console.log(`Error: ${e.message}`)	
		res.render('error', {title: 'An Error Occurred!'})
	}

});

module.exports = Router;
