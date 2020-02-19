import {
  ExternalClient,
  InstanceOptions,
  IOContext,
  IOResponse
} from "@vtex/api";

export class IPCountryClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(" http://api.hostip.info", context, options);
  }

  public getCountry(ip: string) {
    return this.http.get(`get_html.php?${ip}`, {
      metric: "get-country-by-ip",
      timeout: 3000
    });
  }
}
