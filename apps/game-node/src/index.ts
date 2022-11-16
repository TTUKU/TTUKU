import fastify from 'fastify'
import { config, port } from './config.js'
import { initWS } from './ws/index.js'
import websocket from '@fastify/websocket'
import cors from '@fastify/cors'

const server = fastify()

await server.register(cors, { origin: ['*'] })

await server.register(websocket)

await server.register(initWS)

console.log(
  'Listening on',
  await server.listen({
    host: config.host,
    port: port,
  })
)
