'use client';

import React from 'react';
import Image from 'next/image';
import { FaCaretDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <section className="w-full fixed bg-slate-50 shadow-lg z-10 h-[80px]">
      {/* Desktop View */}
      <div className="max-sm:hidden flex items-center justify-between mt-4">
        {/* Logo Animation */}
        <motion.div
          className="img ml-[11rem]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 25 }}
        >
          <Image
            src={'/assets/logo.png'}
            className="object-contain"
            alt="logo"
            width={110}
            height={110}
          />
        </motion.div>

        {/* Navigation Menu Animation */}
        <motion.div
          className="ml-32"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 100, damping: 25 }}
        >
          <ul className="flex text-[1rem] font-sans text-black cursor-pointer gap-10">
            <motion.li
              className="text-[#87dbcf]"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              Home
            </motion.li>
            <motion.li
              className="hover:text-[#87dbcf] duration-1000"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              About Us
            </motion.li>
            <motion.li
              className="hover:text-[#87dbcf] duration-1000"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              Opportunities
            </motion.li>
            <motion.li
              className="hover:text-[#87dbcf] duration-1000 flex"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              Resources
              <span className="pl-2 pt-[0.3rem]">
                <FaCaretDown />
              </span>
            </motion.li>
            <motion.li
              className="hover:text-[#87dbcf] duration-1000"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              Contact Us
            </motion.li>
          </ul>
        </motion.div>

        {/* Buttons Animation */}
        <motion.div
          className="pr-[140px] flex gap-5"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 100, damping: 25 }}
        >
          <button
            className="group bg-[#0a2545] flex items-center border-[#0a2545] border-2 hover:bg-white hover:text-[#0a2545] duration-1000 text-white px-3 py-3 rounded"
          >
            Sign up
            <span className="mt-1 pl-2 duration-1000 rotate-[-37deg] group-hover:rotate-[3deg]">
              <FaArrowRight width={50} height={50} />
            </span>
          </button>
          <button
            className="group bg-[#0a2545] flex items-center border-[#0a2545] border-2 hover:bg-white hover:text-[#0a2545] duration-1000 text-white px-3 py-3 rounded"
          >
            Schedule Meeting
            <span className="mt-1 pl-2 duration-1000 rotate-[-37deg] group-hover:rotate-[3deg]">
              <FaArrowRight width={50} height={50} />
            </span>
          </button>
        </motion.div>
      </div>

      {/* //! Mobile view */}
      <div className="flex items-center justify-between max-sm:px-4 max-sm:py-2 md:hidden lg:hidden">
        {/* Logo */}
        <div className="max-sm:ml-4">
          <Image
            src="/assets/logo.png"
            alt="logo"
            className="object-contain"
            width={100}
            height={100}
          />
        </div>

        {/* Mobile Navigation Menu */}
        <div className="text-black">
          <Sheet>
            {/* Trigger Button */}
            <SheetTrigger className="text-white bg-[#0a2545] px-4 py-2 rounded-md hover:bg-[#1c3a63] duration-300">
              Menu
            </SheetTrigger>

            {/* Sheet Content */}
            <SheetContent side="top" className="bg-white shadow-lg rounded-b-lg">
              <div className="h-[50%] flex flex-col items-start p-6">
                <ul className="space-y-4 font-medium text-[1rem] font-sans text-black cursor-pointer">
                  <li className="text-[#87dbcf]">Home</li>
                  <li className="hover:text-[#87dbcf] duration-300">About Us</li>
                  <li className="hover:text-[#87dbcf] duration-300">Opportunities</li>
                  <li className="hover:text-[#87dbcf] duration-300 flex items-center">
                    Resources
                    <span className="pl-2">
                      <FaCaretDown />
                    </span>
                  </li>
                  <li className="hover:text-[#87dbcf] duration-300">Contact Us</li>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
};

export default Header;
