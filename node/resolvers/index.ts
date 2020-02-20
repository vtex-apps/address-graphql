import { queries as GeolocationQueries } from "./geolocation";

export const resolvers = {
  Query: {
    ...GeolocationQueries
  }
};
