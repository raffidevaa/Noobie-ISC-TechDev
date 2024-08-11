'use client';
import { recipes } from '@/contents/DummyReceipt';
import Layout from '@/layout/Layout';
import { Button, Card, Input, Link } from '@nextui-org/react';
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
                <div className="w-3/4 ml-8 z-0">
                    <div className="flex flex-col items-start">
                        <h1 className="text-3xl font-bold text-fourth">Profile</h1>
                    </div>
                    <Card className='p-12 bg-[#FFF8E7]'>
                    <Input
                      isReadOnly
                      type="text"
                      label="Nama"
                      variant="bordered"
                      defaultValue="Maulana Yusuf"
                      className="w-full mt-4"
                      labelPlacement="outside"
                    />
                    <Input
                      isReadOnly
                      type="text"
                      label="Jenis Kelamin"
                      variant="bordered"
                      defaultValue="Laki Laki"
                      className="w-full mt-4"
                      labelPlacement="outside"
                    />
                    <Input
                      isReadOnly
                      type="text"
                      label="Tanggal Lahir"
                      variant="bordered"
                      defaultValue="20 November 2005"
                      className="w-full mt-4"
                      labelPlacement="outside"
                    />
                    <Input
                      isReadOnly
                      type="text"
                      label="Nomor Handphone"
                      variant="bordered"
                      defaultValue="08113061614"
                      className="w-full mt-4"
                      labelPlacement="outside"
                    />
                    <Input
                      isReadOnly
                      type="email"
                      label="Email"
                      variant="bordered"
                      defaultValue="naufal.maula3770@gmail.com"
                      className="w-full mt-4"
                      labelPlacement="outside"
                    />
                    </Card>
                </div>
            </div>
        </div>
            </Layout>
        );
      }
      