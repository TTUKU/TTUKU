import { FastifyPluginAsync } from 'fastify'
import { nodes } from '~/config.js'
import { Server, ServerStatus } from '@ttuku/types'

export const nodesRoutes: FastifyPluginAsync = async (server) => {
  server.get('/nodes', (): Server[] =>
    nodes.map((x) => ({
      name: x.name,
      url: x.url,
      status: ServerStatus.Offline,
    }))
  )
}
