export enum ServerStatus {
  Online,
  Offline,
}

export interface Server {
  domain: string
  name: string
  status: ServerStatus
}
