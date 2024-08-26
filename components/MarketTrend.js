import Image from "next/image";
import React from "react";

const MarketTrend = () => {
  const data = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: "$36,201.34",
      change: "+1.71%",
      chart: "/chart.png",
      tradeLink: "#",
      image: "/yellowCoin.png",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: "$2,605.95",
      change: "+2.04%",
      chart: "/chart1.png",
      tradeLink: "#",
      image: "/etherum.png",
    },
    {
      name: "Bitcoin Cash",
      symbol: "BCH",
      price: "$939.20",
      change: "-0.74%",
      chart: "/chart2.png",
      tradeLink: "#",
      image: "/GreenCoin.png",
    },
    {
      name: "Ripple",
      symbol: "XRP",
      price: "$1.02",
      change: "+1.20%",
      chart: "/chart4.png",
      tradeLink: "#",
      image: "/blackCoin.png",
    },
    {
      name: "Chainlink",
      symbol: "LINK",
      price: "$30.56",
      change: "-3.84%",
      chart: "/chart3.png",
      tradeLink: "#",
      image: "/deepBlueCoin.png",
    },
  ];

  return (
    <div className="w-full p-0 md:p-5 mt-6">
      {/* Table */}
      <div className="text-gray-700 w-full">
        {/* Header Row (Hidden on Small Screens) */}
        <div className=" grid grid-cols-6 md:grid border-b md:grid-cols-12 w-full gap-4 text-[#777E90] p-3 border-gray-200">
          <div className="col-span-1 hidden md:flex font-semibold">#</div>
          <div className="col-span-3  text-[12px] md:text-[14px] font-[400] md:font-semibold">
            Name
          </div>
          <div className="col-span-2 md:col-span-3 text-[12px] md:text-[14px] font-[400] md:font-semibold">
            Price
          </div>
          <div className="col-span-1 md:col-span-2 text-[12px] md:text-[14px] font-[400] md:font-semibold">
            24h Change
          </div>
          <div className="col-span-2 hidden md:flex font-semibold">Chart</div>
          <div className="col-span-1 hidden md:flex font-semibold">Trade</div>
        </div>

        {/* Data Rows */}
        {data.map((coin, index) => (
          <div
            key={index}
            className="flex flex-col md:grid md:grid-cols-12 w-full items-center py-3 gap-4 border-b last:border-none"
          >
            {/* On small screens, layout is horizontal */}
            <div className="grid grid-cols-6  items-center  w-full md:hidden">
              <div className="flex col-span-3  items-center gap-2 ">
                <Image
                  src={coin.image}
                  alt={coin.name}
                  width={34}
                  height={34}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
                <div>
                  <span className="font-bold text-[12px] md:text-[14px]">
                    {coin.name}
                  </span>
                  {/* <span className="text-sm text-gray-500 block">{coin.symbol}</span> */}
                </div>
              </div>
              <div className="text-left col-span-2 text-[12px] font-[500]">
                {coin.price}
              </div>
              <div
                className={`col-span-1 text-center text-[12px] md:text-left ${
                  coin.change.includes("-") ? "text-red-500" : "text-[#58BD7D]"
                }`}
              >
                {coin.change}
              </div>
              
            </div>

            {/* On large screens, layout is grid */}
            <div className="hidden md:block md:col-span-1 text-center">
              {index + 1}
            </div>
            <div className="hidden md:flex md:col-span-3 items-center space-x-2">
              <Image
                src={coin.image}
                alt={coin.name}
                width={34}
                height={34}
                className="w-8 h-8"
              />
              <div>
                <span className="font-bold">{coin.name}</span>
                <span className="text-sm  text-gray-500 block md:inline">
                  {coin.symbol}
                </span>
              </div>
            </div>
            <div className="hidden md:block md:col-span-3 text-left font-[500]">
              {coin.price}
            </div>
            <div
              className={`hidden md:block md:col-span-2 text-center md:text-left ${
                coin.change.includes("-") ? "text-red-500" : "text-[#58BD7D]"
              }`}
            >
              {coin.change}
            </div>
            <div className="hidden md:block md:col-span-2">
              <Image
                src={coin.chart}
                alt={coin.name}
                width={100}
                height={50}
                quality={100}
                className="w-full h-6 object-cover"
              />
            </div>
            <div className="hidden md:block md:col-span-1 text-center">
              <button className="border border-[#b3b3b6] text-black font-[500] px-3 py-1 rounded-full">
                Trade
              </button>
            </div>
          </div>
        ))}
         <div className="mt-8 w-full md:hidden md:col-span-1 text-center">
                <button className="border w-full border-[#b3b3b6] text-black font-[500] px-3 py-2 rounded-[30px]">
                View more
              </button>
            </div>
      </div>
    </div>
  );
};

export default MarketTrend;
