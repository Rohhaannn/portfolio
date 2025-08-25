import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

const CountryCity = () => {
  return (
    <div className='flex flex-row justify-center items-center gap-2 py-0.5'>
      <FaLocationDot size={18} className='text-red-500'/> India/Pune
    </div>
  )
}

export default CountryCity
