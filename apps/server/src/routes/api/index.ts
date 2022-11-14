import { FastifyPluginAsync } from 'fastify'
import { nodesRoutes } from './nodes.js'

export const apiRoutes: FastifyPluginAsync = async (server) => {
  server.get('/', () => ({ hello: 'world' }))

  await server.register(nodesRoutes)
}
