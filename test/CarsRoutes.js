const 
    chai = require('chai'),
    chaiHttp = require('chai-http'),
    expect = chai.expect,
    server = require('../app');

chai.use(chaiHttp)

describe('Cars Routes', () => {

    describe('GET /cars', () => {
        it('It should return endpoint data', (done) => {
            chai.request(server)
                .get('/cars')
                .end((err, response) => {
                    expect(response).to.have.status(200)
                    expect(response.body).to.be.a('object')
                    expect(response.body).to.have.property('data')
                    expect(response.body).to.have.property('error').eq(false)
                    expect(response.body).to.have.property('errorMessage').eq('')
                    return done()
                })
        })
    })

    describe('GET /cars/:id', () => {
        it('It should return endpoint data', (done) => {
            chai.request(server)
                .get('/cars/JHk290Xj')
                .end((err, response) => {
                    expect(response).to.have.status(200)
                    expect(response.body).to.be.a('object')
                    expect(response.body).to.have.property('data')
                    expect(response.body).to.have.property('error').eq(false)
                    expect(response.body).to.have.property('errorMessage').eq('')
                    return done()
                })
        })

        it('It should return endpoint data with empty object', (done) => {
            chai.request(server)
                .get('/cars/id')
                .end((err, response) => {
                    expect(response).to.have.status(200)
                    expect(response.body).to.be.a('object')
                    expect(response.body).to.have.property('data').empty
                    expect(response.body).to.have.property('error').eq(false)
                    expect(response.body).to.have.property('errorMessage').eq('')
                    return done()
                })
        })
    })

})