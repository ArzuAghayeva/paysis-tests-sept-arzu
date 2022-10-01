import supertest from 'supertest'
import { expect } from 'chai'

describe('Authentication', function () {
    it('Successful log in', async function () {
        const response = await supertest ('http://localhost:3000')
            .post('/auth')
            .send({
                login: 'admin',
                password: 'admin'
            })
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('token')
        expect(response.body.token).to.be.a('string')
        expect(response.body.token).to.not.be.empty
        expect(response.body.token).not.to.be.undefined
    })

    it('Log in with invalid credentials', async function () {
        const response = await supertest ('http://localhost:3000')
            .post('/auth')
            .send({
                login: 'admin',
                password: 'invalid'
            })
        expect(response.status).to.eq(404)
        expect(response.body).to.have.property('message')
        expect(response.body.message).to.be.a('string')
        expect(response.body.message).to.not.be.empty
        expect(response.body.message).to.eq('Wrong login or password.')
    })
})

