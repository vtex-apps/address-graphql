import { IOClients } from "@vtex/api";

import { GoogleGeolocation } from "./GoogleGeolation";

export class Clients extends IOClients {
  public get googleGeolocation() {
    return this.getOrSet("googleGeolocation", GoogleGeolocation);
  }
}
