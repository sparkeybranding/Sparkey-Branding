"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FloatingElement from "@/components/FloatingElement";

import { BackgroundPaths } from "@/components/ui/background-paths";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* YouTube Video Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <iframe
            className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] -translate-x-1/2 -translate-y-1/2 opacity-70 pointer-events-none"
            src="https://www.youtube.com/embed/cjCPT_qKje0?autoplay=1&mute=1&loop=1&playlist=cjCPT_qKje0&controls=0&showinfo=0&rel=0&modestbranding=1"
            allow="autoplay; encrypted-media"
            frameBorder="0"
          />
        </div>

        {/* Floating Paths Animated Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-auto">
          <BackgroundPaths title="Give Your Brand A Spark!" />
        </div>
      </section>

      {/* The Vibe Section (Happy People / Less Corporate) */}
      <section className="py-24 md:py-40 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-serif tracking-tight leading-tight mb-8">
              Work shouldn't feel like <span className="italic">work.</span>
            </h2>
            <p className="text-xl font-sans font-light leading-relaxed opacity-80 mb-8">
              We partner with passionate founders and visionary teams who want to build something extraordinary. No stiff suits, no boring meetings. Just raw creativity, massive energy, and results that speak for themselves.
            </p>
            <div className="w-24 h-px bg-black opacity-20 mb-8" />
            <p className="font-sans font-bold uppercase tracking-widest text-sm flex items-center gap-3">
               <span className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black">⚡️</span> We thrive together.
            </p>
          </motion.div>

          <div className="relative h-[600px] w-full">
            <FloatingElement delay={0} className="absolute top-0 right-0 w-3/4 h-[400px] z-10 shadow-2xl">
              <div className="relative w-full h-full rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-700 pointer-events-auto">
                <Image src="/images/happy_business_owners.png" alt="Happy Business Owners" fill className="object-cover" />
              </div>
            </FloatingElement>

            <FloatingElement delay={1.5} className="absolute bottom-0 left-0 w-2/3 h-[350px] z-20 shadow-2xl">
              <div className="relative w-full h-full rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-700 pointer-events-auto border-8 border-white">
                <Image src="/images/creative_team.png" alt="Creative Team Collaborating" fill className="object-cover" />
              </div>
            </FloatingElement>
          </div>
        </div>
      </section>

      {/* The Velocity Suites */}
      <section className="py-24 px-4 md:px-8 bg-neutral-50 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter uppercase mb-2">The Playbook</h2>
            <p className="font-serif text-2xl italic opacity-70">Pick your velocity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
             {/* Tier 1 */}
             <FloatingElement delay={0}>
              <div className="group bg-white border-2 border-transparent rounded-[2rem] p-10 md:p-16 hover:border-black hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 h-full flex flex-col justify-between cursor-pointer relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white font-bold font-sans text-xl shadow-lg group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-500">🏎️</span>
                    <p className="font-sans text-sm uppercase tracking-[0.2em] font-bold">24-Hour Express</p>
                  </div>
                  <h3 className="text-5xl font-serif mb-6">The Spark</h3>
                  <p className="font-sans font-light leading-relaxed text-lg opacity-80 group-hover:opacity-100 transition-opacity">
                    The impossible, delivered yesterday. A full high-end launch in one solar cycle. Perfect for founders who move fast.
                  </p>
                </div>
                <div className="mt-16 relative z-10">
                  <span className="font-sans font-bold text-sm uppercase tracking-widest group-hover:pl-4 transition-all flex items-center gap-2">
                    Start Your Engines <span className="text-xl">&rarr;</span>
                  </span>
                </div>
              </div>
             </FloatingElement>

             {/* Tier 2 */}
             <FloatingElement delay={1.5}>
              <div className="group bg-white border-2 border-transparent rounded-[2rem] p-10 md:p-16 hover:border-black hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 h-full flex flex-col justify-between cursor-pointer relative overflow-hidden">
                <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white font-bold font-sans text-xl shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">🚀</span>
                    <p className="font-sans text-sm uppercase tracking-[0.2em] font-bold">3-Day Elite</p>
                  </div>
                  <h3 className="text-5xl font-serif mb-6">The Orbit</h3>
                  <p className="font-sans font-light leading-relaxed text-lg opacity-80 group-hover:opacity-100 transition-opacity">
                    Precision meets velocity. Complete multi-page digital experiences in 72 hours. We handle the heavy lifting while you chill.
                  </p>
                </div>
                <div className="mt-16 relative z-10">
                  <span className="font-sans font-bold text-sm uppercase tracking-widest group-hover:pl-4 transition-all flex items-center gap-2">
                    Get Into Orbit <span className="text-xl">&rarr;</span>
                  </span>
                </div>
              </div>
             </FloatingElement>
          </div>
        </div>
      </section>

      {/* The Impact / SEO ROI Section */}
      <section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-16">
          <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter uppercase mb-4">The Cost of Invisible.</h2>
          <p className="text-xl font-serif italic opacity-70">Data doesn't lie. Bad design bankrupts.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-stretch">
          {/* The "Average" Business */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-neutral-100 rounded-[2rem] p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 rounded-full blur-3xl opacity-10" />
            <div className="relative z-10">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-[0.65rem] font-bold uppercase tracking-widest mb-6 border border-red-200">
                The Status Quo
              </span>
              <h3 className="text-2xl lg:text-3xl font-serif mb-4">The Outdated Website</h3>
              <p className="font-sans font-light opacity-80 mb-8 leading-relaxed text-sm lg:text-base">
                Slow load times, confusing navigation, and zero SEO strategy. You're bleeding potential revenue every single day.
              </p>
              
              <div className="space-y-4 font-sans text-sm">
                <div className="flex items-center gap-4 border-b border-black/5 pb-4">
                  <span className="text-xl">📉</span>
                  <div>
                    <p className="font-bold opacity-60">Revenue Impact</p>
                    <p>88% of users immediately leave poorly designed sites.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <span className="text-xl">👻</span>
                  <div>
                    <p className="font-bold opacity-60">SEO Visibility</p>
                    <p>Invisible on Google. Relying entirely on expensive ads.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* New Happy Business Owner Image */}
          <FloatingElement delay={0.5} className="h-full hidden md:block">
            <div className="relative w-full h-[300px] lg:h-full rounded-[2rem] overflow-hidden shadow-xl group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <Image 
                src="/images/business_group_smiling.jpg" 
                alt="Smiling group of business professionals" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </FloatingElement>

          {/* The Sparkey Business */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-black text-white rounded-[2rem] p-8 lg:p-10 relative overflow-hidden shadow-2xl flex flex-col justify-between"
          >
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-yellow-400 rounded-full blur-3xl opacity-20" />
            <div className="relative z-10">
              <span className="inline-block px-4 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-[0.65rem] font-bold uppercase tracking-widest mb-6 border border-yellow-400/30">
                The Sparkey Standard
              </span>
              <h3 className="text-2xl lg:text-3xl font-serif mb-4 text-white">The High-Performance Machine</h3>
              <p className="font-sans font-light opacity-80 mb-8 leading-relaxed text-neutral-300 text-sm lg:text-base">
                Lightning-fast, mobile-first, and heavily optimized for extreme technical SEO and massive conversion rates.
              </p>

              <div className="space-y-4 font-sans text-sm">
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="text-xl">📈</span>
                  <div>
                    <p className="font-bold text-yellow-400">Revenue Impact</p>
                    <p className="text-neutral-300">Up to 400% increase in baseline conversions.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <span className="text-xl">⚡️</span>
                  <div>
                    <p className="font-bold text-yellow-400">SEO Dominance</p>
                    <p className="text-neutral-300">Page 1 organic rankings capturing pure profit.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Authority/Conversion Section */}
      <section className="bg-black text-white py-32 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tighter mb-8">
              Don't leave money <br /><span className="italic text-yellow-400">on the table.</span>
            </h2>
            <p className="text-xl md:text-2xl font-sans font-light leading-relaxed max-w-3xl mx-auto opacity-80 mb-12">
              Every second your brand looks outdated, a competitor steals your client. We don't just design websites—we engineer high-converting sales machines masked as luxury digital art. Stop blending in. Start dominating your industry today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/inquiry"
                className="w-full sm:w-auto px-12 py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)] text-sm"
              >
                Claim Your Future
              </Link>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto px-12 py-5 bg-transparent border border-white text-white rounded-full font-bold uppercase tracking-widest hover:bg-white/10 transition-colors text-sm"
              >
                Proof of Concept
              </Link>
            </div>
            <p className="mt-8 font-sans text-xs uppercase tracking-[0.2em] font-bold opacity-50">
               * Spots are extremely limited. We only work with founders who are ready to scale.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
