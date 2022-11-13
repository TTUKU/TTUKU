import type ConfigType from '../config.example.json'

type Config = typeof ConfigType

import config from '../config.json' assert { type: 'json' }

const configValue = config as Config

export { configValue as config }
