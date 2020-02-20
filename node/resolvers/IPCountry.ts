export const queries = {
  locationData: async (_: any, __: any, ctx: any): Promise<any> => {
    const { headers } = ctx;
    console.log(ctx);

    return {
      ip: headers["x-forwarded-for"].split(",")[0]
    };
  },
  googleStuff: async (_: any, __: any, ctx: any): Promise<any> => {
    const { clients } = ctx;

    const ans = await clients.reverseGeocode.getCountry(
      "40.714224",
      "-73.961452",
      "IF THERE WERE A VALID API KEY HERE THIS WOULD WORK, BELIEVE"
    );

    return ans.results[0];
  }
};
