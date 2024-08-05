import { PrismaClient } from '@prisma/client';
import * as bcryptjs from 'bcryptjs';
import { recipes } from './data/recipe.data';

const prisma = new PrismaClient();

const salt = bcryptjs.genSaltSync(12);

async function main() {
    for (const recipeData of recipes) {
      const recipe = await prisma.recipes.create({
        data: recipeData,
      })
    //   console.log(`Created recipe with id: ${recipe.id}`)
    }
  }
  
  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })