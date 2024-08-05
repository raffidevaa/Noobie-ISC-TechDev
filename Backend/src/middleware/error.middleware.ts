import { type NextFunction, type Request, type Response } from 'express';

export class CustomError extends Error {
    code: number;
  
    constructor(code: number, message: string) {
      super(message);
      this.code = code;
      this.name = this.constructor.name;
      Error.captureStackTrace(this, this.constructor);
    }
  }