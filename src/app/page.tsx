import React from 'react'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import SvgDivider from '@/components/ui/divider/SvgDivider'

const page = () => {

  return (
    <div className='flex flex-col gap-y-10 overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <SvgDivider/>
    </div>
  )
}

export default page
