"use client";

import { motion } from "framer-motion";
import FloatingElement from "@/components/FloatingElement";

const projects = [
  { id: 1, title: "AURA", category: "Brand Identity", aspect: "aspect-[3/4]" },
  { id: 2, title: "NEXUS", category: "Digital Experience", aspect: "aspect-square" },
  { id: 3, title: "LUMI", category: "E-Commerce", aspect: "aspect-[4/3]" },
  { id: 4, title: "VOID", category: "Creative Direction", aspect: "aspect-[3/4]" },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h1 className="text-5xl md:text-8xl font-serif tracking-tighter">Selected Works</h1>
          <div className="w-full h-px bg-black mt-6 md:mt-8 opacity-20" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {projects.map((project, index) => (
            <FloatingElement key={project.id} delay={index * 0.5}>
              <motion.div 
                className="group relative"
                whileHover={{ y: -20, scale: 1.02 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Monolith Image Placeholder */}
                <div className={`w-full bg-neutral-100 border border-black/10 overflow-hidden relative ${project.aspect}`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                  {/* Pseudo abstract pattern for visual interest */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent hidden group-hover:block pointer-events-none transition-opacity duration-700" />
                </div>
                
                <div className="mt-6 flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-serif tracking-tight group-hover:ml-2 transition-all duration-300">{project.title}</h3>
                    <p className="text-xs font-sans uppercase tracking-[0.2em] opacity-50 mt-2">{project.category}</p>
                  </div>
                  <div className="w-8 h-px bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            </FloatingElement>
          ))}
        </div>
      </div>
    </div>
  );
}
