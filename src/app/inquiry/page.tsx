"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import InvertButton from "@/components/InvertButton";

export default function Inquiry() {
  const [isExpress, setIsExpress] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-24 px-4 md:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Abstract Background Element */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-black/5 rounded-full pointer-events-none"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-black/5 rounded-full pointer-events-none"
      />

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-2xl"
      >
        <div className="mb-10 md:mb-12 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-light tracking-tight leading-[0.9]">Let's Build <br /><span className="font-bold italic uppercase">Greatness.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-sans font-light opacity-80 max-w-2xl mx-auto leading-relaxed">
            Successful brands are built on bold decisions. Join our circle of high-performing entrepreneurs and scale your vision.
          </p>
        </div>

        {/* Glassmorphic Form */}
        <div className="bg-white/50 backdrop-blur-xl border border-black/10 p-8 md:p-12 shadow-2xl shadow-black/5">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative">
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-transparent border-b border-black/20 py-3 text-lg font-sans placeholder-transparent focus:outline-none focus:border-black transition-colors peer"
                  placeholder="Name"
                />
                <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs font-sans uppercase tracking-widest text-black/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-black">
                  Name
                </label>
              </div>
              <div className="group relative">
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-transparent border-b border-black/20 py-3 text-lg font-sans placeholder-transparent focus:outline-none focus:border-black transition-colors peer"
                  placeholder="Email"
                />
                <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs font-sans uppercase tracking-widest text-black/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-black">
                  Email
                </label>
              </div>
            </div>

            <div className="group relative">
              <textarea 
                id="details"
                rows={4}
                className="w-full bg-transparent border-b border-black/20 py-3 text-lg font-sans placeholder-transparent focus:outline-none focus:border-black transition-colors peer resize-none"
                placeholder="Project Details"
              />
              <label htmlFor="details" className="absolute left-0 -top-3.5 text-xs font-sans uppercase tracking-widest text-black/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-black">
                Project Details
              </label>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-black/10 mt-8">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsExpress(!isExpress)}
                  className={`w-12 h-6 rounded-full transition-colors duration-300 relative ${isExpress ? "bg-black" : "bg-black/20"}`}
                >
                  <motion.div 
                    className="w-4 h-4 bg-white rounded-full absolute top-1 shadow-sm"
                    animate={{ left: isExpress ? "26px" : "4px" }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </button>
                <div className="flex flex-col">
                  <span className="font-sans text-sm tracking-wide">24-Hour Express</span>
                  {isExpress && (
                    <motion.span 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-black/60 font-serif italic"
                    >
                      High Priority Flag Engaged
                    </motion.span>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button className="w-full group relative inline-flex justify-center items-center px-8 py-5 bg-black text-white overflow-hidden border border-black transition-colors">
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
                <span className="relative z-10 text-sm font-sans uppercase tracking-widest group-hover:text-black transition-colors duration-500 delay-100 flex items-center gap-2">
                  Launch Sequence <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Brand Promise Section */}
        <section className="text-center py-20">
          <div className="inline-block px-6 py-2 rounded-full border border-black/5 bg-black/[0.02] mb-8">
            <span className="text-[0.6rem] uppercase tracking-[0.4em] font-bold opacity-60">High Velocity Precision</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-poppins font-bold uppercase italic tracking-tighter mb-12">Built for the Ambitious.</h2>
          <div className="flex justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all">
            {/* Logo grid or symbolic marks could go here */}
          </div>
        </section>
      </motion.div>
    </div>
  );
}
