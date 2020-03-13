interface PostalCodeQueryArgs {
  postalCode: string
  countryCode: string
}

export const queries = {
  getAddressFromPostalCode: async (
    _: unknown,
    args: PostalCodeQueryArgs,
    ctx: Context
  ): Promise<Address> => {
    const { clients: { postalCode } } = ctx
    const { postalCode, countryCode } = args

    return postalCode.getAddressFromPostalCode(postalCode, countryCode)
  },
}
