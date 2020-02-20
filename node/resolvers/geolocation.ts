export const queries = {
  reverseGeocode: async (_: any, args: any, ctx: any): Promise<any> => {
    const { clients } = ctx;
    const { lat, lng, apiKey } = args;

    const ans = await clients.googleGeolocation.reverseGeocode(
      lat,
      lng,
      apiKey
    );

    return { city: ans.results[0].formatted_address };
  }
};
