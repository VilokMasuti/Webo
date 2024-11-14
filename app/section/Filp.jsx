"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import LocomotiveScroll from 'locomotive-scroll';
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useEffect } from 'react';
const cardData = [
  { number: "1", title: "Asset Listing", icon: '/assets/one.png', frontContent: "List Assets", backContent: "View Asset Details", color: "" },
  {
    number: "2", title: "KYC Completion", icon: '/assets/two.png', frontContent: "KYC Process", backContent: "Complete your KYC process effortlessly with your Adhaar and PAN.Ensure a secure and compliant investment experience.", color: " bg-[#d8edf5]"
  },
  { number: "3", title: "Expression of Interest", icon: '/assets/three.png', frontContent: "Submit Interest", backContent: " Adhaar and PAN. Ensure a secure and compliant investment experience.", color: "" },
  { number: "4", title: "Payment Completion", icon: '/assets/four.png', frontContent: "Make Payment", backContent: "Confirm Payment", color: "bg-[#d8edf5]" },
  { number: "5", title: "Legal Documents", icon: '/assets/fiveeee.png', frontContent: "Sign Documents", backContent: "View Legal Docs", color: "bg-[#b0e3f2]" },
  { number: "6", title: "Investor Onboarding", icon: '/assets/six.png', frontContent: "Onboarding", backContent: "Start Onboarding", color: "bg-[#eeeeee]" },
  { number: "7", title: "Fund Allocation", icon: '/assets/seennnn.png', frontContent: "Allocate Funds", backContent: "Fund Distribution", color: "bg-[#b0e3f2]" },
  { number: "8", title: "Payouts", icon: '/assets/rgittt.png', frontContent: "Receive Payouts", backContent: "View Payouts", color: "bg-[#eeeeee]" },
];

const Flip = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    // Cleanup to prevent memory leaks
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);
  const leftColumn = cardData.slice(0, 4);
  const rightColumn = cardData.slice(4);

  return (
    <section className="relative">
      <div className="flex justify-center gap-20 py-10">
        {/* Left Column */}
        <div className="flex flex-col items-end gap-20">
          {leftColumn.map((card, index) => (
            <motion.div
              key={index}
              className={`relative w-64 h-40 rounded-lg shadow-lg`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{ marginRight: `${index * 120}px`, perspective: "1000px" }}
            >
              <motion.div
                className="relative w-full h-full"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Side */}
                <motion.div
                  className={`absolute w-full h-full flex flex-col rounded-lg ${card.color}`}
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(0deg)" }}
                >
                  <motion.div
                    className='absolute left-[230px] top-[8px]'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.4 }}
                  >
                    <Image
                      src={card.icon}
                      alt="Icon"
                      width={20}
                      height={20}
                    />
                  </motion.div>
                  <motion.div
                    className="text-4xl font-bold absolute top-[60px] left-[40px] text-[#000000] font-space-grotesk"
                    initial={{ x: -50 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                  >
                    {card.number}
                  </motion.div>
                  <motion.h3
                    className="font-semibold absolute top-[110px] text-base left-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.6 }}
                  >
                    {card.frontContent}
                  </motion.h3>
                </motion.div>
                {/* Back Side */}
                <motion.div
                  className={`absolute w-full h-full flex flex-col justify-center items-center rounded-lg bg-[#071E40]`}
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <motion.h3
                    className="text-sm text-center text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.6 }}
                  >
                    {card.backContent}
                  </motion.h3>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-start gap-20">
          {rightColumn.map((card, index) => (
            <motion.div
              key={index}
              className={`relative w-64 h-40 rounded-lg shadow-lg border-2 border-[06224D]`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{ marginLeft: `${index * 120}px`, perspective: "1000px" }}
            >
              <motion.div
                className="relative w-full h-full"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Side */}
                <motion.div
                  className={`absolute w-full h-full flex flex-col justify-center items-center rounded-lg ${card.color}`}
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(0deg)" }}
                >
                  <motion.div
                    className='absolute left-[230px] top-[8px]'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.4 }}
                  >
                    <Image
                      src={card.icon}
                      alt="Icon"
                      width={20}
                      height={20}
                    />
                  </motion.div>
                  <motion.div
                    className="text-4xl font-bold absolute top-[60px] left-[40px] text-[#000000] font-space-grotesk"
                    initial={{ x: -50 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                  >
                    {card.number}
                  </motion.div>
                  <motion.h3
                    className="font-semibold absolute top-[110px] text-base left-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.6 }}
                  >
                    {card.frontContent}
                  </motion.h3>
                </motion.div>
                {/* Back Side */}
                <motion.div
                  className={`absolute w-full h-full flex flex-col justify-center items-center rounded-lg bg-[#071E40]`}
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <motion.h3
                    className="text-sm text-center text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.6 }}
                  >
                    {card.backContent}
                  </motion.h3>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Text below the cards */}
      <div className="w-[600px] absolute left-[420px] top-[500px] flex flex-col gap-10">
        {/* Animated Heading 1 with Fade and Slide */}
        <motion.h1
          className="text-[#13B29A] text-[18px] font-bold text-center font-inter ml-[89px]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          How We Work
        </motion.h1>

        {/* Animated Heading 2 with Fade, Slide Up, and Delay */}
        <motion.h2
          className="text-[#031B3D] ml-32 mt-11 text-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          The Investment Lifecycle
        </motion.h2>

        {/* Animated Paragraph with Fade, Slide Up, and Scaling */}
        <motion.p
          className="mt-11 ml-12 text-sm text-[#484848] text-center w-[600px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Embark on a seamless journey from asset listing to payouts. Each step ensures clarity, security, and compliance.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="group bg-[#0a2545]  ml-[250px] mt-11 flex items-center border-[#0a2545] border-2 hover:bg-white hover:text-[#0a2545] text-center duration-1000 text-white  w-[190px]  h-[50px] rounded-md "

        >
          <p className=' ml-10'>  Get Started</p>
          <span className="mt-1 pl-2 duration-1000 rotate-[-37deg] group-hover:rotate-[3deg]">
            <FaArrowRight width={50} height={50} />
          </span>
        </motion.button>
      </div>
    </section>
  );
};

export default Flip;
