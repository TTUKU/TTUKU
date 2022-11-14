export enum ServerStatus {
  Online,
  Offline,
}

export interface Server {
  url: string
  name: string
  status: ServerStatus
}
