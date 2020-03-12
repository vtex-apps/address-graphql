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
    const { clients } = ctx
    const { postalCode, countryCode } = args

    return clients.postalCode.getAddressFromPostalCode(postalCode, countryCode)
  },
}
