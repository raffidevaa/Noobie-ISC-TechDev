import { type Request, type Response, type NextFunction } from 'express';
import type Joi from 'joi';

import { CustomError } from './error.middleware';

// export const validate =
//   (schema: Joi.Schema) =>
//   (request: Request, response: Response, next: NextFunction) => {
//     const { error }: { error: Joi.ValidationError } = schema.validate(
//       request.body,
//       { abortEarly: false },
//     );
//     const isValid = error == null;

//     if (isValid) {
//       next();
//     } else {
//       const { details } = error;
//       const message = details.map(index => index.message).join(',');

//       return next(new CustomError(422, message));
//     }
//   };

export const validate =
  (schema: Joi.Schema) =>
  (request: Request, response: Response, next: NextFunction) => {
    // Validate the request body against the schema
    const result = schema.validate(request.body, { abortEarly: false });
    
    // Check if there are validation errors
    if (result.error) {
      // Map over the error details and join them into a single message
      const { details } = result.error;
      const message = details.map(detail => detail.message).join(', ');
      
      // Pass the error to the next middleware
      return next(new CustomError(422, message));
    }
    
    // If validation passed, continue to the next middleware
    next();
  };