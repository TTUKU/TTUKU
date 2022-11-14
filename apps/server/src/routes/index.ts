import { FastifyPluginAsync } from 'fastify'
import { apiRoutes } from './api/index.js'

export const routes: FastifyPluginAsync = async (server) => {
  await server.register(apiRoutes, { prefix: '/api' })
}
