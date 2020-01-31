const request = require('request')

const url = 'https://api.darksky.net/forecast/c5954773866ad3d64f24143daa1cd217/37.8267,-122.4233?lang=ko'

request({ url:url, json:true },(error,response) => {
    //console.log(response.body.currently)
    console.log(response.body.daily.data[0].summary + "It is currently "+ response.body.currently.temperature + ' degress out. There is a '+ response.body.currently.precipProbability + '% chance of rain')
})