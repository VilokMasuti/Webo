'use client'
import React from 'react'
import Home from './section/Home'
import LocomotiveScroll from 'locomotive-scroll'
import Filp from './section/Filp'
import { useEffect } from 'react'
import Stacking from './section/Stacking'
const Page = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll()

    // Cleanup to prevent memory leaks
    return () => {
      locomotiveScroll.destroy()
    }
  }, [])
  return (
    <main className=" w-full h-screen  ">
      <section
        className=" flex
       flex-col   "
      >
        <Home />
        <Filp />
        <Stacking />
      </section>
    </main>
  )
}

export default Page
