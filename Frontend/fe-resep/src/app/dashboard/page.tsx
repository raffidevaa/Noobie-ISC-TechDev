'use client';
import { recipes } from '@/contents/DummyReceipt';
import Layout from '@/layout/Layout';
import { Button, Link } from '@nextui-org/react';
import Image from 'next/image';

export default function Dashboard() {
  return (
    <Layout withNavbar={true} withFooter={true}>
    <div className="bg-[#FAEBC9] min-h-screen p-8 mt-16">
            <div className="flex">
                <div className="w-1/4 bg-[#FFF8E7] p-4 rounded">
                    <div className="text-center mb-4">
                        <Image src="/image/about/fawwaz.jpg" width={100} height={100} alt="Profile" className="rounded-full mx-auto" />
                    </div>
                    <ul className="text-left text-lg flex flex-col">
                        <p className="mt-2 text-xl font-semibold text-fourth">Naufal Maula Nabil</p>
                        <Link href='/dashboard/profile'><li className="my-2 text-fourth hover:underline">Profil</li></Link>
                        <Link href='/dashboard'><li className="my-2 text-fourth hover:underline">Feeds</li></Link>
                        <Link href='/dashboard/favorite'><li className="my-2 text-fourth hover:underline">Favorit</li></Link>
                    </ul>
                </div>
                <div className="w-3/4 ml-8">
                    <div className="flex flex-col items-start">
                        <h1 className="text-3xl font-bold text-fourth">Feeds Resep ({recipes.length})</h1>
                        <Button className="bg-second w-full text-white py-2 px-4 mt-4 rounded">+ Buat Resep</Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                        {recipes.map((recipe, index) => (
                            <div key={index} className="bg-[#FFFF] p-4 rounded shadow">
                                <Image src={recipe.picture} width={200} height={200} alt={recipe.recipe_name} className="w-full h-32 object-cover rounded mb-2"/>
                                <p className="text-sm font-semibold text-fourth">{recipe.recipe_name}</p>
                                <p className="text-sm text-fourth">{recipe.calories}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
            </Layout>
        );
      }
      