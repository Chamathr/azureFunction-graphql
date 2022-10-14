import { ApolloServer, gql } from "apollo-server-azure-functions";

export class Schema {
    // Construct a schema, using GraphQL schema language
    static getSchemas() {
        const typeDefs = gql`
        type Query {
          getUserData: [User],
          getUserDataById(id: Int!): User
        }

        type Mutation {
            createUserData(name: String, email: String, age: Int): User
        }

        type User {
          id: Int,
          email: String,
          name: String,
          age: Int
        }
        `;

        return typeDefs
    }

}