"use client"

import React from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import SvgDivider from '@/components/ui/divider/SvgDivider'
import SvgDivider2 from '@/components/ui/divider/SvgDivider2'
import Projects from '@/components/Projects'
import SvgDivider3 from '@/components/ui/divider/SvgDivider3'
import Work from '@/components/Work'
import Contact from '@/components/Contact'
import dynamic from "next/dynamic";
import SvgDivider4 from '@/components/ui/divider/SvgDivider4'
import MySkills from '@/components/MySkills'


const ScrollVelocity = dynamic(() => import('@/components/ui/Scroller'), {
  ssr: false
});

const page = () => {

  return (
    <div className='flex flex-col justify-center overflow-x-hidden'>
      <Hero/>
      <About/>
      <SvgDivider/>
      <MySkills/>
      <div className='scale-y-[-1] scale-x-[-1]'>
        <SvgDivider2/>
      </div>
      <Projects/>
      <SvgDivider3/>
      <Work/>
      <div className='scale-y-[-1]'>
        <SvgDivider4/>
      </div>
      <Contact/>
      <ScrollVelocity
        texts={[" Let's Connect! "]}
        className="custom-scroll-text"
      />

    </div>
  )
}

export default page
