import express from 'express';
const router = express.Router();

import AuthRoutes from './auth.router';
import RecipeRoutes from './recipe.router'

router.use('/auth', AuthRoutes);
router.use('/resep', RecipeRoutes);

export default router;

