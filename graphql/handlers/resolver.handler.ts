import { MockData } from "./mockData";
import { Database } from "./data.handler";

export class Resolver {

    static getResolvers() {

        const data = new MockData()
        const userData = new Database()

        const resolvers = {
            Query: {
                getUserData: () => {
                    return userData.getUser()
                },

                getUserDataById: (_: any, { id, input }) => {
                    return userData.getUserById(id)
                },
            },

            Mutation: {
                createUserData: (_: any, { name, email, age }) => {
                    return userData.createUser({
                        name: name,
                        email: email,
                        age: age
                    })
                }
            }
        };

        return resolvers
    }
}