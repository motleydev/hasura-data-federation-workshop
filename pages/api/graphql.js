import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "./_schemas";
import { resolvers } from "./_resolvers";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
