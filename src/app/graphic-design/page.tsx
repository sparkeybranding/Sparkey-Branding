"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FloatingElement from "@/components/FloatingElement";
import { Button } from "@/components/ui/button";

export default function GraphicDesign() {
  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-light tracking-tight leading-[0.9]">Graphic Design</h1>
          <p className="mt-8 text-xl md:text-2xl font-sans font-light opacity-80 max-w-2xl">
            Visual identities that refuse to be ignored. We craft luxury aesthetics mixed with aggressive street-style energy to make your brand bulletproof.
          </p>
        </motion.div>

        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <FloatingElement delay={0}>
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group border border-black/10">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <Image 
                src="/images/services/graphic_design.png" 
                alt="Luxury Graphic Design Packaging" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </FloatingElement>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold tracking-tight mb-6">Unapologetic Aesthetic.</h2>
            <p className="text-lg font-sans font-light leading-relaxed opacity-80 mb-8">
              Every detail matters. From the weight of the typography to the stark contrast of the color palette, we build design systems that scream premium. We don't just make things look good—we engineer obsession. If your visual identity isn't actively making you money, it's costing you.
            </p>
            <ul className="space-y-4 font-sans text-sm uppercase tracking-widest font-bold opacity-80">
              <li className="flex items-center gap-4"><span className="text-xl">🖌️</span> Brand Identity & Logos</li>
              <li className="flex items-center gap-4"><span className="text-xl">📦</span> Premium Packaging Design</li>
              <li className="flex items-center gap-4"><span className="text-xl">🏙️</span> Out-of-Home & Billboards</li>
              <li className="flex items-center gap-4"><span className="text-xl">⚡️</span> Digital Assets & Toolkits</li>
            </ul>
          </motion.div>
        </div>

        {/* Signature Services Section */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold tracking-tight mb-4 uppercase">Visual Velocity</h2>
            <p className="text-lg font-sans font-light opacity-60">High-velocity design services for brands that demand the top shelf.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Brand Identity",
                description: "Full-scale visual systems including logos, typography, and color theory.",
                image: "/images/services/brand_identity.png"
              },
              {
                title: "Packaging Design",
                description: "Luxury product packaging that commands secondary-market prices.",
                image: "/images/services/package_design.png"
              },
              {
                title: "Editorial Design",
                description: "High-end magazine layouts and brand-defining pitch decks.",
                image: "/images/services/editorial_design.png"
              },
              {
                title: "Digital Motion",
                description: "Animated brand marks and high-energy social media assets.",
                image: "/images/services/digital_motion.png"
              },
              {
                title: "Outdoor Advertising",
                description: "Massive scale billboards and urban environment takeovers.",
                image: "/images/services/ooh_advertising.png"
              },
              {
                title: "Custom Typography",
                description: "Bespoke font design to ensure your brand's voice is unique.",
                image: "/images/services/logo_typography_premium.png"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-neutral-50 rounded-[2rem] overflow-hidden border border-black/5 hover:border-black transition-all duration-500"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-poppins font-bold mb-3">{service.title}</h3>
                  <p className="text-sm font-sans font-light opacity-70 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex justify-center"
          >
            <Link
              href="https://www.behance.net/brandongray17"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-12 py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-full h-px bg-white/20" />
              <span className="relative z-10">See Portfolio</span>
            </Link>
          </motion.div>
        </section>

        {/* High Conversion Section */}
        <section className="bg-black text-white rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            {/* Abstract noise pattern simulation */}
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-30" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-poppins font-bold mb-8 uppercase tracking-tighter">Ready to dominate?</h2>
            <p className="text-xl font-sans font-light opacity-80 mb-12">
              Stop settling for average. Your competitors pray you keep blending in. Let's build a visual identity that turns your audience into superfans and your competitors into history.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link
                href="/inquiry"
                className="w-full sm:w-auto inline-flex justify-center items-center px-12 py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)] text-sm"
              >
                Start the Spark ⚡️
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
