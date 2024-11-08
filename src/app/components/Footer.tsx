"use client";

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';



export default function Footer() {
   
  return (
    <footer className="bg-gray-800 text-white py-24">
      <div className="max-w-[112rem] mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left section: Footer text */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-[1.7rem]">
            © 2024 ThapaFlix. All rights reserved.
          </p>
          <p className="text-[1.7rem]">
            Made with ❤️ in Next.js and Tailwind CSS
          </p>
        </div>
        
        {/* Right section: Social media icons */}
        <div className="flex space-x-4">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer ">
            <FaFacebook className="text-[#1877F2] hover:text-gray-400" size={20} />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-[#E4405F] hover:text-gray-400" size={20} />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-[#1DA1F2] hover:text-gray-400" size={20} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-[#0077B5] hover:text-gray-400" size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
