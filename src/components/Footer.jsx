import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0B0B0B] border-t border-[#8B5CF6]/30 py-8 px-6 sm:px-16 flex flex-col-reverse sm:flex-row justify-between items-center gap-6 mt-12">
      {/* Left side / Copyright & details */}
      <div className="flex flex-col gap-1.5 text-center sm:text-left">
        <p className="text-white font-medium text-[16px] font-poppins">
          &copy; 2026 Akanksha Bhanage
        </p>
        <p className="text-[#C5C5C5] text-[14px] font-poppins">
          Designed & Developed by Akanksha Bhanage
        </p>
        <p className="text-[#C5C5C5]/70 text-[12px] font-poppins">
          Built with React, Tailwind CSS & Framer Motion
        </p>
      </div>

      {/* Right side / Social links */}
      <div className="flex flex-row gap-6 items-center">
        <a
          href="https://github.com/akanksha-bhanage"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#8B5CF6] transition-all duration-300 transform hover:scale-110 active:scale-95"
          aria-label="GitHub"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/akanksha-bhanage-94a726329"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#8B5CF6] transition-all duration-300 transform hover:scale-110 active:scale-95"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="mailto:akankshabhanage30@gmail.com"
          className="text-white hover:text-[#8B5CF6] transition-all duration-300 transform hover:scale-110 active:scale-95"
          aria-label="Email"
        >
          <FaEnvelope size={22} />
        </a>
        <a
          href="#"
          className="text-white hover:text-[#8B5CF6] transition-all duration-300 transform hover:scale-110 active:scale-95"
          aria-label="Resume"
        >
          <FaFileAlt size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
