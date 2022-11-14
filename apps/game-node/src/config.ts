import type ConfigType from '../config.example.json'

export type Config = typeof ConfigType

import configData from '../config.json' assert { type: 'json' }

export const config: Config = configData

if (!process.env.PORT) throw new Error('environment variable PORT is not set')

const port = Number(process.env.PORT)

if (isNaN(port)) throw new Error('environment variable PORT is not a number')

export { port }
