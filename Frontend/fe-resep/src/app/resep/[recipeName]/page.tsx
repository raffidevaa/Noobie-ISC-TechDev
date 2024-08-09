'use client';
import React from 'react';
import Layout from '@/layout/Layout';
import { useParams } from 'next/navigation';
import { recipes } from '@/contents/DummyReceipt';

export default function RecipeDetailPage() {
    const params = useParams();
    const recipeName = decodeURIComponent(Array.isArray(params.recipeName) ? params.recipeName[0] : params.recipeName);

    const recipe = recipes.find((r) => r.recipe_name === recipeName);

    if (!recipe) {
        return (
            <Layout withNavbar={true} withFooter={true}>
                <div className="h-screen bg-first flex items-center justify-center">
                    <h1 className="text-4xl font-bold text-red-500">Recipe not found</h1>
                </div>
            </Layout>
        );
    }

    return (
        <Layout withNavbar={true} withFooter={true}>
            <div className="bg-first p-8 mt-16">
                <div className="max-w-4xl mx-auto">
                    <div className='flex flex-row'>
                    <div className="text-center w-full flex flex-col">
                        <div className='flex'>
                        <img
                            src={recipe.picture}
                            alt={recipe.recipe_name}
                            className="w-72 h-72 mx-auto object-cover rounded-lg"
                        />
                        </div>
                        <div className='flex mt-2'>
                        <img
                            src={recipe.picture}
                            alt={recipe.recipe_name}
                            className="w-36 h-36 ml-auto  object-cover rounded-lg"
                        />
                        <img
                            src={recipe.picture}
                            alt={recipe.recipe_name}
                            className="w-36 h-36 mr-auto object-cover rounded-lg"
                        />
                        </div>
                    </div>
                    <div>
                    <div className="text-center">
                        
                        <h1 className="text-3xl font-bold mt-4 text-fourth">{recipe.recipe_name}</h1>
                        <div className="flex justify-center items-center mt-2">
                            <div className="text-yellow-500 flex">
                                <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                            </div>
                            <p className="ml-2 text-gray-700 text-fourth">(69)</p>
                        </div>
                        <p className="mt-4 text-lg text-left text-fourth">{recipe.description}</p>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-fourth">Bahan yang perlu disiapkan</h2>
                        <ol className="list-decimal list-inside bg-third p-4 mt-2 rounded">
                            {recipe.ingredients.split(',').map((ingredient, index) => (
                                <li key={index} className="py-1 text-fourth">{ingredient}</li>
                            ))}
                        </ol>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-fourth">Cara membuat</h2>
                        <ol className="list-decimal list-inside bg-third p-4 mt-2 rounded">
                            {recipe.instructions.split('\n').map((instruction, index) => (
                                <li key={index} className="py-1 text-fourth">{instruction}</li>
                            ))}
                        </ol>
                    </div>
                    </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-fourth">Apa kata mereka</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            <div className="bg-[#FFFFFF] p-4 rounded shadow">
                                <p className='text-fourth'>Naufal Nawwaf</p>
                                <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
                                <p className="mt-2 text-sm text-fourth">Nguwowur loh ya. Roti yang aseli uwenakk banget cilek. Kuyak roti to stasiun lempuyangan.</p>
                            </div>
                            <div className="bg-[#FFFFFF] p-4 rounded shadow">
                                <p className='text-fourth'>Kasyiful Kabor</p>
                                <p className="text-yellow-500">⭐⭐⭐⭐</p>
                                <p className="mt-2 text-sm text-fourth">Very recommended rek. Gak kalah karo punya Mas Falak rek. Tapi sayang kurang minyak.</p>
                            </div>
                            <div className="bg-[#FFFFFF] p-4 rounded shadow">
                                <p className='text-fourth'>Frieren bin Fern</p>
                                <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
                                <p className="mt-2 text-sm text-fourth">Bintang lima</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-fourth">Resep serupa</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                            {recipes.map((similarRecipe, index) => (
                                <div key={index} className="bg-[#FFFFFF] p-4 rounded shadow">
                                    <img src={similarRecipe.picture} alt={similarRecipe.recipe_name} className="w-full h-32 object-cover rounded mb-2"/>
                                    <p className="text-sm font-semibold text-fourth">{similarRecipe.recipe_name}</p>
                                    <p className="text-yellow-500 text-fourth">⭐⭐⭐⭐⭐</p>
                                    <p className="text-sm text-fourth">{similarRecipe.calories}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
