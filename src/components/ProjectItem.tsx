import React from 'react';
import { LuArrowUpRight } from 'react-icons/lu';

interface ProjectItemProps {
  img: string;
  title: string;
  desc: string;
  githubLink: string;
  liveLink: string;
  className: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ img, title, desc, githubLink, liveLink, className }) => {
  return (
    <div className='flex justify-center'>
      <div className='lg:w-[320px] w-[270px] h-[420px] rounded-xl border lg:hover:scale-105 transition-transform bg-white border-gray-300 p-2 flex flex-col shadow-lg overflow-hidden'>
        {img && (
          <img
            src={img}
            alt={title}
            className='h-[200px] w-full rounded-t-md object-cover'
            loading='lazy'
          />
        )}

        <div className='p-4 flex flex-col justify-between flex-1'>
          <div>
            <h1 className='inline-flex justify-center text-lg font-semibold text-center w-full'>
              {title}
            </h1>
            <p className='mt-3 text-sm text-gray-600 text-center'>
              {desc}
            </p>
          </div>

          <div className='flex gap-3 mt-4'>
            <a
              href={githubLink}
              target='_blank'
              rel='noopener noreferrer'
              className='w-full flex items-center gap-2 justify-center rounded-lg bg-black px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline-offset-2 focus-visible:outline-black'
            >
              Github <LuArrowUpRight className='mt-1' />
            </a>

            <a
              href={liveLink}
              target='_blank'
              rel='noopener noreferrer'
              className='w-full flex items-center gap-2 justify-center rounded-lg bg-black px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline-offset-2 focus-visible:outline-black'
            >
              Live <LuArrowUpRight className='mt-1' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;