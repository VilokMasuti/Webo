/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { FlipWords } from '../../components/ui/flip-words'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import { CiStar } from 'react-icons/ci'
const Home = () => {
  const people = [
    {
      id: 1,
      name: 'John Doe',
      designation: 'Software Engineer',
      image:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
    },
    {
      id: 2,
      name: 'Robert Johnson',
      designation: 'Product Manager',
      image:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 3,
      name: 'Jane Smith',
      designation: 'Data Scientist',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
  ]
  const words = ['Growth', 'Equity', 'Performance']
  const [offset1, setOffset1] = useState(0)
  const [offset2, setOffset2] = useState(0)
  const constraintsRef = useRef(null)
  useEffect(() => {
    const animateWater = () => {
      setOffset1((prevOffset) => (prevOffset + 1) % 100)
      setOffset2((prevOffset) => (prevOffset + 1.5) % 100)
    }

    const intervalId = setInterval(animateWater, 50)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-b max-sm:flex max-sm:flex-col w-full max-sm:gap-10 from-[#031b3d] to-[#19495c] mt-20">
      {/* Top Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        className="gap-16 items-center justify-between flex mt-[-4%] ml-28"
      >
        <div className="mt-16">
          <motion.h1
            className="text-5xl text-white font-bold mt-[80px] tracking-wide ml-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Maximize
          </motion.h1>
          <motion.h2
            className="text-[#87dbcf] text-5xl ml-[70px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <FlipWords words={words} /> <br />
          </motion.h2>
          <motion.p
            className="text-start text-white text-s ml-[80px] w-[500px] pt-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Break free from the ordinary with Ashton Gray&apos;s exclusive U.S.
            real estate investments. Explore a world of secure, high-yield
            investments.
          </motion.p>
          <div className="ml-[80px] mt-10 flex gap-5">
            <button className="group flex items-center hover:border-2 duration-1000 text-white px-3 py-3 rounded">
              How it works
              <span className="mt-1 pl-2 duration-1000 rotate-[-40deg] group-hover:rotate-[3deg]">
                <FaArrowRight width={50} height={50} />
              </span>
            </button>
            <button className="group bg-[#87dbcf] flex items-center border-[#87dbcf] border-2 hover:bg-transparent hover:text-white duration-1000 text-white px-4 py-4 rounded">
              Schedule Meeting
              <span className="mt-1 pl-2 duration-1000 rotate-[-40deg] group-hover:rotate-[3deg]">
                <FaArrowRight width={50} height={50} />
              </span>
            </button>
          </div>

          <div className="flex pt-9 gap-2 ml-24">
            <AnimatedTooltip items={people} />

            <div className="flex relative text-[#87dbcf] mt-4 gap-2 flex-row ml-[25px]">
              <motion.div
                className="flex gap-2"
                initial={{ opacity: 0, x: -50 }} // Starts with opacity 0 and moves left
                animate={{ opacity: 1, x: 0 }} // Fades in and moves to normal position
                transition={{
                  delay: 0.5,
                  type: 'spring',
                  stiffness: 100,
                  damping: 25,
                }}
              >
                <CiStar size={30} />
                <CiStar size={30} />
                <CiStar size={30} />
                <CiStar size={30} />
              </motion.div>
            </div>

            <motion.h1
              className="text-[#eae3e3] absolute top-[480px] left-[380px] font-medium text-sm"
              initial={{ opacity: 0, y: 20 }} // Starts slightly lower with opacity 0
              animate={{ opacity: 1, y: 0 }} // Fades in and moves to normal position
              transition={{ delay: 1.5, duration: 1 }}
            >
              1000+ Global Investors
            </motion.h1>
          </div>
        </div>

        <motion.div
          className="w-[40%] h-[390px] bg-stone-50 mt-[160px] mr-32 relative rounded-[5%] transition-transform duration-300 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <Image
            src="/assets/home.png"
            className="object-cover rounded-[5%]"
            alt="Home"
            width={620}
            height={600}
          />

          <motion.div
            className="absolute w-[30%] flex gap-4 flex-col items-center justify-center h-[150px] bg-gradient-to-r from-[#87dbcf]/20 to-[#ffffff]/10 backdrop-blur-2xl border border-white/30 shadow-xl top-[-60px] left-[-90px] rounded-xl"
            whileHover={{ scale: 1.05, rotate: 5 }}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          >
            <h1 className="text-[#eae3e3] font-medium text-sm">
              RBI ODD PROCESS
            </h1>
            <Image
              src="/assets/Vector.png"
              className="object-contain"
              alt="Vector"
              width={70}
              height={70}
            />
          </motion.div>

          <motion.div
            className="absolute w-[55%] flex gap-2 flex-row items-center justify-center h-[60px] bg-gradient-to-r from-[#87dbcf]/20 to-[#ffffff]/10 backdrop-blur-2xl border border-white/30 shadow-xl top-[-60px] left-[330px] rounded-xl"
            whileHover={{ scale: 1.05, rotate: -5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <h1 className="text-[#eae3e3] font-medium text-sm">
              25L <br /> Minimum Investment
            </h1>
            <span className="text-[#87dbcf] rotate-[-90deg] absolute top-4 left-[190px]">
              <FaArrowRight size={10} />
            </span>
            <Image
              src="/assets/line.png"
              className="object-contain"
              alt="Line"
              width={100}
              height={100}
            />
          </motion.div>

          <motion.div
            className="absolute w-[55%] flex gap-2 flex-row items-center justify-center h-[60px] bg-gradient-to-r from-[#87dbcf]/20 to-[#ffffff]/10 backdrop-blur-2xl border top-[310px] left-[-70px] border-white/30 shadow-xl rounded-xl"
            whileHover={{ scale: 1.05, rotate: 5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <Image
              src="/assets/current.png"
              alt="Current"
              className="absolute inset-0 opacity-20 top-[-2px] object-contain rotate-[-19deg]"
              width={150}
              height={150}
            />
            <h1 className="text-[#eae3e3] font-medium text-sm">
              +3 Years Project Tenure
            </h1>
            <Image
              src="/assets/Rectanglell.png"
              alt="Rectangle"
              width={100}
              height={100}
              className="w-10 h-28 absolute top-[50px] left-2"
            />
          </motion.div>

          <motion.div
            className="absolute w-[180px] h-[180px] rounded-full flex flex-col items-center justify-center bg-gradient-to-r from-[#87dbcf]/20 to-[#ffffff]/10 backdrop-blur-2xl border border-white/30 shadow-xl top-[290px] left-[460px] overflow-hidden"
            whileHover={{ scale: 1.05, rotate: 5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <motion.div
              className="relative z-10 flex flex-col items-center justify-center h-full w-full"
              whileHover={{ y: -5 }}
            >
              <motion.h1
                className="text-[#eae3e3] text-3xl font-bold"
                whileHover={{ scale: 1.1 }}
              >
                18%
              </motion.h1>
              <motion.p
                className="text-sm text-center pt-2 text-[#eae3e3]"
                whileHover={{ y: 2 }}
              >
                Return <br /> Investment
              </motion.p>
            </motion.div>

            <div className="absolute inset-0 flex items-end justify-center overflow-hidden rounded-full">
              <motion.div
                className="absolute bottom-0 w-full h-[45%]"
                whileHover={{ height: '55%' }}
                style={{
                  background:
                    'linear-gradient(180deg, #87dbcf 0%, #5f9ea0 100%)',
                  maskImage: `
            url("data:image/svg+xml,%3Csvg width='180' height='81' viewBox='0 0 180 81' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 81 Q22.5 ${
              67.5 + Math.sin(offset1 * 0.1) * 5
            } 45 ${67.5 + Math.sin((offset1 + 25) * 0.1) * 5} Q67.5 ${
                    67.5 + Math.sin((offset1 + 50) * 0.1) * 5
                  } 90 ${67.5 + Math.sin((offset1 + 75) * 0.1) * 5} Q112.5 ${
                    67.5 + Math.sin((offset1 + 100) * 0.1) * 5
                  } 135 ${67.5 + Math.sin((offset1 + 125) * 0.1) * 5} Q157.5 ${
                    67.5 + Math.sin((offset1 + 150) * 0.1) * 5
                  } 180 ${
                    67.5 + Math.sin((offset1 + 175) * 0.1) * 5
                  } L180 81 L0 81 Z' fill='%23000'/%3E%3C/svg%3E"),
            url("data:image/svg+xml,%3Csvg width='180' height='81' viewBox='0 0 180 81' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 81 Q22.5 ${
              70.5 + Math.sin(offset2 * 0.1) * 4
            } 45 ${70.5 + Math.sin((offset2 + 25) * 0.1) * 4} Q67.5 ${
                    70.5 + Math.sin((offset2 + 50) * 0.1) * 4
                  } 90 ${70.5 + Math.sin((offset2 + 75) * 0.1) * 4} Q112.5 ${
                    70.5 + Math.sin((offset2 + 100) * 0.1) * 4
                  } 135 ${70.5 + Math.sin((offset2 + 125) * 0.1) * 4} Q157.5 ${
                    70.5 + Math.sin((offset2 + 150) * 0.1) * 4
                  } 180 ${
                    70.5 + Math.sin((offset2 + 175) * 0.1) * 4
                  } L180 81 L0 81 Z' fill='%23000'/%3E%3C/svg%3E")
          `,
                  maskRepeat: 'repeat-x, repeat-x',
                  maskSize: '180px 81px, 180px 81px',
                  maskPosition: `${-offset1}px bottom, ${-offset2}px bottom`,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home
