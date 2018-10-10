// import axios from 'axios';
// import fetch from 'fetch';
// import {start} from 'repl';

const url = "https://peaceful-dusk-39687.herokuapp.com";

export default {
  saveUser: function(user) {
    console.log("User Saved", user);

    fetch(url + "/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => console.log("Fetch Response", response))
      .catch(err => console.log("Error", err));
  },

  saveBeer: function(beer) {
    console.log("Beer saved", beer);
    fetch(url + "/api/beers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(beer)
    })
      .then(response => console.log("Fetch Response", response))
      .catch(err => console.log("Error", err));
  },

  loadBeers: function(beers) {
    console.log("Beers rendered", beers);
    return fetch(url + "/api/beers/id", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(beers)
    })
      .then(response => response.json())

      .catch(err => console.log("Error", err));
  },

  saveBrewer: function(brewer) {
    console.log("Brewer Saved", brewer);

    fetch(url + "/api/brewers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(brewer)
    })
      .then(response => console.log("Fetch Response", response))
      .catch(err => console.log("Error", err));
  },

  authenticate: function(user) {
    console.log("API User", user);

    return (
      fetch(url + "/api/users/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
        .then(response => response.json())
        // .then(jsonresponse=>{
        // 	console.log(jsonresponse)
        // })
        .catch(err => console.log(err))
    );
  },

  authenticateBrewer: function(brewer) {
    console.log("API User", brewer);

    return (
      fetch(url + "/api/brewers/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(brewer)
      })
        .then(response => response.json())
        // .then(jsonresponse=>{
        // 	console.log(jsonresponse)
        // })
        .catch(err => console.log(err))
    );
  },

  logoutUser: function(id) {
    return fetch(url + "/api/users/logout", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(id)
    })
      .then(response => response.json)
      .catch(err => console.log(err));
  },

  logoutBrewer: function(id) {
    return fetch(url + "/api/brewers/logout", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(id)
    }).catch(err => console.log(err));
  },

  loadBrewer: function(brewer) {
    return fetch(url + "/api/brewers", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(brewer)
    })
      .then(response => response.json())
      .catch(err => console.log(err));
  },

  loadBrewerById: function(id) {
    return fetch(url + "/api/brewers/find/" + id, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .catch(err => console.log(err));
  },

  addFavBrewer: function(favObject) {
    console.log(favObject);
    return fetch(url + "/api/users/favbrewery", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(favObject)
    })
      .then(response => response.json())
      .catch(err => console.log(err));
  },

  loadFavBrewers: function(user) {
    return fetch(url + "/api/users/favbrewery/id", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .catch(err => console.log(err));
  }
};
