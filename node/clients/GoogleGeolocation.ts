import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'

export class GoogleGeolocation extends ExternalClient {
  private apiKey: string

  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://maps.googleapis.com/maps/api/', context, options)
    this.apiKey = context.settings.apiKey
  }

  public reverseGeocode = (lat: string, lng: string) => {
    return this.http.get(
      `geocode/json?latlng=${lat},${lng}&key=${this.apiKey}`,
      {
        metric: 'google-reverse-geocode-country',
        timeout: 3000,
      }
    )
  }
}
