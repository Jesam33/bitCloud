import Image from "next/image";
import React from "react";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const TradeAnywhere = () => {
  return (
    <div className="w-[90%] md:w-[90%] mx-auto flex flex-col md:flex-row items-center gap-8 px-5 md:px-10 pt-5 pb-10 md:py-20">
      <div className="flex flex-col-reverse md:flex-row w-full justify-between">
        {/* Left Side - Text and Download Options */}
        <div className="w-full md:w-[40%] lg:w-[30%]">
          <div>
            <h1 className={`${dmSans.className} text-[32px] md:text-[40px] lg:text-[45px] font-[700]`}style={{ lineHeight: "20px", lineHeight: "35px" }}>
              Trade anywhere
            </h1>
            <p
              className={`${dmSans.className} mt-2 text-[14px] md:text-[16px] text-[#777E90] font-[400]`}
              style={{ lineHeight: "20px" }}
            >
              Anytime, anywhere. Trade crypto on your terms.
            </p>
          </div>

          <div className="mt-8 md:mt-[10%]">
            <div className="flex items-center gap-4 md:gap-6 pb-5 border-b border-b-[#E6E8EC]">
              <Image
                src="/Frame735.png"
                alt="Appstore Icon"
                width={300}
                height={300}
                quality={80}
                className="w-[10%] md:w-[12%] h-[10%] md:h-[12%]"
              />
              <div>
                <p
                  className={`${dmSans.className} text-[14px] md:text-[16px] text-[#777E90] font-[400]`}
                  style={{ lineHeight: "16px" }}
                >
                  Download from
                </p>
                <h1 className={`${dmSans.className} text-[20px] md:text-[24px] font-[400]`}>
                  Appstore
                </h1>
              </div>
            </div>

            <div className="flex items-center mt-6 md:mt-[10%] pb-5 border-b border-b-[#E6E8EC] gap-4 md:gap-6">
              <Image
                src="/Frame755.png"
                alt="Google Play Icon"
                width={300}
                height={300}
                quality={80}
                className="w-[10%] md:w-[12%] h-[10%] md:h-[12%]"
              />
              <div>
                <p
                  className={`${dmSans.className} text-[14px] md:text-[16px] text-[#777E90] font-[400]`}
                  style={{ lineHeight: "16px" }}
                >
                  Download from
                </p>
                <h1 className={`${dmSans.className} text-[20px] md:text-[24px] font-[400]`}>
                  Google Play
                </h1>
              </div>
            </div>

            <div className="flex items-center mt-6 md:mt-[10%] gap-4 md:gap-6">
              <Image
                src="/Frame735.png"
                alt="Mac OS Icon"
                width={300}
                height={300}
                quality={80}
                className="w-[10%] md:w-[12%] h-[10%] md:h-[12%]"
              />
              <div>
                <p
                  className={`${dmSans.className} text-[14px] md:text-[16px] text-[#777E90] font-[400]`}
                  style={{ lineHeight: "16px" }}
                >
                  Download from
                </p>
                <h1 className={`${dmSans.className} text-[20px] md:text-[24px] font-[400]`}>
                  Mac OS
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-[60%] p-0 flex gap-11 justify-center items-center relative mt-10 md:mt-0">
          {/* Empty Div Positioned in the Center */}
          <div className="bg-[#D2DFFF] hidden md:flex absolute top-1/2 -translate-y-1/2 rounded-full w-[80%] h-[60%] md:w-[52%] md:h-[70%] z-10"></div>

          {/* Image Positioned on Top */}
          <Image
            src="/BigPhone.png"
            alt="Phone Image"
            width={1000}
            height={1000}
            quality={100}
            className="relative w-[100%] mb-3 md:w-[100%] lg:w-[60%] z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default TradeAnywhere;
