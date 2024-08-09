'use client';
import { Button, Card, Checkbox, Input, Link } from '@nextui-org/react';
import Image from 'next/image';

export default function LoginPage() {
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
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form className="w-full">
          <div className="flex w-full flex-col gap-4">
            <Input isRequired size='sm' type="email" label="Email" />
            <Input isRequired size='sm' type="password" label="Password" />
            
            {/* Remember Me and Forget Password */}
            <div className="flex justify-between items-center w-full">
              <Checkbox color="warning">
                Remember me
              </Checkbox>
              <Link href="/auth/forget-password" className="text-fourth hover:underline">Forgot Password?</Link>
            </div>
            
            <Button className='bg-second w-full font-bold'>Login</Button>
          </div>
        </form>

        {/* Register Link */}
        <div className="mt-4">
          <Link href="/auth/register" className="text-fourth hover:underline">New Here? Click to register</Link>
        </div>
      </Card>
    </div>
  );
}
