import axios from 'axios';

export default {

	saveUser: function (user) {
		console.log("User Saved", user);
		return axios.post("/api/users", user)
	}
}