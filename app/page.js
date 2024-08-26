"use client";

import Hero from "@/components/Hero";
import Header from "../components/Header"; // Adjust the path if needed
import CryptoTags from "@/components/CryptoTags";
import LearnCrypto from "@/components/LearnCrypto";
import Market from "@/components/Market";
import Become from "@/components/Become";
import TradeAnywhere from "@/components/TradeAnywhere";
import Stay from "@/components/Stay";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div></div>
      <div className=" bg-[#FCFCFD] flex justify-center w-screen">
        <Hero />
      </div>
      <div className="w-screen bg-[#FCFCFD]  flex justify-center mx-auto">
        <CryptoTags />
      </div>
      {/* <div className="w-screen bg-[#FCFCFD] flex justify-center mx-auto">
        <LearnCrypto />
      </div> */}
      <div className="w-screen bg-[#FCFCFD] flex justify-center mx-auto">
        <Market />
      </div>
      <div className="w-screen bg-[#F4F5F6] flex justify-center mx-auto">
        <Become />
      </div>
      <div className="w-screen  flex justify-center mx-auto">
        <TradeAnywhere />
      </div>
      <div className="w-[100%] bg-[#F4F5F6] flex justify-center mx-auto">
        <Stay />
      </div>
      <div className="w-[100%]  flex justify-center mx-auto">
        <HowItWorks />
      </div>
      <div className="w-[100%]  flex justify-center mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
