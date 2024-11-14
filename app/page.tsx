import React from 'react'
import Home from './section/Home'

import Filp from './section/Filp'
import Stacking from './section/Stacking'
const page = () => {
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

export default page
