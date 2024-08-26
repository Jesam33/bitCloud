import React from "react";
import { DM_Sans } from "next/font/google";
import MarketTrend from "./MarketTrend";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const Market = () => {
  return (
    <div className="w-[90%] mx-auto p-6 bg-white rounded-[30px] flex flex-col gap-6">
      <div className="flex  lg:flex-row items-center justify-between w-full">
        <h1 className={`${dmSans.className} text-3xl lg:text-4xl font-bold`}>
          Market Trend
        </h1>

        <div className="hidden md:flex mt-4 lg:mt-0 px-5 py-3 border w-fit h-fit rounded-[20px] cursor-pointer">
          <p
            className={`${dmSans.className} text-base text-[#23262F] font-bold`}
            style={{ lineHeight: "16px" }}
          >
            View more
          </p>
        </div>
      </div>

      <div className=" hidden md:flex flex-wrap gap-3">
        {["All", "Defi", "Innovation", "POS", "NFT", "POW", "Storage"].map((category) => (
          <div
            key={category}
            className={`px-4 py-2 rounded-full ${
              category === "All"
                ? "bg-black text-white"
                : "bg-gray-200 text-[#777E90]"
            }`}
          >
            <h2
              className={`${dmSans.className} text-sm lg:text-base font-bold`}
              style={{ lineHeight: "16px" }}
            >
              {category}
            </h2>
          </div>
        ))}
      </div>

      <div className="w-full md:hidden">
        <select className="w-full font-[500] border p-2 px-4 rounded-[10px]" >
          <option className="font-[700] px-4">All</option>
        </select>
      </div>

      <div className="w-full">
        <MarketTrend />
      </div>
    </div>
  );
};

export default Market;
