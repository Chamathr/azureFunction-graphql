import { Database } from "./data.handler";

export class Resolver {

    static getResolvers() {

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
                createUserData: (_: any, { userCreateInput }) => {
                    return userData.createUser({
                        name: userCreateInput.name,
                        email: userCreateInput.email,
                        age: userCreateInput.age
                    })
                },

                deleteUserData: (_: any, { id }) => {
                    return userData.deleteUser(id)
                },

                updateUserData: (_: any, { userUpdateInput }) => {
                    return userData.updateUser(userUpdateInput.id, userUpdateInput.name, userUpdateInput.email, userUpdateInput.age)
                }
            }
        };

        return resolvers
    }
}