import React from "react";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const LearnCrypto = () => {
  return (
    <div className="w-[90%] mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full flex gap-6">
        <div className="w-full ">
          <div className="flex items-center justify-between">
            <h1
              className={`${dmSans.className} text-2xl lg:text-4xl font-bold`}
            >
              Learn crypto
            </h1>
            <div className="px-4 py-2 border rounded-lg">
              <p
                className={`${dmSans.className} text-sm lg:text-base text-[#23262F] font-bold`}
                style={{ lineHeight: "1.5" }}
              >
                View more
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-4 mt-4">
            <div className="px-2 py-1 md:px-4 md:py-2 rounded-full bg-black text-white">
              <h2
                className={`${dmSans.className} text-sm lg:text-base font-bold`}
              >
                All
              </h2>
            </div>
            <div className="px-2 py-1 md:px-4 md:py-2 rounded-full bg-white text-[#777E90]">
              <h2
                className={`${dmSans.className} text-sm lg:text-base font-bold`}
              >
                Bitcoin
              </h2>
            </div>
            <div className="px-2 py-1 md:px-4 md:py-2 rounded-full bg-white text-[#777E90]">
              <h2
                className={`${dmSans.className} text-sm lg:text-base font-bold`}
              >
                Blockchain
              </h2>
            </div>
            <div className="px-2 py-1 md:px-4 md:py-2 rounded-full bg-white text-[#777E90]">
              <h2
                className={`${dmSans.className} text-sm lg:text-base font-bold`}
              >
                Tutorial
              </h2>
            </div>
          </div>

          <div className="flex bg-yellow-400 flex-col md:flex-row md:gap-6 lg:flex-row mt-8 justify-between">
            {/* First Card */}
            <div className="w-full md:w-[50%] my-4 md:my-0 lg:w-1/2">
              <Image
                src="/Img.png"
                alt="Example Image"
                width={400}
                height={500}
                quality={100}
                className=" w-[100%] lg:w-[90%] object-cover"
              />
              <div className="flex items-center justify-between mt-6">
                <h1
                  className={`${dmSans.className} text-xl lg:text-2xl font-bold`}
                  style={{ lineHeight: "1.2" }}
                >
                  Leveraged tokens now <br /> available
                </h1>
              </div>
              <p
                className={`${dmSans.className} mt-2 text-sm lg:text-base text-[#777E90] font-normal`}
                style={{ lineHeight: "1.5" }}
              >
                Good things come in 3s. Get 3x <br /> Leveraged tokens now.
              </p>
            </div>

            {/* Second Card */}
            <div className=" w-[100%] md:w-[50%]  space-y-6">
              <div className="flex bg-pink-600 flex-col-reverse lg:flex-row w-full">
                <div className="flex-1">
                  <h1
                    className={`${dmSans.className} hidden  text-lg lg:text-xl font-medium`}
                    style={{ lineHeight: "1.5" }}
                  >
                    Leveraged tokens now  available
                  </h1>
                  <h1
                    className={`${dmSans.className} mt-0 md:font-[700] lg:font-medium md:mt-4 lg:mt-0  text-lg lg:text-xl font-medium`}
                    style={{ lineHeight: "1.5" }}
                  >
                    Leveraged tokens now <br /> available
                  </h1>
                  <p
                    className={`${dmSans.className} mt-2 text-[12px] md:text-[14px] lg lg:text-base text-[#777E90] font-normal`}
                    style={{ lineHeight: "1.5" }}
                  >
                    Good things come in 3s. Get 3x Leveraged <br /> tokens now.
                  </p>
                  <p
                    className={`${dmSans.className} hidden mt-4 text-sm lg:text-base text-[#777E90] font-normal`}
                    style={{ lineHeight: "1.5" }}
                  >
                    June 1, 2021
                  </p>
                </div>
                <div className="flex-1">
                  <Image
                    src="/Frame1.png"
                    alt="Example Image"
                    width={400}
                    height={500}
                    quality={100}
                    className="w-[100%] md:w-[95%] lg:w-[70%] object-cover"
                  />
                </div>
              </div>

              <div className="hidden items-center lg:flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <h1
                    className={`${dmSans.className} text-lg lg:text-xl font-medium`}
                    style={{ lineHeight: "1.5" }}
                  >
                    Leveraged tokens now <br /> available
                  </h1>
                  <p
                    className={`${dmSans.className} mt-2 text-sm lg:text-base text-[#777E90] font-normal`}
                    style={{ lineHeight: "1.5" }}
                  >
                    Good things come in 3s. Get 3x Leveraged <br /> tokens now.
                  </p>
                  <p
                    className={`${dmSans.className} mt-4 text-sm lg:text-base text-[#777E90] font-normal`}
                    style={{ lineHeight: "1.5" }}
                  >
                    June 1, 2021
                  </p>
                </div>
                <div className="flex-1">
                  <Image
                    src="/Frame1.png"
                    alt="Example Image"
                    width={400}
                    height={500}
                    quality={100}
                    className="w-[70%]  object-cover"
                  />
                </div>
              </div>

              {/* Hidden on small and medium screens */}
              <div className="hidden  lg:flex flex-col lg:flex-row gap-4">
                <div className="flex-1 ">
                  <h1
                    className={`${dmSans.className} text-lg lg:text-xl font-medium`}
                    style={{ lineHeight: "1.5" }}
                  >
                    Leveraged tokens now <br /> available
                  </h1>
                  <p
                    className={`${dmSans.className} mt-2 text-sm lg:text-base text-[#777E90] font-normal`}
                    style={{ lineHeight: "1.5" }}
                  >
                    Good things come in 3s. Get 3x Leveraged <br /> tokens now.
                  </p>
                  <p
                    className={`${dmSans.className} mt-4 text-sm lg:text-base text-[#777E90] font-normal`}
                    style={{ lineHeight: "1.5" }}
                  >
                    June 1, 2021
                  </p>
                </div>
                <div className="flex-1">
                  <Image
                    src="/Frame20.png"
                    alt="Example Image"
                    width={400}
                    height={500}
                    quality={100}
                    className="w-[70%] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex mx-auto items-center justify-center  gap-4">
            <div className="px-3 py-3 border rounded-[50px] mt-6 lg:hidden">
              <p
                className={`${dmSans.className} flex items-center gap-2 text-sm lg:text-base text-[#23262F] font-bold`}
                style={{ lineHeight: "1.5" }}
              >
                <GoChevronLeft />
              </p>
            </div>

            <div className="px-3 py-3 border rounded-[50px] mt-6 lg:hidden">
              <p
                className={`${dmSans.className} flex items-center gap-2 text-sm lg:text-base text-[#23262F] font-bold`}
                style={{ lineHeight: "1.5" }}
              >
                 <GoChevronRight />
              </p>
            </div>
          </div>

          <div className="px-4 py-2 border text-center items-center justify-center flex rounded-[40px] mt-6 lg:hidden">
            <p
              className={`${dmSans.className} flex items-center gap-2 text-sm lg:text-base text-[#23262F] font-bold`}
              style={{ lineHeight: "1.5" }}
            >
              View more 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnCrypto;
