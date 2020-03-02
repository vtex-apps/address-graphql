const processAddress = x => x;

export const queries = {
  getAddressFromPostalCode: async (
    _: any,
    args: any,
    ctx: any
  ): Promise<any> => {
    const { clients } = ctx;
    const { postalCode, countryCode } = args;

    const address = await clients.postalCode.getAddressFromPostalCode(
      postalCode,
      countryCode
    );

    return processAddress(address);
  }
};
