
"use client"

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BsMoon, BsSun } from "react-icons/bs";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaTwitter,
} from "react-icons/fa";
import { portfolioData } from '../data/portfolioData';
import Link from "next/link";
import Image from "next/image";
import Clock from "./Clock";
import CountryCity from "./CountryCity";
import { useTheme } from '@/context/ThemeContext';

interface Data {
  hero: {
    socialLinks: {
      github: string;
      linkedin: string;
      discord: string;
      behance: string;
      twitter: string;
    };
  };
}

type NavItem = {
  name: string;
  href: string;
  subItems?: NavItem[];
};

const Navbar: React.FC = () => {

  const { darkMode, toggleDark } = useTheme();

  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("Works");
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleNav = (): void => setNavOpen(!navOpen);

  const toggleSubMenu = (name: string): void => {
    setOpenSubMenu(openSubMenu === name ? null : name);
  };

  const socialLinks = (portfolioData as Data).hero.socialLinks;

  const navItems: NavItem[] = [
    { name: "Home", href: "/#main" },
    {
      name: "About",
      href: "/#about",
      subItems: [
        { name: "More About Me", href: "/about" },
        { name: "Github Contributions", href: "/about#githubcontributions" },
      ],
    },
    {
      name: "Skills",
      href: "/#skills",
      subItems: [{ name: "Skills and Technologies", href: "/skillsandtech" }],
    },
    {
      name: "Projects",
      href: "/#projects",
      subItems: [
        { name: "Ongoing Projects", href: "/projects#ongoingprojects" },
        { name: "Upcoming Projects", href: "/projects#upcomingprojects" },
      ],
    },
    {
      name: "Work",
      href: "/#work",
      subItems: [{ name: "Explore My Journey", href: "/workJourney" }],
    },
    {
      name: "Contact",
      href: "/#contact",
      subItems: [{ name: "Contact Info", href: "/contactInfo" }],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="fixed w-full top-4 z-50 px-4">

      <div className={`absolute left-10 top-0 w-36 flex items-center justify-center text-base font-semibold px-4 py-3 rounded-2xl shadow-lg backdrop-blur-lg border border-gray-600 ${darkMode ? "bg-black/50 text-white" : "bg-white/50 text-black"} transition-colors duration-300 sm:block hidden`}>
        <CountryCity />
      </div>

      <div
        className={`max-w-6xl mx-auto flex items-center justify-between text-base px-6 py-2 rounded-2xl shadow-lg backdrop-blur-lg border border-gray-600 ${darkMode ? "bg-black/50 text-white" : "bg-white/50 text-black"} transition-colors duration-300`}
      >

        <Link href="/" className="flex items-center space-x-2 mb-1">
          {darkMode ?
            <Image
              className="lg:w-20"
              src="https://project-assets-phi.vercel.app/assets/portfolio-images/logo/rohanWhite.png"
              alt="Logo"
              width={60}
              height={60}
              onClick={scrollToTop}
            /> :
            <Image
              className="lg:w-20"
              src="https://project-assets-phi.vercel.app/assets/portfolio-images/logo/rohanLogo.png"
              alt="Logo"
              width={60}
              height={60}
              onClick={scrollToTop}
            />}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            item.subItems ? (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  onClick={() => setActiveLink(item.name)}
                  className={`relative px-3 py-1 text-[14px] rounded-md transition hover:bg-gray-300 hover:text-black ${activeLink === item.name ? "bg-gray-300 shadow-inner text-black" : "bg-transparent"}`}
                >
                  {item.name}
                  {activeLink === item.name && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-violet-500 rounded-full" />
                  )}
                </Link>
                <ul className={`absolute left-0 mt-4 w-72 rounded-md shadow-lg p-4 invisible opacity-0 backdrop-blur-xl group-hover:visible group-hover:opacity-100 transition-all  duration-300 ${darkMode ? "bg-black" : "bg-white"}`}>
                  <div className="flex flex-row gap-2 justify-between items-center">
                    <div className="relative w-[120px] h-[210px] shrink-0 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={
                          darkMode
                            ? "https://project-assets-phi.vercel.app/assets/nextjs-portfolio/roWhitebg.PNG"
                            : "https://project-assets-phi.vercel.app/assets/nextjs-portfolio/roBlackbg.PNG"
                        }
                        alt="subItem dropdown logo"
                        width={120}
                        height={210}
                        className="w-full h-full object-cover rounded-md opacity-30 transition-transform duration-300 border-1"
                      />

                      {/* Gradient Overlay Text */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                        <div className="text-white text-left">
                          <h3 className="text-xl font-bold"> My <span className="text-blue-600"> Portfolio </span> </h3>
                          <p className="text-xs mt-1">
                            A modern platform to visualize my projects and skills.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      {item.subItems.map((subItem) => (
                        <div key={subItem.name} >
                          <div className="w-full h-full rounded-md ">
                            <li key={subItem.name} >
                              <Link
                                href={subItem.href}
                                className={`block px-4 py-3 text-base rounded-lg text-center ${darkMode ? "hover:bg-white/20 text-white hover:text-white " : "hover:bg-black/20 text-black"}  `}
                                onClick={() => {
                                  setActiveLink(subItem.name);
                                }}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ul>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveLink(item.name)}
                className={`relative px-3 py-1 text-[14px] rounded-md transition hover:bg-gray-300 hover:text-black ${activeLink === item.name ? "bg-gray-300 shadow-inner text-black" : "bg-transparent"}`}
              >
                {item.name}
                {activeLink === item.name && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-violet-500 rounded-full" />
                )}
              </Link>
            )
          ))}
        </nav>


        <div className="flex items-center justify-end space-x-3">
          <div className={`flex flex-col gap-2 text-xl items-center space-x-3 rounded-lg backdrop-blur-lg px-4 py-1 border border-slate-700 ${darkMode ? "bg-black/50 text-white" : "bg-white/50 text-black"} transition-colors duration-300 sm:block hidden`}>
            <div className="flex items-center space-x-3 cursor-pointer ">
              <Link href={socialLinks.twitter} target="_blank" className="w-5 h-5 mt-1">
                <FaTwitter size={14} />
              </Link>
              <Link href={socialLinks.github} target="_blank" className="w-5 h-5 mt-1">
                <FaGithub size={14} />
              </Link>
              <Link href={socialLinks.linkedin} target="_blank" className="w-5 h-5 mt-1">
                <FaLinkedin size={14} />
              </Link>
              <Link href={socialLinks.discord} target="_blank" className="w-5 h-5 mt-1">
                <FaDiscord size={14} />
              </Link>
            </div>
          </div>

          <button onClick={toggleDark} className={`text-base border border-slate-700 rounded-lg p-2 ${darkMode ? "bg-black text-white" : "bg-white/70 text-black"}`}>
            {darkMode ? <BsSun size={14} /> : <BsMoon size={14} />}
          </button>

          <button className="md:hidden text-2xl" onClick={toggleNav}>
            {navOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div
          className={`md:hidden text-base mt-2 mx-auto max-w-6xl backdrop-blur-lg border border-gray-600 ${darkMode ? "bg-gray-900/50 text-white" : "bg-white/50 text-black"} rounded-xl shadow-md p-4 space-y-2`}
        >
          {navItems.map((item) => (
            <div key={item.name}>
              {item.subItems ? (
                <>
                  <button
                    onClick={() => toggleSubMenu(item.name)}
                    className={`flex items-center justify-between w-full px-6 py-2 font-semibold rounded transition-colors duration-200 ${darkMode ? "hover:bg-white/20" : "hover:bg-gray-200"}`}
                  >
                    <span>{item.name}</span>
                    {openSubMenu === item.name ? <LuChevronUp /> : <LuChevronDown />}
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openSubMenu === item.name ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <ul className="pl-4 mt-2 space-y-1">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            href={subItem.href}
                            onClick={() => {
                              setActiveLink(subItem.name);
                              setNavOpen(false);
                            }}
                            className={`block w-full text-left px-6 py-2 rounded transition-colors duration-200 ${darkMode ? "hover:bg-white/10" : "hover:bg-gray-300"}`}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => {
                    setActiveLink(item.name);
                    setNavOpen(false);
                  }}
                  className={`block w-full text-left px-6 py-2 rounded font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 ${activeLink === item.name ? "font-semibold" : ""}`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className={`flex flex-col gap-2 text-xl items-center space-x-3 rounded-lg backdrop-blur-lg px-4 py-2 ${darkMode ? "bg-black/50 text-white" : ""} transition-colors duration-300`}>
            <div className="flex items-center justify-around gap-14 cursor-pointer ">
              <a href={socialLinks.twitter} target="_blank" className="w-5 h-5 mt-1">
                <FaTwitter size={14} />
              </a>
              <a href={socialLinks.github} target="_blank" className="w-5 h-5 mt-1">
                <FaGithub size={14} />
              </a>
              <a href={socialLinks.linkedin} target="_blank" className="w-5 h-5 mt-1">
                <FaLinkedin size={14} />
              </a>
              <a href={socialLinks.discord} target="_blank" className="w-5 h-5 mt-1">
                <FaDiscord size={14} />
              </a>
            </div>
          </div>
        </div>
      )}

      <div className={`absolute right-6 top-0 w-40 flex items-center justify-center text-base font-semibold px-3 py-3 rounded-2xl shadow-lg backdrop-blur-lg border border-gray-600 ${darkMode ? "bg-black/50 text-white" : "bg-white/50 text-black"} transition-colors duration-300 sm:block hidden`}>
        <Clock />
      </div>

    </header>
  );
};

export default Navbar;