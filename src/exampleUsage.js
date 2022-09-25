const axios = require("axios"); // Mazowieckie

const options = {
  method: 'GET',
  url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
  params: {lat: '52.15', lon: '21'}, // szerkosc, dlugosc
  headers: {
    'X-RapidAPI-Key': '75879634b0msh030aea868ed7617p14451ajsnec37dfcfedaa',
    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

// drugie api
const requestOptions = {
    method: 'GET',
    headers: {'Content-Type': 'application/json',
              'Access-Control-Request-Method': 'GET',

  },
  }
fetch('http://api.weatherapi.com/v1/forecast.json?key=cad5cd8da0bd44f7b00104658220904&q=Warsaw', requestOptions).then(r =>  r.json()).then(data => this.setState({fetched: data}))

