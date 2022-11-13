import fastify from 'fastify'
import { config } from '~/config.js'

const server = fastify()

console.log(
  'Listening on',
  await server.listen({
    host: '0.0.0.0',
    port: config.port,
  })
)
