const 
    CarsListCars = require('./CarsListCars'),
    CarsGetCar = require('./CarsGetCar');

module.exports = {
    listCars: async (req, res) => {
        try {
            const payload = CarsListCars.validate(req)
            const request = await CarsListCars.request(payload)
            return CarsListCars.response(request, res)
        } catch (err) {
            return CarsListCars.error(err, res)
        }
    },
    getCar: async (req, res) => {
        try {
            const payload = CarsGetCar.validate(req)
            const request = await CarsGetCar.request(payload)
            return CarsGetCar.response(request, res)
        } catch (err) {
            return CarsGetCar.error(err, res)
        }
    },
}