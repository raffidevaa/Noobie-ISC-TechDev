'use client';
import Layout from "@/layout/Layout";
import { Accordion, AccordionItem, Button, ButtonGroup, Card, Link, Switch } from "@nextui-org/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from "react";

export default function Home() {
  const [isMonthly, setIsMonthly] = useState<boolean>(true);

  const handleToggle = (monthly: boolean) => {
    setIsMonthly(monthly);
  };
 return (
    <Layout withNavbar={true} withFooter={true}>
      <div className="h-full bg-first mt-16">
        {/* Section Hero */}
        <div className="h-screen flex items-center justify-center relative">
          <div className="p-6 bg-yellow-100 flex items-center justify-between mx-auto z-10">
            <div className="w-2/3 ml-4">
              <h1 className="text-8xl font-extrabold text-fourth ml-12">
                HEALTHY MADE <span className="bg-second">EASY</span>
              </h1>
              <p className="mt-4 text-lg text-fourth w-1/2 ml-12">
                Easy way to help you determine the best diet personalized just for you!
              </p>
              <Button className="ml-12 mt-6 px-6 py-2 bg-third text-white shadow-md rounded-full">Join</Button>
            </div>
            <div className="w-1/3 flex justify-center">
              <Image
                height={300}
                width={300}
                src="/image/icon/logo.png"
                alt="Healthy Made Easy"
                className="items-center"
              />
            </div>
          </div>
          <div className="absolute z-0 right-0 bottom-0">
            <Image src="/image/landing-page/bglanding3.png" width={500} height={500} alt="background" />
          </div>
        </div>

        {/* Section 2 */}
        <div className="h-screen flex items-center justify-center relative">
          <div className="p-6 w-4/5 mx-auto">
            <h1 className="text-8xl font-extrabold text-fourth text-center mb-4">
              FEATURES
            </h1>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="w-full swiper"
            >
              <SwiperSlide>
                <Card className="m-16 p-8 flex flex-row items-center bg-third rounded-3xl shadow-lg text-center">
                  <div className="flex flex-col items-center w-2/3">
                    <h2 className="text-5xl font-bold text-fourth">
                      Optimized Search Engine
                    </h2>
                    <p className="mt-4 text-lg text-fourth">
                      With our tailored search engine, you can find recipes that fit your lifestyle and health goals.
                    </p>
                    <Button className="mt-6 px-6 py-2 bg-second text-white shadow-md rounded-full">Learn More</Button>
                  </div>
                  <div className="mt-4 flex justify-center w-1/3">
                    <Image
                      height={150}
                      width={150}
                      src="/image/icon/logo.png"
                      alt="Optimized Search Engine"
                      className="items-center"
                    />
                  </div>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className="m-16 p-8 flex flex-row items-center bg-third rounded-3xl shadow-lg text-center">
                  <div className="flex flex-col items-center w-2/3">
                    <h2 className="text-5xl font-bold text-fourth">
                      Personalized Diet Plans
                    </h2>
                    <p className="mt-4 text-lg text-fourth">
                      Get customized diet plans that are tailored to your health needs and goals.
                    </p>
                    <Button className="mt-6 px-6 py-2 bg-second text-white shadow-md rounded-full">Learn More</Button>
                  </div>
                  <div className="mt-4 flex justify-center w-1/3">
                    <Image
                      height={150}
                      width={150}
                      src="/image/icon/logo.png"
                      alt="Personalized Diet Plans"
                      className="items-center"
                    />
                  </div>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className="m-16 p-8 flex flex-row items-center bg-third rounded-3xl shadow-lg text-center">
                  <div className="flex flex-col items-center w-2/3">
                    <h2 className="text-5xl font-bold text-fourth">
                      Personalized Diet Plans
                    </h2>
                    <p className="mt-4 text-lg text-fourth">
                      Get customized diet plans that are tailored to your health needs and goals.
                    </p>
                    <Button className="mt-6 px-6 py-2 bg-second text-white shadow-md rounded-full">Learn More</Button>
                  </div>
                  <div className="mt-4 flex justify-center w-1/3">
                    <Image
                      height={150}
                      width={150}
                      src="/image/icon/logo.png"
                      alt="Personalized Diet Plans"
                      className="items-center"
                    />
                  </div>
                </Card>
              </SwiperSlide>
              
            </Swiper>
          </div>
          <div className="absolute z-0 right-0 top-0">
            <Image src="/image/landing-page/bghero2.png" width={500} height={500} alt="background" />
          </div>
        </div>

        {/* Section Pricing */}
        <div className="h-full flex flex-col items-center justify-center relative bg-third">
          <div className="p-6 w-4/5 mx-auto">
            <h1 className="text-8xl font-extrabold text-fourth text-center mb-4 drop-shadow-xl">
              Pricing
            </h1>
            <p className="text-center text-lg text-fourth mb-8">
              Butuh referensi masak apa? Tingkatkan produktivitas Anda, tambahkan pengetahuan, dan kembangkan skill memasak anda dengan savorit. Yuk uji coba gratis!
            </p>
            <div className="flex justify-center mb-8">
            <ButtonGroup>
              <Button onPress={() => handleToggle(true)} className="bg-first">Bulanan</Button>
              <Button onPress={() => handleToggle(false)} className="bg-first">Tahunan</Button>
            </ButtonGroup>
            </div>
            <div className="flex justify-center gap-4 mb-8">
              <Card className="p-8 flex flex-col items-center bg-first text-center shadow-lg rounded-2xl w-1/2">
                <h3 className="text-4xl font-bold text-gray-700 mb-4">Sovorit Regular</h3>
                <p className="text-lg font-medium text-gray-600 mb-4">Desain apa saja dan wujudkan ide Anda. Tanpa biaya, hanya kreativitas.</p>
                <p className="text-5xl font-extrabold text-gray-800 mb-4">Rp0</p>
                <p className="text-sm text-gray-500 mb-8">/{isMonthly ? "bulan" : "tahun"} untuk satu orang</p>
                <Link className="w-full" href="/auth/login">
                <Button size="lg" className="w-full border-3 bg-first drop-shadow-xl">
                  Mulai
                </Button>
                </Link>
                <div className="text-left mt-8">
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">Fitur yang akan Anda suka:</h4>
                  <ul className="text-gray-600 text-left list-disc list-inside">
                    <li>Akses resep resep terbaru (5 resep perminggu)</li>
                    <li>Menyimpan resep</li>
                    <li>Melihat deskripsi resep</li>
                    <li>Fitur pencarian resep sesuai bahan</li>
                  </ul>
                </div>
              </Card>
              <Card className="p-8 flex flex-col items-center bg-first text-center shadow-lg rounded-2xl w-1/2">
                <h3 className="text-4xl font-bold text-gray-700 mb-4">Savorit Premium</h3>
                <p className="text-lg font-medium text-gray-600 mb-4">Dapatkan konten premium, lebih banyak alat desain canggih, dan fitur-fitur AI.</p>
                <p className="text-5xl font-extrabold text-gray-800 mb-4">{isMonthly ? "Rp30.000" : "Rp300.000"}</p>
                <p className="text-sm text-gray-500 mb-8">/{isMonthly ? "bulan" : "tahun"} untuk satu orang</p>
                <Button size="lg" className="bg-third w-full">
                  Mulai uji coba gratis
                </Button>
                <div className="text-left mt-8">
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">Semua yang ada pada paket Gratis, ditambah:</h4>
                  <ul className="text-gray-600 text-left list-disc list-inside">
                    <li>Akses 3 JT+ Resep yang tersedia secara lengkap</li>
                    <li>Fitur penghitungan BMI dengan akurat</li>
                    <li>Akses fitur post resep buatan pribadi</li>
                    <li>Akses fitur rating resep yang tersedia</li>
                    <li>Akses pencarian resep tanpa batas!</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Section CTA */}
        <div className="h-screen flex items-center justify-center relative">
          <div className="p-6 w-4/5 mx-auto z-10">
            <h1 className="text-8xl font-extrabold text-fourth text-center mb-4 drop-shadow-xl">
              JOIN US AND YOUR <span className="bg-second">HEALTH</span> WILL THANK YOU!
            </h1>
            <p className="text-center text-lg font-medium text-third mb-8">
              save your time, save your health
            </p>
            <div className="flex justify-center">
              <Link href="/auth/login">
              <Button className="bg-third text-[#FFFF] font-bold py-2 px-4 rounded-full">
                Join
              </Button>
              </Link>
            </div>
            <div className="flex flex-row">
              <div className="flex z-10">
                <Image src="/image/landing-page/testimonial.png" height={60} width={140} alt="testimonial"/>
              </div>
              <div className="flex flex-col justify-center items-start ">
                <div className="flex items-center mr-4">
                  <span className="text-yellow-500 font-bold text-lg text-fourth">4.7</span>
                  <span className="ml-2 text-sm text-gray-500 text-fourth">★ Reviews</span>
                </div>
                <p className="text-sm text-center text-fourth">
                  Savorit is a good choice for anyone, it saved me a lot of time and energy needed to find what to eat. 
                  The best part is that I know I figured out what to eat next! Very recommended!
                </p>
              </div>
            </div>
          </div>
          <div className="absolute z-0 left-0 top-0">
            <Image src="/image/landing-page/bglanding2.png" width={500} height={500} alt="background" />
          </div>
          <div className="absolute z-0 right-0 top-0">
            <Image src="/image/landing-page/strippedarrowlanding.png" width={500} height={500} alt="background" />
          </div>
        </div>

        {/* Section FAQ */}
        <div className="h-full flex-col items-center justify-center relative">
          <div className="p-6 w-4/5 mx-auto">
            <h1 className="text-8xl font-extrabold text-fourth text-center mb-4 drop-shadow-xl">
              Frequently Asked Questions
            </h1>
            <Accordion variant="splitted">
              <AccordionItem title="1. What is Savorit?" className="bg-third font-bold text-fourth">
                <span className="font-normal">Savorit is an app that offers a variety of healthy and affordable recipes. It is designed to help you choose and cook meals that fit your budget without compromising on nutritional value.</span>
              </AccordionItem>
              <AccordionItem title="2. How do I use Savorit?" className="bg-third font-bold text-fourth">
              <span className="font-normal">You can start by searching for recipes that match your preferences, using filters based on available ingredients, or adjusting your search according to your budget. The app also provides easy-to-follow cooking steps.</span>
              </AccordionItem>
              <AccordionItem title="3. Can I search for recipes based on ingredients I have at home?" className="bg-third font-bold text-fourth">
              <span className="font-normal">Absolutely! You can enter the ingredients you have, and Savorit will show you recipes that you can make with those ingredients.</span>
              </AccordionItem>
              <AccordionItem title="4. Is Savorit free to use?" className="bg-third font-bold text-fourth">
                <span className="font-normal">Savorit offers a free version with access to many features. However, there is also a subscription option for premium features like exclusive recipes, and nutrition guides.</span>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="text-center mt-8 flex flex-col items-center justify-center">
            <p className="text-lg text-fourth">
              Have more questions? 
            </p>
            <p className="font-bold text-fourth">
              Contact Us
            </p>
            <Image src="/image/landing-page/miniarrow.png" width={50} height={50} alt="background" className="mr-24 -mt-2"/>
          </div>
        </div>
      </div>
    </Layout>
  );
}
