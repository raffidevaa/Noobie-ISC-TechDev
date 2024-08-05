-- CreateTable
CREATE TABLE "Recipes" (
    "recipe_id" SERIAL NOT NULL,
    "recipe_name" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "prep_time" TEXT NOT NULL,
    "cook_time" TEXT NOT NULL,

    CONSTRAINT "Recipes_pkey" PRIMARY KEY ("recipe_id")
);
