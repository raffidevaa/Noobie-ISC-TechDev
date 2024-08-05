import express from "express";
import { AuthController } from "../controller/auth.controller";
import { registerValidation, loginSchema } from "../validator/auth";
import { validate } from "../middleware/validator.middleware";

const router = express.Router();

router.post('/register', validate(registerValidation), AuthController.register);
router.post('/login', validate(loginSchema), AuthController.login);

export default router;