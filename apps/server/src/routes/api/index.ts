import { FastifyPluginAsync } from 'fastify'
import { nodesRoutes } from './nodes.js'

export const apiRoutes: FastifyPluginAsync = async (server) => {
  server.get<{ Querystring: { name?: string } }>('/', (req) => ({
    message: `${req.query.name ?? 'kimu'} is babo`,
  }))

  await server.register(nodesRoutes)
}
