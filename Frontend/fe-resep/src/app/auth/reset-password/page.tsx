'use client';
import { Button, Card, Checkbox, Input, Link } from '@nextui-org/react';
import Image from 'next/image';

export default function ResetPasswordPage() {
  return (
    <div className="relative h-screen w-full flex justify-center items-center bg-first overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <Image
          src="/image/auth/backgroundauth.png"
          height={800}
          width={1000}
          alt="Background"
          className="opacity-100"
        />
      </div>

      {/* Card */}
      <Card className="relative z-10 p-12 bg-third shadow-lg flex flex-col items-center justify-center w-[70vh]">
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
        <p className='font-light text-xs text-fourth'>Enter a new password below to change your password</p>
        <form className="w-full">
          <div className="flex w-full flex-col gap-4 mt-6">
            <Input isRequired size='sm' type="password" label="New Password"/>
            <Input isRequired size='sm' type="password" label="Confirm New Password" />

            {/* Verify and Back */}
            <Button className='bg-second w-full font-bold mt-4'>Confirm</Button>
            <Link href='/auth/login'><Button className='bg-[#6B7E53] text-first w-full font-bold'>Back</Button></Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
