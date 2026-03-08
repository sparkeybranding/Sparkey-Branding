"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FloatingElement from "@/components/FloatingElement";

const portfolioItems = [
  {
    name: "Marshall Consulting",
    description: "Expert HR-driven strategies and career coaching designed to unlock professional potential.",
    image: "/images/portfolio/marshall.png",
    url: "https://consultwithmarshall.com/",
    tags: ["HR Strategy", "Coaching", "Digital Platform"]
  },
  {
    name: "The 22 Coffee Buggy",
    description: "Authentic Italian mobile coffee experience bringing premium Lavazza culture to the streets.",
    image: "/images/portfolio/coffee_buggy.png",
    url: "https://the22coffeebuggy.com/",
    tags: ["E-Commerce", "Branding", "Mobile First"]
  },
  {
    name: "Beyond Borders Cafe",
    description: "A world of coffee and community. Taste the world while feeling right at home.",
    image: "/images/portfolio/beyond_borders.png",
    url: "https://beyondborderscafe.com/",
    tags: ["Hospitality", "Community Hub", "Visual Identity"]
  },
  {
    name: "The Sleep Solution",
    description: "Dr. Holliday-Bell's sleep coaching for high-performing professionals. Dream Big, Sleep Deep.",
    image: "/images/portfolio/sleep_solution.png",
    url: "https://thesolutionissleep.com/",
    tags: ["HealthTech", "Consulting", "Personal Brand"]
  },
  {
    name: "Tru Divine",
    description: "Holistic counseling and wellness fostering healing and personal transformation.",
    image: "/images/portfolio/tru_divine.png",
    url: "https://trudivinecw.com/",
    tags: ["Wellness", "Therapy", "Digital HQ"]
  }
];

export default function WebDesign() {
  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-32 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-light tracking-tight leading-[0.9]">Web Design</h1>
          <p className="mt-8 text-xl md:text-2xl font-sans font-light opacity-80 max-w-2xl leading-relaxed">
            Digital experiences that bend reality. We engineer high-performance websites that function like software but feel like high-fashion editorial.
          </p>
        </motion.div>

        {/* The First Blurb / Core Value Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold tracking-tight mb-6">Built to convert. Designed to dominate.</h2>
            <p className="text-lg font-sans font-light leading-relaxed opacity-80 mb-8">
              A website isn't just a digital brochure; it's your most ruthless salesperson. Our luxury development process pairs Anti-Gravity Minimalism with bleeding-edge performance to guarantee outsized conversion rates.
            </p>
            <ul className="space-y-4 font-sans text-sm uppercase tracking-widest font-bold opacity-80">
              <li className="flex items-center gap-4"><span className="text-xl">💻</span> Interactive UI & FX Architectures</li>
              <li className="flex items-center gap-4"><span className="text-xl">🚀</span> Ultra-Fast Next.js Environments</li>
              <li className="flex items-center gap-4"><span className="text-xl">🛒</span> High-Converting E-Commerce flows</li>
              <li className="flex items-center gap-4"><span className="text-xl">⛓️</span> Custom CMS integrations</li>
            </ul>
          </motion.div>

          <FloatingElement delay={0.5} className="order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group border border-black/10">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <Image 
                src="/images/services/web_aesthetic.jpg" 
                alt="High-performance web design aesthetic" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </FloatingElement>
        </div>

        {/* Repositioned Portfolio Section */}
        <section className="mb-40">
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold tracking-tight mb-4 uppercase italic">Portfolio</h2>
            <div className="h-px w-24 bg-black" />
            <p className="mt-6 text-xl font-sans font-light opacity-60 max-w-xl">
              Authentic digital flagships built for high-impact results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="md:col-span-1"
              >
                <Link href={item.url} target="_blank" className="group block">
                  <div className="relative w-full aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-2xl border border-black/5 mb-8">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700 z-10" />
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
                    <div className="max-w-xl">
                      <div className="flex gap-2 mb-3">
                        {item.tags.map(tag => (
                          <span key={tag} className="text-[0.65rem] uppercase tracking-[0.2em] font-bold opacity-40">{tag}</span>
                        ))}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-poppins font-bold uppercase tracking-tighter group-hover:italic transition-all duration-300">{item.name}</h3>
                      <p className="mt-4 text-lg font-sans font-light opacity-70 leading-relaxed">{item.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* High Conversion Section */}
        <section className="bg-black text-white rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            {/* Abstract noise pattern simulation */}
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-30" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-poppins font-bold mb-8 uppercase tracking-tighter">Your digital flagship.</h2>
            <p className="text-xl font-sans font-light opacity-80 mb-12">
              If your current site isn't dropping jaws, it's dropping leads. Step into the future of the web before your competitors figure it out.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link
                href="/inquiry"
                className="w-full sm:w-auto inline-flex justify-center items-center px-12 py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)] text-sm"
              >
                Initiate Rebuild ⚡️
              </Link>
            </div>
            <p className="mt-8 font-sans text-xs uppercase tracking-[0.2em] font-normal opacity-40">
              Only accepting ambitious brands. Let's make noise.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
