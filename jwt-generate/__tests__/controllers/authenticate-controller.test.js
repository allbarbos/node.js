const request = require('supertest')
const app = require('../../src/app')

describe('GET Token', () => {
  it('Deve retornar um token com o tempo de expiração no body', async () => {
    const response = await request(app)
      .get('/auth/v1/token')
      .set(
        'credentials',
        'bWdtQXBpOjA2ZGQ1NjFjMzU4ODA0OTBkMDhjNDUyYjQ1ZDVmNDgzOmFmNjgzMDZkNTg4ZWU4ZWIyODlmMzgwNWRjNzg3NmU5'
      )

    expect(response.body).toHaveProperty('token')
    expect(response.body).toHaveProperty('expiresIn')
  })

  it('Deve retornar um token JWT válido', async () => {
    const response = await request(app)
      .get('/auth/v1/token')
      .set(
        'credentials',
        'bWdtQXBpOjA2ZGQ1NjFjMzU4ODA0OTBkMDhjNDUyYjQ1ZDVmNDgzOmFmNjgzMDZkNTg4ZWU4ZWIyODlmMzgwNWRjNzg3NmU5'
      )

    const { token } = response.body
    const len = token.split('.').length

    expect(len).toBe(3)
  })
})
