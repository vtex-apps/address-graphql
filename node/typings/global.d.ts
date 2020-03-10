import { ServiceContext } from '@vtex/api'

import { Clients } from '../clients'

declare global {
  type Context = ServiceContext & {
    clients: Clients
  }
}

export {}
