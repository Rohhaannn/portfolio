'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectItem from './ProjectItem';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useTheme } from '@/context/ThemeContext';

interface Project {
  id: number;
  imgLink: string;
  title: string;
  desc: string;
  githubLink: string;
  liveLink: string;
  type: 'major' | 'mini';
}

const customScrollbarStyles = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const Projects: React.FC = () => {

  const { darkMode } = useTheme()

  const [filter, setFilter] = useState<'major' | 'mini' | 'all'>('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState<number>(0);

  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const majorProjects = portfolioData.projects.major.map((project) => ({
    ...project,
    id: Number(project.id),
    type: 'major' as const,
  }));

  const miniProjects = portfolioData.projects.mini.map((project) => ({
    ...project,
    id: Number(project.id),
    type: 'mini' as const,
  }));

  const allProjects: Project[] = [...majorProjects, ...miniProjects];

  const filteredProjects =
    filter === 'all'
      ? allProjects
      : allProjects.filter((project) => project.type === filter);

  const checkScrollability = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft + container.clientWidth < container.scrollWidth - 2
      );
    } else {
      setCanScrollLeft(false);
      setCanScrollRight(false);
    }
  }, []);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      checkScrollability();
      setFilter((prev) => prev);
    };

    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 640);
      window.addEventListener('resize', handleResize);
    }

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      checkScrollability();
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
      if (container) {
        container.removeEventListener('scroll', checkScrollability);
      }
    };
  }, [checkScrollability]);

  useEffect(() => {
    if (scrollContainerRef.current && filteredProjects.length > 0) {
      const firstCard = scrollContainerRef.current.children[0] as HTMLElement;
      if (firstCard) {
        setCardWidth(firstCard.offsetWidth);
      }
    }

    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
      const timer = setTimeout(checkScrollability, 50);
      return () => clearTimeout(timer);
    }
  }, [filter, filteredProjects.length, checkScrollability]);

  const scrollLeft = () => {
    if (scrollContainerRef.current && cardWidth > 0) {
      scrollContainerRef.current.scrollBy({
        left: -(cardWidth + 20),
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current && cardWidth > 0) {
      scrollContainerRef.current.scrollBy({
        left: cardWidth + 20,
        behavior: 'smooth',
      });
    }
  };

  const shouldCenterContent =
    (filter === 'major' && isMobile && filteredProjects.length === 1) ||
    (filter !== 'all' && !isMobile && filteredProjects.length <= 2);

  const addContainerPadding = !(
    filter === 'major' &&
    isMobile &&
    filteredProjects.length === 1
  );

  return (
    <div className={`w-full ${darkMode ? "bg-[#111] text-white" : ""}`}>
      <div className="max-w-[1280px] mx-auto">
        <style>{customScrollbarStyles}</style>
        <div id="projects">
          <motion.h1
            className={`text-4xl h-12 mb-10 font-bold text-center text-[#001b5e] cursor-default ${darkMode ? "font-bold bg-gradient-to-br from-[#2761f3] to-[#a603f8] text-transparent bg-clip-text" : "font-bold bg-gradient-to-b from-[#001b5e] to-[#020bf9] text-transparent bg-clip-text"} `}
            initial="hidden"
            whileInView={'show'}
            variants={fadeIn('up', 0.2)}
            viewport={{ once: true, amount: 0.1 }}
          >
            Projects
          </motion.h1>

          <motion.div
            className="relative flex justify-center items-center mb-2"
            initial="hidden"
            whileInView={'show'}
            variants={fadeIn('left', 0.2)}
            viewport={{ once: true, amount: 0.2 }}
          >
            <button
              onClick={() => setFilter('all')}
              className={`mx-2 p-2 px-3 rounded-lg transition-all duration-100 ease-in-out text-sm
                ${
                  filter === 'all'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-400 text-gray-800 hover:bg-gray-300'
                }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('major')}
              className={`mx-2 p-2 px-3 rounded-lg transition-all duration-300 ease-in-out
                ${
                  filter === 'major'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-400 text-gray-800 hover:bg-gray-300'
                }`}
            >
              Major Projects
            </button>
            <button
              onClick={() => setFilter('mini')}
              className={`mx-2 p-2 px-3 rounded-lg transition-all duration-300 ease-in-out
                ${
                  filter === 'mini'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-400 text-gray-800 hover:bg-gray-300'
                }`}
            >
              Mini Projects
            </button>
          </motion.div>

          <motion.div
            className="relative flex justify-center items-center"
            initial="hidden"
            whileInView={'show'}
            variants={fadeIn('right', 0.2)}
            viewport={{ once: true, amount: 0.2 }}
          >
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`absolute left-[-55px] p-2 rounded-xl bg-gray-400 shadow-xl cursor-pointer z-10 transform -translate-y-1/2 top-1/2 transition-colors duration-200 hidden lg:block
                ${
                  canScrollLeft
                    ? 'hover:bg-transparent hover:border hover:border-black'
                    : 'opacity-50 cursor-not-allowed'
                }`}
              aria-label="Scroll left"
            >
              <LuChevronLeft size={25} className="text-gray-700" />
            </button>

            <div
              ref={scrollContainerRef}
              className={`flex flex-nowrap w-full h-[500px] gap-5 items-center overflow-x-auto hide-scrollbar scroll-smooth
                ${shouldCenterContent ? 'justify-center' : ''}
                ${addContainerPadding ? 'px-6' : 'px-0'}`}
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className={`flex-shrink-0 w-[calc(100vw-48px)] sm:w-[340px] md:w-[300px] lg:w-[350px] xl:w-[400px] ${
                      !addContainerPadding ? 'mx-6' : ''
                    }`}
                  >
                    <ProjectItem
                      img={project.imgLink}
                      title={project.title}
                      desc={project.desc}
                      githubLink={project.githubLink}
                      liveLink={project.liveLink}
                    />
                  </div>
                ))
              ) : (
                <p className="w-full text-center text-gray-600">
                  No projects found for this category.
                </p>
              )}
            </div>

            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`absolute right-[-55px] p-2 rounded-xl bg-gray-400 shadow-xl cursor-pointer z-10 transform -translate-y-1/2 top-1/2 transition-colors duration-200 hidden lg:block
                ${
                  canScrollRight
                    ? 'hover:bg-transparent hover:border hover:border-black'
                    : 'opacity-50 cursor-not-allowed'
                }`}
              aria-label="Scroll right"
            >
              <LuChevronRight size={25} className="text-gray-700" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;