const https = require('https')
const url = 'https://api.darksky.net/forecast/c5954773866ad3d64f24143daa1cd217/40,-75?lang=ko'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
        //console.log(data)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()