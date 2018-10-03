// import axios from 'axios';
// import fetch from 'fetch';
// import {start} from 'repl';

const url = "https://calm-peak-17945.herokuapp.com"

export default {

	saveUser: function (user) {
		console.log("User Saved", user);
		
			fetch(url + "/api/users",{
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user)
			})
			.then(response => 
			console.log("Fetch Response", response))
			.catch(err => console.log("Error", err))
		
	}
}