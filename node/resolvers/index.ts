import { queries as geolocationQueries } from './geolocation'

export const resolvers = {
  Query: {
    ...geolocationQueries,
  },
}
