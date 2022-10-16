import { UserInterface } from './interface.handler'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export class Database {

    async getUser() {
        const allUsers = await prisma.user.findMany()
        return allUsers
    }

    async createUser(userData: UserInterface) {
        const response = await prisma.user.create({
            data: userData
        })

        return response
    }

    async getUserById(userId: number) {
        const response = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })
        return response
    }

    async deleteUser(userId: number) {
        const response = await prisma.user.delete({
            where: {
                id: userId
            }
        })
        return response
    }

    async updateUser(userId: number, userName: string, userEmail: string, userAge: number) {
        const response = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                name: userName,
                email: userEmail,
                age: userAge
            }
        })
        return response
    }
}