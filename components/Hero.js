import Image from "next/image";
import React from "react";
import { DM_Sans } from "next/font/google";
import Button from "./Button";
import { GoArrowDown } from "react-icons/go";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const Hero = () => {
  return (
    <div className="w-[100%] md:w-[90%] md: flex flex-col mt-[25%] md:mt-[10%] lg:py-[5px] md:flex-row px-5 md:px-10 gap-6 md:gap-10">
      <div className="w-full md:w-1/2 my-auto">
        <h1
          className={`${dmSans.className} text-3xl md:text-[45px] lg:text-[64px] font-[700]`}
          style={{ lineHeight: "1.2", letterSpacing: "-1px" }}
        >
          Buy & sell <br /> crypto in minutes
        </h1>
        <p
          className="text-base md:text-[10px] lg:text-[16px] mt-4 lg:mt-6 font-[400] text-[#777E90]"
          style={{ lineHeight: "1.5", letterSpacing: "0.5px" }}
        >
          Trade Bitcoin, Ethereum, USDT, and the top altcoins on the <br />{" "}
          legendary crypto asset exchange.
        </p>
        <Button
          btnLabel="Get started now"
          btnClass={`${dmSans.className} mt-6 md:mt-8 lg:mt-11 px-5 lg:px-7  py-2 lg:py-3 text-white text-[12px] md:text-[14px] font-[500] rounded-full bg-[#3772FF]`}
        />
        <div className="p-2 hidden lg:flex mt-8 md:mt-12 border rounded-full w-fit mx-auto md:mx-0  justify-center items-center">
          <GoArrowDown className="text-xl md:text-2xl" />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src="/Hero.png"
          alt="Hero"
          layout="responsive"
          width={1000}
          height={1000}
          quality={100}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
