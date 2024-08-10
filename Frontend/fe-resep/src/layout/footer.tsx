import Link from 'next/link';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTiktok, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  const dataFooter = [
    {
      menu: 'About Us',
      child: [
        { name: 'Why Use Stovit', url: '/about-us' },
        { name: 'What Is Stovit', url: '/about-us' },
      ],
    },
    {
      menu: 'Features',
      child: [
        { name: 'Receipt', url: '/resep' },
        { name: 'Filter', url: '/resep' },
      ],
    },
    {
      menu: 'Pricing',
      child: [
        { name: 'Premium', url: '/' },
        { name: 'Normal', url: '/' },
      ],
    },
    {
      menu: 'dashboard',
      child: [{ name: 'profile', url: '/dashboard' }],
    },
  ];

  const dataSocialMedia = [
    { icon: AiFillInstagram, url: 'https://www.instagram.com/' },
    { icon: FaTwitter, url: 'https://x.com/' },
    { icon: FaTiktok, url: 'https://www.tiktok.com/' },
    { icon: FaLinkedinIn, url: 'https://www.linkedin.com/',},
  ];

  return (
    <footer className="flex flex-col w-full bg-third px-6 py-8">
      {/* section pertama */}
      <div className='flex flex-col md:flex-row justify-between md:items-start items-center w-full'>
        <div className='flex mb-8 lg:mb-0'>
          <Image
            width={188}
            height={167}
            src='/image/icon/logo.png'
            className='block h-[113px] max-h-[167px] w-[130px] md:mx-0 xl:h-[167px] xl:w-[188px]'
            alt='Logo Stovit'
          />
        </div>
        <div className='flex'>
          <div className='flex flex-col md:flex-row'>
          {dataFooter.map((item, idx) => (
            <div className='flex flex-col items-center md:items-start mr-8 mb-4 lg:mb-0' key={idx}>
              <p className='text-lg font-semibold text-neutral-900 dark:text-neutral-50'>
                {item.menu}
              </p>
              {item.child.map((val, idx) => (
                <Link
                  href={val.url}
                  key={idx}
                  className='text-neutral-900 dark:text-neutral-400 hover:underline'
                >
                  <p className='cursor-pointer text-base md:text-sm xl:text-lg'>
                    {val.name}
                  </p>
                </Link>
              ))}
            </div>
          ))}
          </div>
        </div>
      </div>

      {/* section kedua */}
      <div className='flex flex-col md:flex-row justify-between items-center pt-8 mt-8 w-full'>
        <div className='flex items-center gap-4 mb-4 md:mb-0'>
          <div className='flex flex-col'>
          <p className='text-5xl md:text-sm xl:text-lg font-bold'>
            Savorit
          </p>
          <p className='text-lg md:text-sm xl:text-lg'>all right reserved</p>
          </div>
          
        </div>
        <div className='flex items-center gap-6'>
          {dataSocialMedia.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-neutral-900 dark:text-neutral-50'
            >
              <item.icon className='h-6 w-6' />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
