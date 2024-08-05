'use client';
import { Button, Card, Checkbox, Input, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import Image from 'next/image';

export default function RegisterPage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const handleOpen = () => {
      onOpen();
    };
  return (
    <div className="relative h-screen w-full flex justify-center items-center bg-first overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <Image
          src="/image/auth/back.png"
          height={800}
          width={1000}
          alt="Background"
          className="opacity-100"
        />
      </div>

      {/* Card Form */}
      <Card className="relative z-10 p-12 bg-third shadow-lg flex flex-col items-center justify-center w-[70vh]">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form className="w-full">
            <div className="flex w-full flex-col gap-4">
                <Input isRequired size='sm' type="text" label="First Name" />
                <Input isRequired size='sm' type="text" label="Last Name" />
                <Input isRequired size='sm' type="email" label="Email" />
                <Input isRequired size='sm' type="password" label="Password" />
                <Input isRequired size='sm' type="password" label="Confirm Password" />
                {/* Terms and condition */}
                <div className='flex flex-row'>
                    <Checkbox color="warning">I Agree with the{' '}</Checkbox>
                    <Link onPress={handleOpen} className='text-fourth hover:underline'>term and license *</Link>
                </div>
                     
                <Button className='bg-second w-full font-bold'>Register</Button>
            </div>
            <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                    <ModalBody>
                        <p className='text-fourth'> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor quam.
                        </p>
                        <p className='text-fourth'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor quam.
                        </p>
                        <p className='text-fourth'>
                        Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                        dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                        Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                        Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                        proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onPress={onClose}>
                            Agree
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </form>

        {/* Login Button */}
        <div className="mt-4">
          <Link href="/auth/login" className="text-fourth hover:underline">Already Have an Account? Login</Link>
        </div>
      </Card>
    </div>
  );
}
