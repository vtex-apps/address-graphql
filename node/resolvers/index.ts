import { queries as IPCountryQueries } from "./IPCountry";

export const resolvers = {
  Query: {
    ...IPCountryQueries
  }
};
