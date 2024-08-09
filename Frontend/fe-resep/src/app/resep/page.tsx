'use client';
import React from 'react';
import {recipes} from '@/contents/DummyReceipt'
import { Badge, Button, Card, CardBody, CardFooter, Chip, Input } from '@nextui-org/react';
import Layout from '@/layout/Layout';
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { useRouter } from 'next/navigation';
import { FaFire } from "react-icons/fa6";



export default function ResepPage() {
    const router = useRouter();

  const handleCardClick = (recipeName: string) => {
    router.push(`/resep/${encodeURIComponent(recipeName)}`);
  };

  return (
    <Layout withNavbar={true} withFooter={true}>
    <div className="h-full bg-first">
        <section className="relative h-[80vh] bg-gray-800">
        {/* Background Image */}
        <div className="absolute inset-0">
            <Image
            src="/image/resep/backgroundHero.jpg" // Ganti dengan URL gambar Anda
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            priority
            />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Content */}
        <div className="relative flex items-center justify-center h-full">
            <div className="text-center text-white p-4">
            <h1 className="text-4xl font-bold mb-4 ">Welcome to Savorit</h1>
            <p className="text-lg mb-6">Find the best recipes and more</p>
            <Input
                label="Search"
                isClearable
                radius="lg"
                classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                    "bg-transparent",
                    "text-black/90",
                    "placeholder:text-default-700/50 ",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                    "shadow-xl",
                    "bg-default-200/50",
                    "backdrop-blur-xl",
                    "backdrop-saturate-200",
                    "hover:bg-default-200/60",
                    "group-data-[focus=true]:bg-default-200/50",
                    "!cursor-text",
                ],
                }}
                placeholder="Type to search..."
                startContent={
                <CiSearch className="text-black/50 mb-0.5 text-slate-400 pointer-events-none flex-shrink-0" />
                }
                />
            </div>
        </div>
        </section>
        
        <div className='flex flex-row mt-8 pb-8'>
            <div className='mr-4 ml-4'>     
                <Chip onClose={() => console.log("close")}>Sortir</Chip>
            </div>
            <div className='flex flex-col pr-8'>
            <div className="flex gap-4">
                <Chip onClose={() => console.log("close")} variant="bordered">Budget</Chip>
                <Chip onClose={() => console.log("close")} variant="bordered">Porsi</Chip>
            </div>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 mt-8">
                {recipes.map((recipe, index) => (
                    <Card shadow="sm" key={index} isPressable onPress={() => handleCardClick(recipe.recipe_name)}>
                    <CardBody className="overflow-visible p-0">
                    <img
                        className="w-full object-cover h-[200px]"
                        src={recipe.picture}
                    />
                    </CardBody>
                    <CardFooter className="text-small flex flex-col items-start">
                    <b>{recipe.recipe_name}</b>
                    <p className="text-default-500 flex items-center"><FaFire className='mr-2'/>{recipe.calories}</p>
                    </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

