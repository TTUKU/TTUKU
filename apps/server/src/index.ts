import fastify from 'fastify'

const server = fastify()

console.log('Listening on', await server.listen({
  host: '0.0.0.0',
  port: 3000
}))
