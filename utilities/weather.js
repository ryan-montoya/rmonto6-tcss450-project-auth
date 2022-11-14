//express is the framework we're going to use to handle requests
const express = require('express')

//retrieve the router object from express
var router = express.Router()
let callApi = (city) => {
const fs = require('fs')
if (fs.existsSync('weather.json')) {
    return 'Weather data exists'
}
else{
    fetch('https://api.weatherbit.io/v2.0/forecast/daily?city='+city+'&key=0262b79849e84a35866dc2600904ecd3').then(response =>{
        return response.json();
    }).then(data =>{
        console.log(data);
        fs.writeFile('weather.json', JSON.stringify(data), function (err) {
        if (err) return console.log(err);
            console.log('7dayforcast > weather.json');
    });
    })
}
    
}
let callApiGet = () => {
    const fs = require('fs')
    if (fs.existsSync('weather.json')) {
        fs.readFile('weather.json', 'utf8', function (err,data) {
            if (err) {
              return console.log(err);
            }
            console.log('Weather data is stored');
        });
        return require('../weather.json')
    }
    else{
        return "No weather stored."
    }
        
    }
    
router.post("/", (request, response) => {
    response.send({
        //req.query is a reference to arguments a
        message: callApi(request.body.city)
    })
})

router.get("/", (request, response) => {
        response.send({
            //req.query is a reference to arguments a
            message: callApiGet()
        })
})



module.exports = router 