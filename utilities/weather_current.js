//express is the framework we're going to use to handle requests
const express = require('express')

//retrieve the router object from express
var router = express.Router()


router.post("/", (request, response) => {
    const city = request.body.city;
    fetch('https://api.weatherbit.io/v2.0/current?city='+city+'&key=0262b79849e84a35866dc2600904ecd3')
    .then(response =>{
        return response.json();
    })
    .then(data =>{

        const payload = {
            temp: data.data[0].temp
        }
        
        response.send({
            //req.query is a reference to arguments a
            message: payload
        })
})
})




module.exports = router 