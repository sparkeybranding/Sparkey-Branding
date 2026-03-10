"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import InvertButton from "./InvertButton";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-24 px-4 md:px-8 border-t border-black/10 selection:bg-black selection:text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 md:gap-16">
        <div className="flex flex-col max-w-sm w-full">
          <Link href="/" className="relative group inline-block mb-6">
            <div className="relative w-40 md:w-48 h-10 md:h-12 brightness-0">
              <Image 
                src="/images/footer_logo.png" 
                alt="Sparkey Branding Logo" 
                fill 
                className="object-contain object-left"
              />
            </div>
            <motion.div 
              className="absolute -bottom-2 left-0 h-px bg-black"
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.5, ease: "circOut" }}
            />
          </Link>
          <p className="font-poppins font-light text-sm opacity-60 leading-relaxed">
            Upscale branding and web design delivered with high-velocity precision. Design at the speed of light.
          </p>
        </div>

        <div className="flex gap-16 font-poppins text-sm">
          <div className="flex flex-col gap-4">
            <span className="uppercase tracking-[0.2em] font-medium opacity-40 mb-2">Navigation</span>
            <Link href="/" className="hover:opacity-60 transition-opacity">Home</Link>
            <Link href="/graphic-design" className="hover:opacity-60 transition-opacity">Graphic Design</Link>
            <Link href="/web-design" className="hover:opacity-60 transition-opacity">Web Design</Link>
            <Link href="/portfolio" className="hover:opacity-60 transition-opacity">Portfolio</Link>
          </div>
          
          <div className="flex flex-col gap-4">
            <span className="uppercase tracking-[0.2em] font-medium opacity-40 mb-2">Socials</span>
            <a href="#" className="hover:opacity-60 transition-opacity">Instagram</a>
            <a href="#" className="hover:opacity-60 transition-opacity">Twitter / X</a>
            <a href="#" className="hover:opacity-60 transition-opacity">LinkedIn</a>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end">
          <span className="uppercase tracking-[0.2em] font-medium opacity-40 font-poppins text-sm mb-6">Start a Project</span>
          <InvertButton href="/inquiry" className="px-6 py-3 text-xs font-poppins">
            Book Your Launch
          </InvertButton>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-xs font-poppins opacity-40">
        <p>&copy; {new Date().getFullYear()} Sparkey! Branding. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
          <Link href="#" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
