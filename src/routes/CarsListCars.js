const 
    _ = require('lodash'),
    axios = require('axios');

module.exports = {
    validate: function(req, res) {
        return {}
    },
    request: async function(payload) {
        try {
            const cars = await axios.get(`${process.env.CARS_SERVICE_URL}/cars`)
            return cars.data
        } catch(err) {
            throw new Error(err.message)
        }
    },
    response: function(response, res) {
        return res.status(200).send(response)
    },
    error: function(err, res) {
        console.log('Cars List Cars error', err)
        return res.status(400).send({
            data: [],
            error: true,
            errorMessage: err.message,
        })
    },
}