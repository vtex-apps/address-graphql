export const queries = {
  getAddressFromPostalCode: async (
    _: any,
    args: any,
    ctx: any
  ): Promise<any> => {
    const { clients } = ctx;
    const { postalCode, countryCode } = args;
    console.log(clients, postalCode, countryCode);
    return {
      city: "San Nicolas"
    };
    // return await clients.postalCode.getAddressFromPostalCode(
    //   postalCode,
    //   countryCode
    // );
  }
};
