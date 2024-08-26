"use client";

import React, { useState } from "react";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const Footer = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <footer className="bg-white w-full py-12 mt-[2%] border-gray-200">
      <div className="mx-auto w-[90%] px-4">
        {/* Mobile Design */}
        <div className="block md:hidden">
          {/* Logo Section */}
          <div className="mb-6">
            <img src="/logo.png" alt="Logo" className="h-10 mx-auto" />
          </div>

          {/* Footer Nav Dropdown */}
          <div className="w-full mb-8">
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="w-full flex justify-between items-center py-3 text-[#23262F] border-b"
            >
              <span className={`${dmSans.className} font-[700] text-[14px]`}>
                FOOTER NAV
              </span>
              <span
                className={`${
                  isNavOpen ? "rotate-180" : ""
                } transform transition-transform`}
              >
                ▼
              </span>
            </button>
            {isNavOpen && (
              <div className="mt-4">
                <p
                  className={`${dmSans.className} font-[700] text-[#777E90] mb-6 text-[14px]`}
                >
                  Exchange
                </p>
                <ul className="space-y-6">
                  <li>
                    <a
                      href="#"
                      className={`${dmSans.className} font-[700] text-[#777E90] text-[14px]`}
                      style={{ lineHeight: "16px" }}
                    >
                      Buy crypto
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`${dmSans.className} font-[700] text-[#777E90] text-[14px]`}
                      style={{ lineHeight: "16px" }}
                    >
                      Market
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`${dmSans.className} font-[700] text-[#777E90] text-[14px]`}
                      style={{ lineHeight: "16px" }}
                    >
                      Learn crypto
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`${dmSans.className} font-[700] text-[#777E90] text-[14px]`}
                      style={{ lineHeight: "16px" }}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="w-full mb-8 text-left">
            <p className={`${dmSans.className} font-[700] text-[12px]`}>
              CONTACT
            </p>
            <address
              className="mt-5 not-italic text-[14px] text-[#23262F]"
              style={{ lineHeight: "24px" }}
            >
              43252 Borer Mountains
              <br />
              Zackerychester
              <br />
              Bahamas
              <br />
              732-528-4945
            </address>
          </div>

          {/* Newsletter Section */}
          <div className="w-full mb-8 text-left">
            <p className={`${dmSans.className} font-[700] text-[12px]`}>
              NEWSLETTER
            </p>
            <p
              className={`${dmSans.className} text-[#23262F] mt-5 text-[14px] font-[400]`}
              style={{ lineHeight: "24px" }}
            >
              Subscribe to our newsletter to get more free design courses and
              resources.
            </p>
            <form className="flex w-full mt-6">
              <div className="flex w-full rounded-[20px] p-2 gap-2 border px-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`${dmSans.className} flex-1 px-4 py-2 font-[400] text-[14px] text-[#777E90] w-10 border-none rounded-[20px] focus:outline-none`}
                />
                <button className="px-3 py-2 bg-blue-500 text-white rounded-[50%] hover:bg-blue-600">
                  →
                </button>
              </div>
            </form>
          </div>

          {/* Footer Bottom Section */}
          <div className="mt-12 border-t pt-4 text-center">
            <p className="text-[#777E90] text-[12px] font-[400] mb-4">
              Copyright © 2021 UIB LLC. All rights reserved
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <img src="/FbLine.png" alt="Facebook" className="h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <img src="/TweetLine.png" alt="Twitter" className="h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <img src="/InstaLine.png" alt="Instagram" className="h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Tablet and Above Design */}
        <div className="hidden md:grid lg:grid-cols-12 gap-8">
          {/* Logo Section */}
          <div className="col-span-3 flex flex-col items-start mb-6">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-16 w-auto mb-4"
            />
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className={`${dmSans.className} font-[700] text-[#777E90] text-[16px]`}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${dmSans.className} font-[700] text-[#777E90] text-[16px]`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${dmSans.className} font-[700] text-[#777E90] text-[16px]`}
                >
                  What We Do
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${dmSans.className} font-[700] text-[#777E90] text-[16px]`}
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${dmSans.className} font-[700] text-[#777E90] text-[16px]`}
                >
                  Jobs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-span-3 mb-6 text-left">
            <p className={`${dmSans.className} font-[700] text-[16px]`}>
              CONTACT
            </p>
            <address
              className="mt-5 not-italic text-[16px] text-[#23262F]"
              style={{ lineHeight: "28px" }}
            >
              43252 Borer Mountains
              <br />
              Zackerychester
              <br />
              Bahamas
              <br />
              732-528-4945
            </address>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-6 mb-6 text-left">
            <p className={`${dmSans.className} font-[700] text-[16px]`}>
              NEWSLETTER
            </p>
            <p
              className={`${dmSans.className} text-[#23262F] mt-5 text-[16px] font-[400]`}
              style={{ lineHeight: "28px" }}
            >
              Subscribe to our newsletter to get more free design courses and
              resources.
            </p>
            <form className="flex w-full mt-6">
              <div className="flex w-full rounded-[20px] p-2 gap-2 border px-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`${dmSans.className} flex-1 px-4 py-2 font-[400] text-[16px] text-[#777E90] border-none rounded-[20px] focus:outline-none`}
                />
                <button className="px-3 py-2 bg-blue-500 text-white rounded-[50%] hover:bg-blue-600">
                  →
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t pt-4 text-center">
          <p className="text-[#777E90] text-[14px] font-[400] mb-4">
            Copyright © 2021 UIB LLC. All rights reserved
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <img src="/FbLine.png" alt="Facebook" className="h-8" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <img src="/TweetLine.png" alt="Twitter" className="h-8" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <img src="/InstaLine.png" alt="Instagram" className="h-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
