import fastify from 'fastify'
import { config, port } from './config.js'

const server = fastify()

console.log(
  'Listening on',
  await server.listen({
    host: config.host,
    port: port,
  })
)
