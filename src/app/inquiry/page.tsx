"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import InvertButton from "@/components/InvertButton";

export default function Inquiry() {
  const [isExpress, setIsExpress] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    // Delay slightly to override Next.js/Lenis/Framer layout shifts
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    // Add the express flag to the form data
    data.append("Priority", isExpress ? "24-Hour Express" : "Standard");

    try {
      const response = await fetch("https://formspree.io/f/mdawezyd", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setStatus("success");
        form.reset();
        setIsExpress(false);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-24 px-4 md:px-8 flex flex-col items-center justify-start relative overflow-x-hidden">
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
        <div className="bg-white/50 backdrop-blur-xl border border-black/10 p-8 md:p-12 shadow-2xl shadow-black/5 relative overflow-hidden">
          
          {/* Success Overlay */}
          <motion.div 
            initial={false}
            animate={{ 
              opacity: status === "success" ? 1 : 0, 
              pointerEvents: status === "success" ? "auto" : "none" 
            }}
            className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-green-500/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-poppins font-bold mb-4">Transmission Received</h3>
            <p className="font-sans text-lg opacity-70">We'll review your details and be in touch shortly.</p>
            <button 
              onClick={() => setStatus("idle")}
              className="mt-8 px-8 py-3 bg-black text-white font-sans text-sm uppercase tracking-widest hover:bg-black/80 transition-colors"
            >
              Send Another
            </button>
          </motion.div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative">
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
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
                  name="email"
                  required
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
                name="details"
                required
                rows={4}
                className="w-full bg-transparent border-b border-black/20 py-3 text-lg font-sans placeholder-transparent focus:outline-none focus:border-black transition-colors peer resize-none"
                placeholder="Project Details"
              />
              <label htmlFor="details" className="absolute left-0 -top-3.5 text-xs font-sans uppercase tracking-widest text-black/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-black">
                Project Details
              </label>
            </div>

            {status === "error" && (
              <div className="p-4 bg-red-50 text-red-600 border border-red-200 text-sm font-sans rounded-lg">
                Something went wrong. Please try again or email us directly.
              </div>
            )}

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
              <button 
                type="submit"
                disabled={status === "submitting"}
                className={`w-full group relative inline-flex justify-center items-center px-8 py-5 bg-black text-white overflow-hidden border border-black transition-colors ${status === "submitting" ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {!status || status !== "submitting" && (
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
                )}
                
                <span className={`relative z-10 text-sm font-sans uppercase tracking-widest transition-colors duration-500 flex items-center gap-2 ${status === "submitting" ? "text-white" : "group-hover:text-black delay-100"}`}>
                  {status === "submitting" ? "Initiating Sequence..." : "Launch Sequence"} 
                  {status !== "submitting" && <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>}
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
