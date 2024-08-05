import { type NextFunction, type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CustomError, CustomResponse } from '../middleware';
import { type LoginRequest, type RegisterRequest } from '../models/auth';
import { AuthService } from '../services/auth.service';

export const AuthController = {
    async login(request: Request, response: Response, next: NextFunction) {
        try {
          const token = await AuthService.login(request.body as LoginRequest);
          const result = new CustomResponse(StatusCodes.OK, 'Login success', token);
    
          return response.status(StatusCodes.OK).json(result.toJSON());
        } catch (error: any) {
          return next(error);
        }
    },
    
      async register(request: Request, response: Response, next: NextFunction) {
        try {
          const account = await AuthService.register(
            request.body as RegisterRequest,
          );
    
          const serializedAccount = JSON.parse(
            JSON.stringify(account, (key, value) =>
              typeof value === 'bigint' ? value.toString() : value,
            ),
          );
    
          const result = new CustomResponse(
            StatusCodes.CREATED,
            'Register success',
            serializedAccount,
          );
    
          return response.status(StatusCodes.CREATED).json(result.toJSON());
        } catch (error: any) {
          return next(error);
        }
      },
    
    //   async me(request: Request, response: Response, next: NextFunction) {
    //     try {
    //       const requestToken: string = request.headers['authorization'];
    
    //       if (!requestToken) {
    //         throw new CustomError(StatusCodes.UNAUTHORIZED, 'token required');
    //       }
    
    //       const token = requestToken.split(' ');
    
    //       if (!token[1]) {
    //         throw new CustomError(StatusCodes.UNAUTHORIZED, 'token required');
    //       }
    
    //       const userData = await AuthService.selfData(token[1]);
    
    //       const result = new CustomResponse(
    //         StatusCodes.OK,
    //         'Success get Me',
    //         userData,
    //       );
    
    //       return response.status(StatusCodes.OK).json(result.toJSON());
    //     } catch (error: any) {
    //       return next(error);
    //     }
    //   },
}