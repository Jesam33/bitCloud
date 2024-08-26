import Image from "next/image";
import React from "react";
import { DM_Sans } from "next/font/google";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Stay = () => {
  return (
    <div className="bg-[#F4F5F6] w-[90%] md:w-[95%] mx-auto flex flex-col justify-center items-center gap-8 px-5 md:px-10 py-10 md:py-20">
      {/* Header Section */}
      <div className="text-center flex flex-col items-center justify-center">
        <div className="flex w-fit my-5 gap-4 items-center">
          <Image
            src="/Logo.png"
            alt="logo"
            width={30}
            height={30}
            quality={100}
          />
          <h1
            className={`${dmSans.className} text-xl md:text-2xl font-[600]`}
            style={{ letterSpacing: "1px" }}
          >
            Bitcloud
          </h1>
        </div>
        <h1
          className={`${dmSans.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#23262F]`}
        >
          Stay in the know on <br className="hidden md:block" /> crypto with
          BitCloud
        </h1>
        <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#707A8A] mt-4">
          A creative agency that leads and inspires
        </p>
      </div>

      {/* Content Section */}
      <div className="flex w-full justify-between items-center gap-4 md:gap-7">
        <div className="hidden md:block p-1 cursor-pointer">
          <GoArrowLeft size={24} />
        </div>
        <div className="flex relative md:bg-white flex-col-reverse md:flex-row justify-between rounded-[20px] md:rounded-[30px] w-full md:w-[95%] px-6 md:px-[40px] lg:px-[80px] md:py-[20px] lg:py-[40px] items-center">
          <div className="w-full md:w-[50%] text-center md:text-left">
            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#707A8A] font-[700] my-2 md:my-4">
              CRYPTO NEWS
            </p>
            <h1
  className={`${dmSans.className} text-2xl sm:text-3xl text-[20px] lg:text-4xl text-[#23262F]`}
  style={{ lineHeight: '20px', lineHeight: '24px', lineHeight: '40px' }}
>
              Be Part of our Global <br className="hidden md:block" /> Community
            </h1>
            <p className="text-[14px] hidden md:hidden lg:flex sm:text-[15px] md:text-[16px] text-[#707A8A] mt-4 leading-relaxed">
              Let’s stay in touch. Join our communities to{" "}
              <br className="hidden md:block" /> keep up with the BitCloud team
              and our <br className="hidden md:block" /> traders from across the
              world.
            </p>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#707A8A] mt-4 leading-relaxed">
              Stack solves business problems from simple to complex
            </p>

            <div className="px-4 py-2 md:px-5 mx-auto md:mx-0 md:py-3 border border-gray-300 w-fit h-fit rounded-[20px] mt-6 md:mt-4 cursor-pointer hover:bg-gray-200 transition-all">
              <p
                className={`${dmSans.className} text-[14px] md:text-[16px] text-[#23262F] font-[700]`}
                style={{ lineHeight: "20px" }}
              >
                Join now
              </p>
            </div>
          </div>
          <div className="w-full md:w-[50%] lg:w-[70%] md:mt-0">
            <Image
              src="/Composition_08.png"
              alt="crypto globe"
              width={1500}
              height={1500}
              quality={80}
              className="w-full h-auto object-cover rounded-[20px] md:rounded-none"
            />
          </div>
        </div>

        <div className="hidden md:block p-1 cursor-pointer">
          <GoArrowRight size={24} />
        </div>
      </div>
    </div>
  );
};

export default Stay;
