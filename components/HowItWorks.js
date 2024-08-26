import React from "react";
import { DM_Sans } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const steps = [
  {
    title: "Download",
    description:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
    image: "/Composition_04.png",
    connector: "/connectLine.png",
  },
  {
    title: "Connect wallet",
    description:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
    image: "/Composition_13.png",
    connector: "/connectLine.png",
  },
  {
    title: "Start trading",
    description:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
    image: "/Composition_11 1.png",
    connector: "/connectLine.png",
  },
  {
    title: "Earn money",
    description:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
    image: "/Composition_06 1.png",
  },
];

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center w-[90%] md:w-[80%]justify-center py-10 md:py-16 ">
      <h2
        className={`${dmSans.className} text-3xl md:text-[48px] font-[700] mb-8`}
        style={{ letterSpacing: "2px", lineHeight: "36px", md: "56px" }}
      >
        How it works
      </h2>
      <p className="text-center text-gray-600 mb-8 md:mb-12">
        Stacks is a production-ready library of stackable <br className="hidden md:block"/> content blocks built
        in React Native.
      </p>

      {/* Swiper for Small Screens */}
      <div className="lg:hidden w-full ">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {steps.map((step, index) => (
            <SwiperSlide className="p-4"  key={index}>
              <div className="text-center px-2  rounded-[30px] shadow-2xl flex flex-col items-center">
                <Image 
                  width={50}
                  height = {50}
                  quality = {80}
                  src={step.image}
                  alt={step.title}
                  className="mx-auto mb-4 h-28 w-80 object-contain"
                />
                <div className="my-5 md:my-11  w-full">
                  <h3 className="font-[600] text-[12px] text-[#777E90] mb-2">
                    Step {index + 1}
                  </h3>
                  <h4
                    className="font-semibold text-[#23262F] text-[16px] mb-2"
                    style={{ lineHeight: "24px" }}
                  >
                    {step.title}
                  </h4>
                  <p
                    className="font-[400] text-[#353945]"
                    style={{ lineHeight: "30px" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid for Medium to Large Screens */}
      <div className="hidden md:hidden lg:flex justify-between items-center w-full gap-[70px] relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center"
          >
            <div className="relative">
              <Image 
                  width={50}
                  height = {50}
                  quality = {80}
                   src={step.image}
                alt={step.title}
                className="mx-auto mb-4 h-28 w-40 object-contain"
              />
              {index < steps.length - 1 && (
                <Image 
                width={50}
                height = {50}
                quality = {80}
                  src={step.connector}
                  alt="Connector line"
                  className="absolute top-[50px] transform -translate-y-1/2 left-full w-[100%] h-4 object-contain"
                />
              )}
            </div>
            <div className="my-11 w-full">
              <h3 className="font-[600] text-[12px] text-[#777E90] mb-2">
                Step {index + 1}
              </h3>
              <h4
                className="font-semibold text-[#23262F] text-[16px] mb-2"
                style={{ lineHeight: "24px" }}
              >
                {step.title}
              </h4>
              <p
                className="font-[400] text-[#353945]"
                style={{ lineHeight: "30px" }}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
