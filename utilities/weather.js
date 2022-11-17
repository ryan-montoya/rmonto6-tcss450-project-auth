//express is the framework we're going to use to handle requests
const express = require('express')

//retrieve the router object from express
var router = express.Router()


router.post("/", (request, response) => {
    const city = request.body.city;
    
    fetch('https://api.weatherbit.io/v2.0/forecast/daily?city='+city+'&key=0262b79849e84a35866dc2600904ecd3')
        .then(response =>{
            return response.json();
        })
        .then(data =>{

            const payload = {
                "days" : [
                    {
                        date: data.data[0].valid_date,
                        max: data.data[0].max_temp,
                        min: data.data[0].min_temp,
                        description: data.data[0].weather.description
                    },
                    {
                        date: data.data[1].valid_date,
                        max: data.data[1].max_temp,
                        min: data.data[1].min_temp,
                        description: data.data[1].weather.description
                    },
                    {
                        date: data.data[2].valid_date,
                        max: data.data[2].max_temp,
                        min: data.data[2].min_temp,
                        description: data.data[2].weather.description
                    },
                    {
                        date: data.data[3].valid_date,
                        max: data.data[3].max_temp,
                        min: data.data[3].min_temp,
                        description: data.data[3].weather.description
                    },
                    {
                        date: data.data[4].valid_date,
                        max: data.data[4].max_temp,
                        min: data.data[4].min_temp,
                        description: data.data[4].weather.description
                    },
                    {
                        date: data.data[5].valid_date,
                        max: data.data[5].max_temp,
                        min: data.data[5].min_temp,
                        description: data.data[5].weather.description
                    },
                    {
                        date: data.data[6].valid_date,
                        max: data.data[6].max_temp,
                        min: data.data[6].min_temp,
                        description: data.data[6].weather.description
                    }
                ]
            }
            
            response.send({
                //req.query is a reference to arguments a
                message: payload
            })
    })
})




module.exports = router 