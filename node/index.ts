import {
  Service,
  IOClients,
  JanusClient,
  IOContext,
  InstanceOptions
} from "@vtex/api";

const DEFAULT_TIMEOUT_MS = 10 * 1000;
class SellerClient extends JanusClient {
  constructor(ctx: IOContext, opts?: InstanceOptions) {
    super(ctx, {
      ...opts,
      headers: {
        VtexIdclientAutCookie: ctx.adminUserAuthToken || ctx.authToken
      }
    });
  }

  public getSeller = (id: string) =>
    this.http.get(`/api/seller-register/pvt/seller/${id}`);
}

export class Clients extends IOClients {
  get seller() {
    return this.getOrSet("seller", SellerClient);
  }
}

export default new Service({
  clients: {
    implementation: Clients,
    options: {
      default: {
        timeout: DEFAULT_TIMEOUT_MS
      }
    }
  },
  graphql: {
    resolvers: {
      Query: {
        seller: (_, { id }: { id: string }, ctx) =>
          ctx.clients.seller.getSeller(id)
      }
    }
  }
});
