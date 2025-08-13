"use client"

import React, { FC } from 'react';
import { FaFilePdf } from 'react-icons/fa';


const ViewResumeBtn: FC = () => {

  const openResume = () => {
    const resumeLink = 'https://drive.google.com/file/d/1q0KyAzilONrRk1USRIQXhXJlZrYbgkNi/view?usp=sharing';
    window.open(resumeLink, '_blank');
  };

  return (
    <button
      className="fixed bottom-4 left-3 bg-blue-800 backdrop-blur-2xl text-white hover:text-black px-4 lg:px-6 py-2 lg:py-4 rounded-full shadow-md flex items-center space-x-2 hover:bg-slate-300 hover:border hover:border-black z-[999]"
      onClick={openResume}
    >
      <FaFilePdf className="size-4 lg:size-6 mr-1 text-sm lg:text-base" />
      <span className='text-sm lg:text-base'>
        View Resume
      </span>
    </button>
  );
};

export default ViewResumeBtn;