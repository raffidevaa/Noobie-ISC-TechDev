'use client';
import Layout from "@/layout/Layout";
import { Accordion, AccordionItem, Button, ButtonGroup, Card, Switch } from "@nextui-org/react";
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
        {/* Section 1 */}
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
            <Image src="/image/landing-page/backgroundisc.png" width={500} height={500} alt="background" />
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

        {/* Section 3 */}
        <div className="h-full flex flex-col items-center justify-center relative bg-third">
          <div className="p-6 w-4/5 mx-auto">
            <h1 className="text-8xl font-extrabold text-fourth text-center mb-4 drop-shadow-xl">
              Pricing
            </h1>
            <p className="text-center text-lg text-fourth mb-8">
              Butuh referensi masak apa? Tingkatkan produktivitas Anda, tambahkan pengetahuan, dan kembangkan skill memasak anda dengan savorit. Yuk uji coba gratis!
            </p>
            <div className="flex justify-center mb-8">
            <ButtonGroup color="primary">
              <Button onPress={() => handleToggle(true)}>Bulanan</Button>
              <Button onPress={() => handleToggle(false)}>Tahunan</Button>
            </ButtonGroup>
            </div>
            <div className="flex justify-center gap-4 mb-8">
              <Card className="p-8 flex flex-col items-center bg-first text-center shadow-lg rounded-2xl w-1/2">
                <h3 className="text-4xl font-bold text-gray-700 mb-4">Sovorit Gratis</h3>
                <p className="text-lg font-medium text-gray-600 mb-4">Desain apa saja dan wujudkan ide Anda. Tanpa biaya, hanya kreativitas.</p>
                <p className="text-5xl font-extrabold text-gray-800 mb-4">Rp0</p>
                <p className="text-sm text-gray-500 mb-8">/{isMonthly ? "bulan" : "tahun"} untuk satu orang</p>
                <Button size="lg" className="w-full border-3 bg-first drop-shadow-xl">
                  Mulai
                </Button>
                <div className="text-left mt-8">
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">Fitur yang akan Anda suka:</h4>
                  <ul className="text-gray-600 text-left list-disc list-inside">
                    <li>Editor seret dan taruh yang mudah</li>
                    <li>1 JT+ template yang didesain secara profesional</li>
                    <li>1000-an desain (konten media sosial dan lainnya)</li>
                    <li>3 JT+ grafis dan foto stok</li>
                    <li>Tulisan dan desain dari bahan AI*</li>
                    <li>Pencetakan dan pengiriman desain</li>
                    <li>5 GB penyimpanan cloud</li>
                  </ul>
                </div>
              </Card>
              <Card className="p-8 flex flex-col items-center bg-first text-center shadow-lg rounded-2xl w-1/2">
                <h3 className="text-4xl font-bold text-gray-700 mb-4">Savorit Premium</h3>
                <p className="text-lg font-medium text-gray-600 mb-4">Dapatkan konten premium, lebih banyak alat desain canggih, dan fitur-fitur AI.</p>
                <p className="text-5xl font-extrabold text-gray-800 mb-4">{isMonthly ? "Rp69.000" : "Rp765.000"}</p>
                <p className="text-sm text-gray-500 mb-8">/{isMonthly ? "bulan" : "tahun"} untuk satu orang</p>
                <Button size="lg" color="primary" className="w-full">
                  Mulai uji coba gratis
                </Button>
                <div className="text-left mt-8">
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">Semua yang ada pada paket Gratis, ditambah:</h4>
                  <ul className="text-gray-600 text-left list-disc list-inside">
                    <li>Template premium tanpa batas</li>
                    <li>1000 JT+ foto, video, grafis, dan audio</li>
                    <li>1000 JT+ Merek untuk mendukung media Anda</li>
                    <li>Ubah ukuran desain secara otomatis dengan alat ajaib</li>
                    <li>Hapus latar belakang dalam satu klik</li>
                    <li>Tingkatkan kreativitas dengan 20+ alat AI</li>
                    <li>Penyimpanan desain konten media sosial lebih dari 1TB</li>
                    <li>Dukungan pelanggan online</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="h-screen flex items-center justify-center relative">
          <div className="p-6 w-4/5 mx-auto">
            <h1 className="text-8xl font-extrabold text-fourth text-center mb-4 drop-shadow-xl">
              Frequently Asked Questions
            </h1>
            <Accordion variant="splitted">
              <AccordionItem title="1. Why is the Earth round?" className="bg-third font-bold text-fourth">
                <span className="font-normal">The Earth is round because of gravity. When the Earth was formed, gravity pulled matter together, forming a sphere as it is the most stable shape.</span>
              </AccordionItem>
              <AccordionItem title="2. Why is the Earth round?" className="bg-third font-bold text-fourth">
              <span className="font-normal">The Earth is round because of gravity. When the Earth was formed, gravity pulled matter together, forming a sphere as it is the most stable shape.</span>
              </AccordionItem>
              <AccordionItem title="3. Why is the Earth round?" className="bg-third font-bold text-fourth">
              <span className="font-normal">The Earth is round because of gravity. When the Earth was formed, gravity pulled matter together, forming a sphere as it is the most stable shape.</span>
              </AccordionItem>
              <AccordionItem title="4. Why is the Earth round?" className="bg-third font-bold text-fourth">
                <span className="font-normal">The Earth is round because of gravity. When the Earth was formed, gravity pulled matter together, forming a sphere as it is the most stable shape.</span>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </Layout>
  );
}
