import Image from "next/image";
import React from "react";
import { DM_Sans } from "next/font/google";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Become = () => {
  return (
    <div className="bg-[#F4F5F6] w-[90%] mx-auto flex flex-col items-center gap-8 px-5 md:px-10 py-10 md:py-20">
      {/* Header Section */}
      <div className="text-left md:text-center">
        <h1 className={`${dmSans.className} text-2xl md:text-4xl font-bold text-[#23262F]`}>
          Become a crypto <br /> trader in seconds
        </h1>
        <p className="text-[14px] md:text-[16px] text-[#707A8A] mt-4">
          We've got everything you need to start trading.
        </p>
      </div>

      {/* Content Section */}
      <div className="w-full">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            <div className="flex flex-col items-center gap-6 bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <Image
                  src="/Composition1.png"
                  alt="Example Image"
                  width={1500}
                  height={1500}
                  quality={100}
                  className="w-full h-full"
                />
              </div>
              <div className="text-center">
                <h2 className={`${dmSans.className} text-xl md:text-2xl font-bold text-[#23262F]`}>
                  Buy & Sell Crypto
                </h2>
                <p className="text-[#707A8A] mt-2 text-sm md:text-base">
                  We realize ideas from simple to complex, everything becomes easy
                  to use and reaches the most potential customers.
                </p>
              </div>
              <div className="px-5 py-3 border w-fit h-fit rounded-[20px] mt-4">
                <p className={`${dmSans.className} text-[14px] md:text-[16px] text-[#23262F] font-[700]`} style={{ lineHeight: "20px" }}>
                  Buy Crypto
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center gap-6 bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <Image
                  src="/Composition_04.png"
                  alt="Example Image"
                  width={1500}
                  height={1500}
                  quality={100}
                  className="w-full h-full"
                />
              </div>
              <div className="text-center">
                <h2 className={`${dmSans.className} text-xl md:text-2xl font-bold text-[#23262F]`}>
                  Trade Assets
                </h2>
                <p className="text-[#707A8A] mt-2 text-sm md:text-base">
                  We realize ideas from simple to complex, everything becomes easy
                  to use and reaches the most potential customers.
                </p>
              </div>
              <div className="px-5 py-3 border w-fit h-fit rounded-[20px] mt-4">
                <p className={`${dmSans.className} text-[14px] md:text-[16px] text-[#23262F] font-[700]`} style={{ lineHeight: "20px" }}>
                  Trade now
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center gap-6 bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <Image
                  src="/Composition_13.png"
                  alt="Example Image"
                  width={1500}
                  height={1500}
                  quality={100}
                  className="w-full h-full"
                />
              </div>
              <div className="text-center">
                <h2 className={`${dmSans.className} text-xl md:text-2xl font-bold text-[#23262F]`}>
                  Learn Crypto
                </h2>
                <p className="text-[#707A8A] mt-2 text-sm md:text-base">
                  We realize ideas from simple to complex, everything becomes easy
                  to use and reaches the most potential customers.
                </p>
              </div>
              <div className="px-5 py-3 border w-fit h-fit rounded-[20px] mt-4">
                <p className={`${dmSans.className} text-[14px] md:text-[16px] text-[#23262F] font-[700]`} style={{ lineHeight: "20px" }}>
                  Learn now
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <Button
        btnLabel="Contact us"
        btnClass={`${dmSans.className} mt-11 px-7 py-3 text-white text-[14px] font-[500] rounded-[90px] bg-[#3772FF]`}
      />
    </div>
  );
};

export default Become;
