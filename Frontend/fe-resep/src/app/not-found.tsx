'use client';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import Image from "next/image";
import { IoHomeOutline } from "react-icons/io5";

export default function Error404Page() {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center bg-[#F9EFBA]'>
      {/* Background Start */}
      <div className='flex flex-col justify-center items-center'>
        <div>
          <Image width={500} height={500} src={'/image/404/asset404.png'} alt={'404 asset'} />
        </div>
        <div className='mt-6 lg:mt-12'>
            <h3 className='text-4xl font-bold text-center text-fourth'>Oh no, we lost this page!</h3>
            <p className='mt-2 text-center text-fourth'>It appears the receipt that you seek doesnt exist</p>
        </div>
        <div className='mt-6'>
          <Link href='/'>
            <Button
              size='lg'
              startContent={<IoHomeOutline />}
              className='bg-[#98B356] text-white'
            >
              Back to Home Page
            </Button>
          </Link>
        </div>
      </div>
      {/* Content End */}
    </div>
  );
}
