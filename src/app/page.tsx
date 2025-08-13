"use client"

import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import SvgDivider from '@/components/ui/divider/SvgDivider'
import Skills from '@/components/Skills'
import SvgDivider2 from '@/components/ui/divider/SvgDivider2'
import Projects from '@/components/Projects'
import SvgDivider3 from '@/components/ui/divider/SvgDivider3'
import Work from '@/components/Work'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import dynamic from "next/dynamic";


const ScrollVelocity = dynamic(() => import('@/components/ui/Scroller'), {
  ssr: false
});

const page = () => {

  return (
    <div className='flex flex-col justify-center overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <SvgDivider/>
      <Skills/>
      <div className='scale-y-[-1] scale-x-[-1]'>
        <SvgDivider2/>
      </div>
      <Projects/>
      <SvgDivider3/>
      <Work/>
      <div className='scale-y-[-1]'>
        <SvgDivider/>
      </div>
      <Contact/>
      <ScrollVelocity
        texts={[" Let's Connect! "]}
        className="custom-scroll-text"
      />
      <Footer/>
    </div>
  )
}

export default page
