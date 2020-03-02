import { ExternalClient, InstanceOptions, IOContext } from "@vtex/api";

export class PostalCode extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super("https://portal.vtexcommercestable.com.br/api/", context, options);
  }

  public getAddressFromPostalCode = (
    postalCode: string,
    countryCode: string
  ) => {
    console.log(postalCode, countryCode);
    // const x = this.http.get(
    //   `checkout/pub/postal-code/${countryCode}/${postalCode}`,
    //   {
    //     metric: "checkout-autocomplete-address-based-on-postal-code",
    //     timeout: 3000
    //   }
    // );
    return {
      city: "Rosario"
    };
  };
}
