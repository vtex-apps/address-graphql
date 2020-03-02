import { JanusClient, InstanceOptions, IOContext } from "@vtex/api";

export class PostalCode extends JanusClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(context, options);
  }

  public getAddressFromPostalCode = (
    postalCode: string,
    countryCode: string
  ) => {
    return this.http.get(
      `/api/checkout/pub/postal-code/${countryCode}/${postalCode}`,
      {
        metric: "checkout-autocomplete-address-based-on-postal-code",
        timeout: 3000
      }
    );
  };
}
