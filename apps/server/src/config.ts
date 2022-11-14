import type ConfigType from '../config.example.json'
import type NodeType from '../nodes.example.json'

export type Config = typeof ConfigType

export type Node = typeof NodeType[0]

import config from '../config.json' assert { type: 'json' }
import nodes from '../nodes.json' assert { type: 'json' }

const configValue = config as Config
const nodesValue = nodes as Node[]

export { configValue as config, nodesValue as nodes }
