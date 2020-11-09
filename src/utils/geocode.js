const request = require('request')

const geocode = (address, callback) => {
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicDJ0YW4iLCJhIjoiY2tmc3hmdDNoMDJ5NzJwcWZ0bHpzaG9saSJ9.-jKeeWR1AifmrYAn-CYt4w'
    
    request({ url, json: true}, (error, { body }) =>{
        if(error){
            callback('Please ch-MHWAHAHAHHAHAHAH PUNY MORTAL! YOU CANNOT ESCAPE THE ALMIGHTY LORD BUTTFACE! ', undefined)
        } else if (body.features.length === 0) {
            callback('Please try again with a VALID place to search, idiot.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1], 
                longitude:  body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode