const 
    chai = require('chai'),
    chaiHttp = require('chai-http'),
    server = require('../app');

chai.use(chaiHttp)

describe('Cars Routes', () => {

    describe('GET /cars', () => {
        it('It should return endpoint data', (done) => {
            chai.request(server)
                .get('/cars')
                .end((err, response) => {
                    response.should.have.status(200)
                    response.body.should.be.a('object')
                    response.body.should.have.property('data')
                    response.body.should.have.property('error').eq(false)
                    return done()
                })
        })
    })

    describe('GET /cars/:id', () => {
        it('It should return endpoint data', (done) => {
            chai.request(server)
                .get('/cars/JHk290Xj')
                .end((err, response) => {
                    response.should.have.status(400)
                    response.body.should.be.a('object')
                    response.body.should.have.property('data')
                    response.body.should.have.property('error').eq(false)
                    return done()
                })
        })

        it('It should return endpoint data with error', (done) => {
            chai.request(server)
                .get('/cars/id')
                .end((err, response) => {
                    response.should.have.status(400)
                    response.body.should.be.a('object')
                    response.body.should.have.property('data')
                    response.body.should.have.property('error').eq(true)
                    response.body.should.have.property('errorMessage').eq('Missing or incorrect car id.')
                    return done()
                })
        })
    })

})