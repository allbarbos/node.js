const request = require('supertest')
const app = require('../../src/app')

describe('Middleware Credentials', () => {
  it('Deve validar se não foi enviado no header a chave credentials', async () => {
    const {
      status,
      body: { message }
    } = await request(app).get('/auth/v1/token')

    expect(status).toBe(400)
    expect(message).toEqual('Credentials missing')
  })

  it('Deve retornar um erro 400 se a credentials não estiver no formato esperado - client:clientId:clientSecret', async () => {
    const response = await request(app)
      .get('/auth/v1/token')
      .set(
        'credentials',
        'bWdtQXBpOjA2ZGQ1NjFjMzU4ODA0OTBkMDhjNDUyYjQ1ZDVmNDgz'
      )
    expect(response.status).toBe(400)
    expect(response.body.message).toEqual('Credentials malformatted')
  })

  it('Deve validar se foi enviado um client, clientId e clientSecret existente', async () => {
    const response = await request(app)
      .get('/auth/v1/token')
      .set(
        'credentials',
        'bWdtQXBpOjA2ZGQ1NjFjMzU4ODA0OTBkMDhjNDUyYjQ1ZDVmNDgzOmNsaWVudFNlY3JldEVycmFkbw=='
      )

    expect(response.status).toBe(400)
    expect(response.body.message).toEqual('Credentials invalid')
  })

  it('Deve validar se foi enviado um client, clientId e clientSecret existente', async () => {
    const response = await request(app)
      .get('/auth/v1/token')
      .set(
        'credentials',
        'bWdtQXBpOjA2ZGQ1NjFjMzU4ODA0OTBkMDhjNDUyYjQ1ZDVmNDgzOmFmNjgzMDZkNTg4ZWU4ZWIyODlmMzgwNWRjNzg3NmU5'
      )

    expect(response.status).toBe(200)
    expect(response.body.expiresIn).not.toBeUndefined()
    expect(response.body.token).not.toBeUndefined()
  })
})
