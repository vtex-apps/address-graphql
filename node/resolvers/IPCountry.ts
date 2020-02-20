export const queries = {
  locationData: async (_: any, __: any, ctx: any): Promise<any> => {
    const { headers } = ctx;
    console.log(ctx);

    return {
      ip: headers["x-forwarded-for"].split(",")[0]
    };
  },
  googleStuff: async (_: any, args: any, ctx: any): Promise<any> => {
    const { clients } = ctx;

    const ans = await clients.reverseGeocode.getCountry(
      args.lat,
      args.lng,
      args.apiKey
    );

    return ans.results[0];
  }
};
