const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url =  "http://api.weatherstack.com/current?access_key=323ac909e56e4038081bff1eda218e3f&query=" + latitude + "," + longitude + "&units=f"
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions+ '. It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike+ ' degrees.')
        }
    })
}


module.exports = forecast