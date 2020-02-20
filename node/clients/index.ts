import { IOClients } from "@vtex/api";

import { IPCountryClient } from "./IPCountryClient";
import { ReverseGeocoderClient } from "./ReverseGeocoderClient";

export class Clients extends IOClients {
  public get IPCountry() {
    return this.getOrSet("IPCountry", IPCountryClient);
  }

  public get reverseGeocode() {
    return this.getOrSet("reverseGeocode", ReverseGeocoderClient);
  }
}
