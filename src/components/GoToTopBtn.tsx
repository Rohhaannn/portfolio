"use client"

import React, { useState, useEffect, FC } from 'react';
import { FaAngleUp } from 'react-icons/fa';

const GoToTopBtn: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className=" max-w-[1280px] mx-auto fixed bottom-4 right-3 bg-blue-600 backdrop-blur-2xl text-white hover:text-black px-2 lg:px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-slate-300 hover:border hover:border-black z-[999]"
          onClick={scrollToTop}
        >
          <FaAngleUp size={20} className="size-4 lg:size-6" />
        </button>
      )}
    </>
  );
};

export default GoToTopBtn;