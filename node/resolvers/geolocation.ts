export const queries = {
  reverseGeocode: async (_: any, args: any, ctx: any): Promise<any> => {
    const { clients } = ctx;

    const ans = await clients.googleGeolocation.getCountry(
      args.lat,
      args.lng,
      args.apiKey
    );

    return ans.results[0];
  }
};
