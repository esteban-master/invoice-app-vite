import { rest } from 'msw'

export const mockData = [
  { id: 1, name: 'Hola' },
  { id: 2, name: 'Hola 2' }
]

export const delay = 0

const handlers = [
  rest.get(`http://localhost:3001/posts`, (req, res, ctx) => {
    return res(ctx.delay(delay), ctx.status(200), ctx.json(mockData))
  }),
  rest.post(`http://localhost:3001/login`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'Welcome desde test',
        user: JSON.parse(req.body as string)
      })
    )
  })
]

export { handlers }
