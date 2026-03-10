"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X, Facebook, Instagram } from "lucide-react";

export default function Navigation() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Graphic Design", href: "/graphic-design" },
    { name: "Web Design", href: "/web-design" },
  ];

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-4 left-4 right-4 md:left-8 md:right-8 z-[100] flex justify-center pointer-events-none"
      >
        <div className="bg-black/40 backdrop-blur-2xl text-white px-6 md:px-8 py-4 md:py-5 rounded-full flex items-center justify-between w-full max-w-5xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] pointer-events-auto border border-white/20 ring-1 ring-white/10 relative overflow-hidden">
          
          {/* Logo Integration */}
          <Link href="/" className="relative z-[110] group" onClick={() => setIsOpen(false)}>
            <div className="w-40 md:w-56 h-8 md:h-10 relative group-hover:scale-105 transition-transform duration-300">
              <Image 
                src="/images/sparkey_logo_white.png" 
                alt="Sparkey Branding Logo" 
                fill 
                className="object-contain object-left pointer-events-none"
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12 text-xs md:text-sm font-poppins font-bold uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-white/60 transition-colors">
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-6 border-l border-white/20 pl-6">
              <Link href="https://www.instagram.com/sparkeybranding" target="_blank" className="hover:text-white/60 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://www.facebook.com/SparkeyBranding" target="_blank" className="hover:text-white/60 transition-colors">
                <Facebook size={20} />
              </Link>
            </div>
          </nav>
          
          {/* Mobile / Tablet Controls */}
          <div className="flex items-center gap-4 relative z-[110]">
            <Link href="/inquiry" className="group relative px-5 md:px-6 py-2.5 md:py-3 bg-white text-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 flex-shrink-0 shadow-lg" onClick={() => setIsOpen(false)}>
              <div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              <span className="relative z-10 text-[10px] md:text-sm font-poppins font-bold uppercase tracking-widest flex items-center gap-2">
                Let's Go 📱
              </span>
            </Link>

            {/* Hamburger Icon */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:text-white/60 transition-colors pointer-events-auto"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-3xl lg:hidden z-[90] flex flex-col items-center justify-center p-8 pointer-events-auto"
          >
            <nav className="flex flex-col items-center gap-6 text-xl font-poppins font-bold uppercase tracking-[0.3em] text-white">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="hover:italic hover:text-white transition-all duration-300 active:scale-90"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * navLinks.length, duration: 0.5 }}
                className="flex items-center gap-8 mt-8 pt-8 border-t border-white/20 w-[80%] justify-center"
              >
                <Link href="https://www.instagram.com/sparkeybranding" target="_blank" className="hover:text-white/60 transition-colors">
                  <Instagram size={24} />
                </Link>
                <Link href="https://www.facebook.com/SparkeyBranding" target="_blank" className="hover:text-white/60 transition-colors">
                  <Facebook size={24} />
                </Link>
              </motion.div>
            </nav>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"
            >
              <div className="text-[30vw] font-poppins font-black tracking-tighter uppercase whitespace-nowrap">
                Sparkey!
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
