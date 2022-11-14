import fastify from 'fastify'
import { config } from '~/config.js'
import { routes } from './routes/index.js'

const server = fastify()

await server.register(routes)

console.log(
  'Listening on',
  await server.listen({
    host: '0.0.0.0',
    port: config.port,
  })
)
