import {
  ExternalClient,
  InstanceOptions,
  IOContext,
  IOResponse
} from "@vtex/api";

export class ReverseGeocoderClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super("https://maps.googleapis.com/maps/api/", context, options);
  }

  public getCountry = (lat: string, lng: string, apiKey: string) => {
    return this.http.get(`geocode/json?latlng=${lat},${lng}&key=${apiKey}`, {
      metric: "reverse-geocode-country",
      timeout: 3000
    });
  };
}
