const 
    _ = require('lodash');

module.exports = {
    validate: function(req, res) {

        return payload
    },
    request: async function(payload) {
        try {

            // Await Cars-Service

            return payload
        } catch(err) {
            throw new Error(err.message)
        }
    },
    response: function(request, res) {

        return res.status(200).send(response)
    },
    error: function(err, res) {
        console.log('Cars List Cars error', err)
        return res.status(400).send(err.message)
    },
}