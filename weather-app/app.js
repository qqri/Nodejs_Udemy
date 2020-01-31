const request = require('request')

const url = 'https://api.darksky.net/forecast/c5954773866ad3d64f24143daa1cd217/37.8267,-122.4233?lang=ko'

request({ url:url, json:true },(error,response) => {
    //console.log(response.body.currently)
    console.log(response.body.daily.data[0].summary + "It is currently "+ response.body.currently.temperature + ' degress out. There is a '+ response.body.currently.precipProbability + '% chance of rain')
})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicXFxMTIiLCJhIjoiY2s2MXhkZWkzMDhmdjNrcGptenliMTcwMyJ9.ZInL3wI8oVXKSLRBuq_uOA&limit=1'

request({url : geocodeURL , json:true }, (error, response)=>{
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude)
}) 