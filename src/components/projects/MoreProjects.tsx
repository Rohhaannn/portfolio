"use client"

import React from 'react';
import { portfolioData } from '@/data/portfolioData'
import { FiExternalLink } from 'react-icons/fi';
import { useTheme } from '@/context/ThemeContext';



type Project = {
  id: number;
  type: string;
  videoUrl: string;
  title: string;
  description: string;
  features: string[];
  bussinessValue: string;
  technicalInfrastructure: string;
  githubUrl: string;
  liveLink: string;
  techStack: string[];
}



const ProjectCard = ({ project, index }: { project: Project; index: number }) => (

  <div className="border border-gray-600 rounded-xl p-6 md:p-8">
    <div
      className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
    >

      <div className="w-full md:w-1/2">
        <div className="aspect-video rounded-lg overflow-hidden">
            <video
              src={project.videoUrl}
              controls
              autoPlay
              loop
              className="w-full h-full object-cover"
            >
              <track
                kind="captions"
                src=""
                srcLang="en"
                label="English captions"
                default
              />
            </video>
        </div>
      </div>

      {/* Details Pane */}
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold ">{project.title}</h3>
        <p className="font-normal">{project.description}</p>


        <div className="flex flex-wrap gap-4">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
            GitHub <FiExternalLink />
          </a>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
            Live Link <FiExternalLink />
          </a>
        </div>

        <div className="flex items-center gap-4 pt-2">
          <h4 className="font-semibold text-sm flex-shrink-0">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className={`bg-gray-300 border border-gray-500 shadow-xl text-sm font-semibold px-4 py-1 rounded-full text-gray-800 hover:bg-blue-600 hover:text-white cursor-default `}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>


    <div className="mt-6">
      <details className="">
        <summary className="font-semibold text-md cursor-pointer">
          View Project Details
        </summary>
        <div className="mt-4 pt-4 border-t border-gray-700 space-y-4">
          <div>
            <h4 className="font-semibold">Features:</h4>
            <ul className="list-disc list-inside space-y-1 mt-2">
              {project.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Business Value:</h4>
            <p className="mt-2">{project.bussinessValue}</p>
          </div>
          <div>
            <h4 className="font-semibold">Technical Infrastructure:</h4>
            <p className="mt-2">{project.technicalInfrastructure}</p>
          </div>
        </div>
      </details>
    </div>
  </div>
);

const MoreProjects = () => {

  const { darkMode } = useTheme();
  const projects: Project[] = portfolioData.moreProjects.projectDetails;

  const majorProjects = projects.filter(
    (project) => project.type === 'major'
  );

  const miniProjects = projects.filter(
    (project) => project.type === 'mini'
  );

  return (
    <div className={`max-w-[1280px] mx-auto p-4 my-16 md:p-8 [font-family:var(--font-ubuntu)] `}>
      <div className="space-y-12">
        <div>
          <h2 className={`text-4xl py-6 font-bold text-center text-[#001b5e] cursor-default ${
            darkMode
              ? "font-bold bg-gradient-to-br from-[#2761f3] to-[#a603f8] text-transparent bg-clip-text"
              : "font-bold bg-gradient-to-b from-[#001b5e] to-[#020bf9] text-transparent bg-clip-text"
          } `}>Major Projects</h2>
          <div className="space-y-10 my-6">
            {majorProjects.map((project, index) => (
              <div
                key={project.id}
                className={`${darkMode ? "bg-[#222] rounded-xl shadow-xl text-white" : "bg-gray-300 rounded-xl text-black"}`}
              >
                <ProjectCard  project={project} index={index} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Mini Projects</h2>
          <div className="space-y-10">

            {miniProjects.map((project, index) => (
              <div
                key={project.id}
                className={`${darkMode ? "bg-[#222] rounded-xl text-white" : "bg-gray-300 rounded-xl text-black"}`}
              >
                <ProjectCard  project={project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreProjects;