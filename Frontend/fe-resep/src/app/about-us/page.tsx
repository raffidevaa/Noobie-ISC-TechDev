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
      <div className="h-full bg-first mt-12">
        {/* Section 1 */}
        <div className="h-screen flex items-center justify-center relative">
          <div className="p-6 bg-yellow-100 flex items-center justify-between mx-auto z-10">
            <div className="w-1/2 ml-4">
                <h1 className="text-5xl font-extrabold text-fourth ml-12">Why Savorit?</h1>
                <p className="mt-4 text-lg text-fourth w-[80%] ml-12">
                We choose SavorIt because we want to promote the idea
                from SDG number 2 about food

                As college student, we often have to do things on our own.
                And that means cooking too. We want to make cooking available
                and easy for everyone. Whether they are someone expert or even
                newbies alike.

                With that idea in mind, we sparked the creation of SavorIt to help
                people save their health and time             
                </p>
            </div>
            <div className="w-1/2 flex justify-center">
                <h1 className="text-8xl font-extrabold text-fourth">
                ABOUT <span className="bg-second">US</span>
              </h1>
            </div>
          </div>
          <div className="absolute z-0 right-0 bottom-0">
            <Image src="/image/landing-page/bglanding3.png" width={500} height={500} alt="background" />
          </div>
        </div>
        
        {/* Section 2 */}
        <div className="h-screen flex items-center justify-center relative">
          <div className="p-6 bg-yellow-100 flex items-center justify-center mx-auto z-10">
            <div className="w-1/2 flex justify-center items-center">
              <Image
                height={300}
                width={300}
                src="/image/about/sdg2.png"
                alt="Healthy Made Easy"
                className="rounded-xl"
              />
            </div>
            <div className="w-1/2 flex justify-center">
              <div>
                <h1 className="text-5xl font-extrabold text-fourth">SDGs Number 2</h1>
                <p className="mt-4 text-lg text-fourth w-[80%]">
                The Sustainable Development Goals (SDG) 2 is focused on "Zero Hunger." Its primary objective is to end hunger, achieve food security and improved nutrition, and promote sustainable agriculture. This goal addresses the need to ensure that all people, particularly those in vulnerable situations, have access to sufficient, safe, and nutritious food all year round. It also emphasizes the importance of supporting small-scale farmers, enhancing agricultural productivity, and promoting sustainable food production systems to maintain the resources needed for future generations.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute z-0 right-0 bottom-0">
            <Image src="/image/landing-page/bglanding3.png" width={250} height={250} alt="background"/>
          </div>
        </div>


        {/* Section 2 */}
        <div className="h-screen flex items-center justify-center relative">
          <div className="p-6 w-4/5 mx-auto">
            <h1 className="text-8xl font-extrabold text-fourth text-center mb-4">
              MEET OUR <span className="bg-second">TALENTS</span>
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
                  <div className="flex flex-col items-start w-2/3">
                    <h2 className="text-5xl font-bold text-[#FFFFFF]">
                      Yudhis Armico
                    </h2>
                    <p className="mt-4 text-lg text-[#FFFFFF] text-start font-bold">
                        Hustler
                    </p>
                    <p className="mt-4 text-lg text-[#FFFFFF] text-start">
                    &quot;Semangat dan komitmen dari masing-masing kita adalah bahan bakar yang akan membawa kita menuju keberhasilan.&quot;
                    </p>
                  </div>
                  <div className="mt-4 flex justify-center w-1/3">
                    <Image
                      height={150}
                      width={150}
                      src="/image/about/yudhis.jpg"
                      alt="Optimized Search Engine"
                      className="items-center rounded-full"
                    />
                  </div>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className="m-16 p-8 flex flex-row items-center bg-third rounded-3xl shadow-lg text-center">
                  <div className="flex flex-col items-start w-2/3">
                    <h2 className="text-5xl font-bold text-[#FFFFFF] text-start">
                      Muhammad Fawwaz Al-Amien
                    </h2>
                    <p className="mt-4 text-lg text-[#FFFFFF] text-start font-bold">
                        Hipster
                    </p>
                    <p className="mt-4 text-lg text-[#FFFFFF] text-start">
                    &quot;Setiap elemen dalam desain memiliki cerita yang perlu disampaikan dengan jelas dan sederhana.&quot;                    
                    </p>
                  </div>
                  <div className="mt-4 flex justify-center w-1/3">
                    <Image
                      height={150}
                      width={150}
                      src="/image/about/fawwaz.jpg"
                      alt="Personalized Diet Plans"
                      className="items-center rounded-full"
                    />
                  </div>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className="m-16 p-8 flex flex-row items-center bg-third rounded-3xl shadow-lg text-center">
                  <div className="flex flex-col items-start w-2/3">
                    <h2 className="text-5xl font-bold text-[#FFFFFF]">
                      Naufal Maula
                    </h2>
                    <p className="mt-4 text-lg text-[#FFFFFF] text-start font-bold">
                        Hipster
                    </p>
                    <p className="mt-4 text-lg text-[#FFFFFF] text-start">
                    &quot;Fokuslah pada pengguna, dan segalanya akan mengikuti.&quot;
                    </p>
                  </div>
                  <div className="mt-4 flex justify-center w-1/3">
                    <Image
                      height={150}
                      width={150}
                      src="/image/about/naufal.jpg"
                      alt="Personalized Diet Plans"
                      className="items-center rounded-full"
                    />
                  </div>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className="m-16 p-8 flex flex-row items-center bg-third rounded-3xl shadow-lg text-center">
                  <div className="flex flex-col items-start w-2/3">
                    <h2 className="text-5xl font-bold text-[#FFFFFF]">
                      Raffi Deva Anargya
                    </h2>
                    <p className="mt-4 text-lg text-[#FFFFFF] text-start font-bold">
                        Hacker
                    </p>
                    <p className="mt-4 text-lg text-[#FFFFFF] text-start">
                    &quot;Scalability is not an afterthought, it's a design philosophy.&quot;
                    </p>
                  </div>
                  <div className="mt-4 flex justify-center w-1/3">
                    <Image
                      height={150}
                      width={150}
                      src="/image/about/rafi.jpg"
                      alt="Personalized Diet Plans"
                      className="items-center rounded-full"
                    />
                  </div>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className="m-16 p-8 flex flex-row items-center bg-third rounded-3xl shadow-lg text-center">
                  <div className="flex flex-col items-start w-2/3">
                    <h2 className="text-5xl font-bold text-start text-[#FFFFFF]">
                      Bimo Rajendra Widyadhana
                    </h2>
                    <p className="mt-4 text-lg text-[#FFFFFF] text-start font-bold">
                        Hacker
                    </p>
                    <p className="mt-4 text-lg text-[#FFFFFF] text-start">
                    &quot;Beauty in an interface lies in making complexity appear simple.&quot;
                    </p>
                  </div>
                  <div className="mt-4 flex justify-center w-1/3">
                    <Image
                      height={150}
                      width={150}
                      src="/image/about/bimo.jpg"
                      alt="Personalized Diet Plans"
                      className="items-center rounded-full"
                    />
                  </div>
                </Card>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="absolute z-0 right-0 top-0">
            <Image src="/image/landing-page/bghero2.png" width={500} height={500} alt="background" />
          </div>
          <div className="absolute z-0 left-0 bottom-0">
            <Image src="/image/landing-page/bglanding3.png" width={500} height={500} alt="background" className="rotate-90"/>
          </div>
        </div>
      </div>
    </Layout>
  );
}
