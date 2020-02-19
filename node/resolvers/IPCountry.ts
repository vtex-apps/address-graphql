export const queries = {
  locationData: async (_: any, __: any, ctx: any): Promise<any> => {
    const { headers } = ctx;
    console.log(ctx);

    return {
      ip: headers["x-forwarded-for"].split(",")[0]
    };
  }
};
