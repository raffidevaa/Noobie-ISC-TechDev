import prisma from '../config/prisma';

export const Accounts = {
    async createAccount(first_name: string, last_name: string, email: string, password: string){
        return await prisma.accounts.create({
            data: {
                first_name,
                last_name,
                email,
                password
            }
        })
    },

    // async createAccount(email: string, password: string){
    //     return await prisma.accounts.create({
    //         data: {
    //             email,
    //             password
    //         }
    //     })
    // },

    async findAccountByEmail(email: string){
        return await prisma.accounts.findUnique({
            where: {
                email
            }
        })
    },

    async findAccountByAccountId(account_id: string) {
        return await prisma.accounts.findUnique({
          where: {
            account_id,
          },
        });
      },
}