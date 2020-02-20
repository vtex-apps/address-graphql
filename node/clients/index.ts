import { IOClients } from "@vtex/api";

import { ReverseGeocoderClient } from "./ReverseGeocoderClient";

export class Clients extends IOClients {
  public get reverseGeocode() {
    return this.getOrSet("reverseGeocode", ReverseGeocoderClient);
  }
}
