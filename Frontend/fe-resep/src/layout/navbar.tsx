import Link from 'next/link';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTiktok, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@nextui-org/react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-first dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-fourth">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image width={40} height={50} src="/image/icon/logo.png" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-extrabold italic whitespace-nowrap text-fourth">Savorit</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link className="text-fourth font-medium rounded-lg text-sm px-4 py-2 text-center" href="/auth/login">Sign In</Link>
          <Link href="/auth/register"><Button type="button" className="text-fourth bg-[#FBCB3B] sm:block mb:hidden">Sign Up</Button></Link>
          <Button 
            data-collapse-toggle="navbar-sticky" 
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
            aria-controls="navbar-sticky" 
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </Button>
        </div>
        <div className={`items-center justify-between ${isMenuOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/" className="block py-2 px-3 text-fourth bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 hover:underline" aria-current="page">Home</Link>
            </li>
            <li>
              <Link href="/" className="block hover:underline py-2 px-3 text-fourth rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Article</Link>
            </li>
            <li>
              <Link href="/resep" className="block hover:underline py-2 px-3 text-fourth rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Receipt</Link>
            </li>
            <li>
              <Link href="/login" className="block hover:underline py-2 px-3 text-fourth rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">News</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
