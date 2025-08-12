"use client"

import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaBehance,
  FaTwitter
} from "react-icons/fa";
import { motion } from "framer-motion";
import { portfolioData } from '@/data/portfolioData';

type SocialIconType = 'twitter' | 'github' | 'linkedin' | 'discord' | 'behance';

interface SocialLink {
  id: string;
  type: SocialIconType;
  link: string;
}

interface FooterData {
  name: string;
  socialLinks: SocialLink[];
}


const getSocialIconComponent = (type: SocialIconType, size: number) => {
  switch (type) {
    case 'twitter':
      return <FaTwitter size={size} />;
    case 'github':
      return <FaGithub size={size} />;
    case 'linkedin':
      return <FaLinkedin size={size} />;
    case 'discord':
      return <FaDiscord size={size} />;
    case 'behance':
      return <FaBehance size={size} />;
    default:
      return null;
  }
};

const Footer: React.FC = () => {
  const footerData = portfolioData.footer as FooterData;
  const { name, socialLinks } = footerData;
  const firstName: string = name.split(' ')[0];

  return (
    <div className="w-screen h-64 bg-[#222]">
      <div
        id="footer"
        className="max-w-[1280px] mx-auto text-center p-4 py-12">
        <div className="flex justify-center mb-6 gap-3 text-white">
          {socialLinks.map((item: SocialLink) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className="cursor-pointer border border-white text-xl lg:text-2xl p-4 rounded-2xl hover:border hover:border-[#01D293] hover:text-[#01D293] hover:scale-110 transition-transform duration-200"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1, transition: { duration: 0.3, ease: "easeInOut"} }}
              >
                {getSocialIconComponent(item.type, 25)}
              </motion.div>
            </a>
          ))}
        </div>

        <h5 className="text-lg text-center text-white cursor-default">
          &copy; {new Date().getFullYear()} - Developed by{" "}
          <span className="font-bold bg-gradient-to-l from-[#73ff00] to-[#3CB371] text-transparent bg-clip-text cursor-pointer hover:underline">{firstName}</span> with ❤ | All rights reserved.
        </h5>
      </div>
    </div>
  );
};

export default Footer;