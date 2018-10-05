// import axios from 'axios';
// import fetch from 'fetch';
// import {start} from 'repl';

const url = "https://peaceful-dusk-39687.herokuapp.com"


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
	},
	
	saveBrewer: function (brewer) {
		console.log("Brewer Saved", brewer);
		
			fetch(url + "/api/brewers",{
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(brewer)
			})
			.then(response => 
			console.log("Fetch Response", response))
			.catch(err => console.log("Error", err))
	},

	authenticate: function(user) {
		console.log("API User", user);	

		fetch(url + "/api/users/login",{
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user)
		})
		.then(
			res => res.json())
		.then(jsonresponse=>{
			console.log(jsonresponse)
		})
		.catch(err => console.log(err));
	}
}	