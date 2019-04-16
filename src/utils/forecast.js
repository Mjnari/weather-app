const request = require('request')

const forcast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/7eb19d591b85995100e4fefb28997a6a/' + longitude + ',' + latitude

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.daily.data.length === 0) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined,
                body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forcast