"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#FCFCFD] w-full" style={{ borderBottom: '1px solid #F5F5F5' }}>
      <div className="flex justify-between items-center h-[70px] px-5 sm:px-8 md:px-10 lg:px-16 py-[20px] md:py-[40px]">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="flex items-center pr-4 md:pr-[40%] lg:pr-[30%]" style={{ borderRight: "1px solid #E6E8EC" }}>
            <Image src="/Logo.png" alt="logo" width={30} height={30} quality={100} />
            <h1 className="text-2xl font-[600] ml-2" style={{ letterSpacing: "1px" }}>Bitcloud</h1>
          </div>
        </div>

        {/* Desktop and Tablet Navigation Links */}
        <div className="hidden md:hidden sm:flex ml-[5%] md:ml-[10%]">
          <ul className={`${dmSans.className} flex text-[15px] sm:text-[16px] md:text-[17px] gap-6 sm:gap-8 md:gap-10`}>
            <Link href="/">Exchange</Link>
            <Link href="/">
              <select className="bg-transparent">
                <option>Buy Crypto</option>
              </select>
            </Link>
            <Link href="/">Market</Link>
            <Link href="/">Discover</Link>
          </ul>
        </div>

        {/* Language and Auth Buttons */}
        <div className="hidden sm:flex items-center gap-3 sm:gap-4 md:gap-6">
          <select className={`${dmSans.className}  lg:flex bg-transparent font-[700]`}>
            <option>EN/USD</option>
          </select>
          <div className="flex gap-4 sm:gap-5 md:gap-6">
            <Button
              btnLabel="Sign up"
              btnType="submit"
              btnClass={`${dmSans.className} px-3 py-2 sm:px-5 sm:py-3 md:px-6 md:py-1 text-white text-[12px] sm:text-[13px] md:text-[13px] lg:text-[14px] font-[500] rounded-[90px] bg-[#3772FF]`}
            />
            <Button
              btnLabel="Login"
              btnType="submit"
              btnClass={`${dmSans.className} px-3 py-2 sm:px-5 sm:py-3 md:px-7 md:py-3 text-[#23262F] text-[12px] sm:text-[13px] md:text-[14px] font-[600] rounded-[90px] border border-[#E6E8EC]`}
            />
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="sm:hidden md:flex lg:hidden flex items-center ">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#23262F] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden md:flex flex flex-col items-start px-5 pb-4 space-y-2">
          <Link href="/" className={`${dmSans.className} text-[17px]`}>Exchange</Link>
          <Link href="/">
            <select className="bg-transparent text-[17px]">
              <option>Buy Crypto</option>
            </select>
          </Link>
          <Link href="/" className={`${dmSans.className} text-[17px]`}>Market</Link>
          <Link href="/" className={`${dmSans.className} text-[17px]`}>Discover</Link>
          <div className="mt-4 w-full flex flex-col gap-2">
            <Button
              btnLabel="Sign up"
              btnType="submit"
              btnClass={`${dmSans.className} w-full text-white text-[14px] font-[500] rounded-[90px] bg-[#3772FF] py-2`}
            />
            <Button
              btnLabel="Login"
              btnType="submit"
              btnClass={`${dmSans.className} w-full text-[#23262F] text-[14px] font-[600] rounded-[90px] border border-[#E6E8EC] py-2`}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
