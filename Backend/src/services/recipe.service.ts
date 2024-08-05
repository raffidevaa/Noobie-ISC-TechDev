import { StatusCodes } from 'http-status-codes';
import { Recipes } from "../repositories/recipe.repository";
import { CustomError } from "../middleware";

export const RecipeService = {
    async getRecipeByName(recipe_name: string){
        try {
            const fetching = await Recipes.findRecipeByName(recipe_name);
            // console.log(fetching)

            if (!fetching) {
            throw new CustomError(StatusCodes.BAD_REQUEST, 'Recipe not found');
            }

            return fetching;
        } catch (error) {
            throw error;
        }
    },

    async getAllRecipe() {
        const recipes = await Recipes.getAllRecipes();
    
        if (!recipes || recipes.length === 0) {
          throw new CustomError(StatusCodes.NOT_FOUND, 'No Recipes');
        }
    
        return recipes.map((recipe: any) => ({
            recipe_id: recipe.recipe_id.toString(),
            recipe_name: recipe.recipe_name,
            calories: recipe.calories,
            picture: recipe.picture,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions,
            prep_time: recipe.prep_time,
            cook_time: recipe.cook_time
        }));
    },
}