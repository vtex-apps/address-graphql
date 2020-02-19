import { IOClients } from "@vtex/api";

import { IPCountryClient } from "./IPCountryClient";

export class Clients extends IOClients {
  public get IPCountry() {
    return this.getOrSet("IPCountry", IPCountryClient);
  }
}
