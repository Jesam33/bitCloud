import Image from "next/image";
import React from "react";

const Card = ({ imgSrc, percentClass, percentDivClass, divClass }) => {
  return (
    <div className={`${divClass} px-7 py-7`}>
      <Image
        src={imgSrc}
        alt="Example Image"
        width={50}
        height={50}
        quality={100}
        // objectFit="cover"
      />
      <div className="flex items-center w-full justify-between mt-2 gap-3">
        <p
          className="font-[700] text-[#777E90]  text-[12px]"
          style={{ lineHeight: "20px", letterSpacing: "1px" }}
        >
          BTC/USDT
        </p>
        <div className={percentDivClass}>
          <p className={percentClass}>-0.79%</p>
        </div>
      </div>
      <h2
        className="font-[700] text-[#23262F] mt-1 text-[26px]"
        style={{ lineHeight: "32px" }}
      >
        36,641.20
      </h2>
      <p
        className="font-[400] text-[#23262F] text- mt-2 [12px]"
        style={{ lineHeight: "20px" }}
      >
        36,641.20
      </p>
    </div>
  );
};

export default Card;
