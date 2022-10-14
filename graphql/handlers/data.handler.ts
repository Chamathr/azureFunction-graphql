import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class Database {
    async getUser() {
        const allUsers = await prisma.user.findMany()
        return allUsers
    }

    async createUser(userData: any) {
        const response = await prisma.user.create({
            data: userData
        })

        return response
    }
}