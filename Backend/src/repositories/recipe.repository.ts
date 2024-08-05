import { when } from 'joi';
import prisma from '../config/prisma';

export const Recipes = {
    async findRecipeByName(recipe_name: string){
        return await prisma.recipes.findFirst({
            where: {
                recipe_name
            }
        })
    },

    async getAllRecipes() {
        return await prisma.recipes.findMany();
    },
}

