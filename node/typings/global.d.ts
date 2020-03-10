import { ServiceContext } from '@vtex/api'

import { Clients } from '../clients'

declare global {
  type Context = ServiceContext & {
    clients: Clients
  }

  enum AddressType {
    residential,
    commercial,
    inStore,
    giftRegistry,
    pickup,
    search,
  }

  interface Address {
    addressId: string
    addressType: AddressType
    city: string
    complement: string
    country: Strinstring
    geoCoordinates: number[]
    neighborhood: string
    number: string
    postalCode: string
    receiverName: string
    reference: string
    state: string
    street: string
  }

  type AddressFields = keyof Address

  type AddressWithValidation = {
    [prop in AddressFields]: {
      value: Address[prop]
      valid?: boolean
    }
  }

  interface Rule {
    valueIn: 'long_name' | 'short_name'
    types: string[]
    required?: boolean
    notApplicable?: boolean
    handler?: (
      address: Address,
      googleAddress: google.maps.GeocoderResult
    ) => Address
  }

  type GeolocationComponents =
    | 'postalCode'
    | 'street'
    | 'neighborhood'
    | 'state'
    | 'city'
    | 'number'

  type GeolocationRules = {
    [component in GeolocationComponents]?: Rule
  }

  interface Rules {
    geolocation: GeolocationRules
  }
}
