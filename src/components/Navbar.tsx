"use client"

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BsMoon, BsSun } from "react-icons/bs";
import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaTwitter,
} from "react-icons/fa";
import { portfolioData } from '../data/portfolioData';
import Link from "next/link";
import Image from "next/image";


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
};

const Navbar: React.FC = () => {

  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [activeLink, setActiveLink] = useState<string>("Works");

  const toggleNav = (): void => setNavOpen(!navOpen);
  const toggleDark = (): void => setDarkMode(!darkMode);

  const socialLinks = (portfolioData as Data).hero.socialLinks;

  const navItems: NavItem[] = [
    { name: "Home", href: "#main" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full top-4 z-50 px-4">
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between text-base px-6 py-2 rounded-2xl shadow-lg backdrop-blur-lg border border-gray-600 ${
          darkMode ? "bg-black/50 text-white" : "bg-white/50 text-black"
        } transition-colors duration-300`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 mb-1">
          {darkMode ?
            <Image
              className="lg:w-20"
              src="https://project-assets-phi.vercel.app/assets/portfolio-images/logo/rohanWhite.png"
              alt="Logo"
              width={60}
              height={60}
            /> :
            <Image
              className="lg:w-20"
              src="https://project-assets-phi.vercel.app/assets/portfolio-images/logo/rohanLogo.png"
              alt="Logo"
              width={60}
              height={60}
            />}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 ">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActiveLink(item.name)}
              className={`relative px-3 py-1 text-[14px] rounded-md transition hover:bg-gray-300 hover:text-black ${
                activeLink === item.name
                  ? "bg-gray-300 shadow-inner text-black"
                  : "bg-transparent"
              }`}
            >
              {item.name}
              {activeLink === item.name && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-violet-500 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center justify-end space-x-3">
          <div
            className={`flex flex-col gap-2 text-xl items-center space-x-3 rounded-lg backdrop-blur-lg px-4 py-2 ${
              darkMode ? "bg-black/50 text-white" : "" } transition-colors duration-300 sm:block hidden`}
          >
            <div className="flex items-center space-x-3 cursor-pointer ">
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

          <button onClick={toggleDark} className="text-base mb-1">
            {darkMode ? <BsSun size={14} /> : <BsMoon size={14} />}
          </button>

          <button className="md:hidden text-2xl" onClick={toggleNav}>
            {navOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div
          className={`md:hidden text-[12px] mt-2 mx-auto max-w-6xl backdrop-blur-lg border border-gray-600 ${
            darkMode ? "bg-gray-900/50 text-white" : "bg-white/50 text-black"
          } rounded-xl shadow-md p-4 space-y-2`}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => {
                setActiveLink(item.name);
                setNavOpen(false);
              }}
              className={`block w-full text-left px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${
                activeLink === item.name ? "font-semibold" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;