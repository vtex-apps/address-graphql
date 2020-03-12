import { IOClients } from '@vtex/api'

import { GoogleGeolocation } from './GoogleGeolocation'
import { PostalCode } from './PostalCode'

export class Clients extends IOClients {
  public get googleGeolocation() {
    return this.getOrSet('googleGeolocation', GoogleGeolocation)
  }

  public get postalCode() {
    return this.getOrSet('postalCode', PostalCode)
  }
}
