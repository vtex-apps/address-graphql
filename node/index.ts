import { Service, RecorderState, ParamsContext } from "@vtex/api";

const DEFAULT_TIMEOUT_MS = 10 * 1000;

import { Clients } from "./clients";
import { resolvers } from "./resolvers";

export default new Service<Clients, RecorderState, ParamsContext>({
  clients: {
    implementation: Clients,
    options: {
      default: {
        timeout: DEFAULT_TIMEOUT_MS
      }
    }
  },
  graphql: {
    resolvers
  }
});
