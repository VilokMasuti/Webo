'use client'

import { useRef, RefObject } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const Stacking = () => {
  const containerRef: RefObject<HTMLDivElement> = useRef(null)
  const isInView = useInView(containerRef, { once: true })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const y1 = useTransform(scrollYProgress, [0, 0.33], ['100%', '0%'])
  const y2 = useTransform(scrollYProgress, [0.33, 0.66], ['100%', '0%'])
  const y3 = useTransform(scrollYProgress, [0.66, 1], ['100%', '0%'])

  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.33], [0, 1, 1])
  const opacity2 = useTransform(scrollYProgress, [0.33, 0.5, 0.66], [0, 1, 1])
  const opacity3 = useTransform(scrollYProgress, [0.66, 0.8, 1], [0, 1, 1])

  const categories = [
    'Residential Development',
    'Commercial Development',
    'Land Development',
    'Luxury Spec Homes',
  ]

  return (
    <section
      className="relative w-full min-h-[300vh] scroll-smooth"
      ref={containerRef}
    >
      <div className="sticky top-0 flex h-screen overflow-hidden">
        {/* Left Section */}
        <motion.div
          className="w-[40%] flex flex-col h-screen relative ml-[120px]"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <motion.div className="flex flex-col gap-4 mt-[100px]">
            <motion.p
              className="text-xl font-semibold ml-2 text-[#54ccba]"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              Development Portfolio
            </motion.p>
            <motion.h1
              className="text-4xl text-[#031b3d]"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              13+ Years of Development Expertise
            </motion.h1>
            <motion.p
              className="text-base w-[600px]"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Ashton Gray is an industry leader with projects in Houston,
              Austin, and other major cities in Texas. We have built an
              infallible reputation for integrity and high-quality results
              across a diverse class of real estate projects that include
              residential, commercial, luxury-spec, and land development.
            </motion.p>
          </motion.div>

          {/* Category List */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-12 mt-12">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.2 * index, duration: 0.8 }}
              >
                <h3 className="text-xl font-semibold text-[#031b3d] group-hover:text-[#87dbcf] transition-colors duration-1000 cursor-pointer">
                  {category}
                </h3>
                <div className="mt-3 border-b border-[#031b3d] w-[282px] group-hover:border-[#87dbcf] transition-colors duration-1000" />
                <ArrowRight
                  className="absolute top-1 -right-6 text-[#031b3d] group-hover:text-[#87dbcf] transition-all duration-1000 transform -rotate-45 group-hover:rotate-0"
                  size={24}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Section */}
        <div className="w-[35%] h-[45%] relative ml-[100px] mt-[150px]">
          {[
            {
              src: '/assets/home.png',
              alt: 'Residential Development',
              y: y1,
              opacity: opacity1,
            },
            {
              src: '/assets/home2.png',
              alt: 'Commercial Development',
              y: y2,
              opacity: opacity2,
            },
            {
              src: '/assets/home3.png',
              alt: 'Land Development',
              y: y3,
              opacity: opacity3,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              style={{ y: item.y, opacity: item.opacity }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute bottom-8 left-8 bg-opacity-80 p-4 rounded">
                <h3 className="text-2xl font-semibold text-white">
                  {item.alt}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stacking
