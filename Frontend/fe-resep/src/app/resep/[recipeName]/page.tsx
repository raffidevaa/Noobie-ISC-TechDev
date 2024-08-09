'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { recipes } from '@/contents/DummyReceipt';
import Layout from '@/layout/Layout';

export default function RecipeDetailPage() {
    const params = useParams();
    const recipeName = decodeURIComponent(Array.isArray(params.recipeName) ? params.recipeName[0] : params.recipeName);

    const recipe = recipes.find((r) => r.recipe_name === recipeName);

    if (!recipe) {
        return (
            <Layout withNavbar={true} withFooter={true}>
                <div className="h-full bg-first flex items-center justify-center">
                    <h1 className="text-4xl font-bold text-red-500">Recipe not found</h1>
                </div>
            </Layout>
        );
    }

    return (
        <Layout withNavbar={true} withFooter={true}>
            <div className="h-full bg-first p-8">
                <h1 className="text-4xl font-bold mb-4">{recipe.recipe_name}</h1>
                <img
                    src={recipe.picture}
                    alt={recipe.recipe_name}
                    className="w-full max-w-lg object-cover mb-4"
                />
                <p className="text-lg">{recipe.calories}</p>
                {/* Add more details about the recipe as needed */}
            </div>
        </Layout>
    );
}
