import { IOClients } from '@vtex/api'

import { GoogleGeolocation } from './GoogleGeolocation'

export class Clients extends IOClients {
  public get googleGeolocation() {
    return this.getOrSet('googleGeolocation', GoogleGeolocation)
  }
}
