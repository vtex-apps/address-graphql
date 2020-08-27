import { queries as geolocationQueries } from './geolocation'
import { queries as postalCodeQueries } from './postalCode'
import { queries as searchQueries } from './search'

export const resolvers = {
  Query: {
    ...geolocationQueries,
    ...postalCodeQueries,
    ...searchQueries,
  },
}
