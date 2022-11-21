//express is the framework we're going to use to handle requests
const express = require('express')

//retrieve the router object from express
var router = express.Router()

const api_keys = {
    keys : [{
        key1: "0262b79849e84a35866dc2600904ecd3"
    },
    {
        key2: "188f548df07c4b31a4f9ba8663aaeb42"
    },
    {
        key3: "09684b49b5344c0a87cd1961aa60b05c"
    },
    {
        key4: "61a3155487884405a26387bc46edd87f"
    }
]}
router.post("/", (request, response) => {
    const city = request.body.city;

    fetch('https://rmonto6-tcss450-project-auth.herokuapp.com/api_uses')
    .then(response =>{
        return response.json();
    })
    .then(data =>{
        keys = JSON.stringify(api_keys.keys[data.message])
        split = keys.split('\"')
    fetch('https://api.weatherbit.io/v2.0/forecast/daily?city='+city+'&key=' + split[3])
    .then(response =>{
        return response.json();
    })
    .then(data =>{
        console.log(data.data[0].valid_date)
    fetch('http://api.weatherbit.io/v2.0/history/hourly?city='+city + '&start_date=' + data.data[0].valid_date + "&end_date=" + data.data[1].valid_date +'&key=' + split[3])
    .then(response =>{
        return response.json();
    })
    .then(data =>{
        console.log(data)
})
})
})
})




module.exports = router 