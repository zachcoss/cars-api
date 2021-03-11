const 
    express = require('express'),
    router = express.Router(),
    Cars = require('./routes/Cars');

module.exports = function () {

    router.get('/cars', Cars.listCars)
    router.get('/cars/:id', Cars.getCar)
    
    return router
}