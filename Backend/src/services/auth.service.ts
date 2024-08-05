import { type RegisterRequest, type LoginRequest } from "../models/auth";
import { StatusCodes } from 'http-status-codes';
import { Accounts } from "../repositories/account.repository";
import { CustomError } from "../middleware";
import bcrypt from 'bcryptjs';
import db from "../config/connectDB";

export const AuthService = {
    async register(request: RegisterRequest){
        try{
            const findEmail = await Accounts.findAccountByEmail(request.email);

            if(findEmail){
                throw new CustomError(StatusCodes.BAD_REQUEST, 'Email already exist');
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword: string = await bcrypt.hash(request.password, salt);

            const acc = await Accounts.createAccount(
                request.first_name,
                request.last_name,
                request.email,
                hashedPassword,
            )

            const account = {
                first_name: request.first_name,
                last_name: request.last_name,
                email: request.email
            }

            return account;
        } catch (error) {
            throw error;
        }

    },

    async login(request: LoginRequest) {
        const user = await db.accounts.findUnique({
          where: {
            email: request.email,
          },
        });
    
        if (!user) {
          throw new CustomError(StatusCodes.NOT_FOUND, 'Credentials not found');
        }
    
        // if (!user.is_email_verified) {
        //   throw new CustomError(StatusCodes.FORBIDDEN, 'Account not verified');
        // }
    
        const isPasswordMatch = bcrypt.compareSync(request.password, user.password);
    
        if (!isPasswordMatch) {
          throw new CustomError(StatusCodes.UNAUTHORIZED, 'Invalid credentials');
        }
    
        const accountDetails = await Accounts.findAccountByAccountId(
          user.account_id,
        );
    
        // const payload = {
        //   id: user.account_id,
        //   email: user.email,
        //   role: user.role,
        //   isUserLoggedIn: true,
        // };
    
        // const token = generateAccessToken(payload);
    
        // return {
        //   account_id: accountDetails.account_id,
        //   nama: accountDetails.name,
        //   email: user.email,
        // //   token,
        // };

        return accountDetails;
      },
}