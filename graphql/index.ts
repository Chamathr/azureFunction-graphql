import { ApolloServer, gql} from "apollo-server-azure-functions";
import { Schema } from "./handlers/schema.handler";
import { Resolver } from "./handlers/resolver.handler";

// Construct a schema, using GraphQL schema language
const typeDefs = Schema.getSchemas()

// Provide resolver functions for your schema fields
const resolvers = Resolver.getResolvers()

// @ts-ignore
const server = new ApolloServer({
  typeDefs,
  resolvers,
  debug: true
});

export default server.createHandler({
  cors: {
    origin: ['*', "https://studio.apollographql.com"],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["access-control-allow-credentials", "access-control-allow-origin", "content-type"]
  },
});