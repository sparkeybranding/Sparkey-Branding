"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HighlightGroup, HighlighterItem, Particles } from "@/components/ui/highlighter";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone, ArrowUpRight } from "lucide-react";

const entrepreneurs = [
  { src: "/images/entrepreneurs_1.png", alt: "Happy Entrepreneurs 1" },
  { src: "/images/contact_marketing_branding.png", alt: "Marketing & Branding Strategy" },
  { src: "/images/entrepreneurs_3.png", alt: "Happy Entrepreneurs 3" }
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-32 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-poppins font-light tracking-tight leading-[0.9]">Let's Build <br /><span className="font-bold italic uppercase">Greatness.</span></h1>
          <p className="mt-8 text-xl md:text-2xl font-sans font-light opacity-80 max-w-2xl leading-relaxed">
            Successful brands are built on bold decisions. Join our circle of high-performing entrepreneurs and scale your vision.
          </p>
        </motion.div>

        {/* Entrepreneur Imagery Grid */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {entrepreneurs.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl ${index === 1 ? 'md:-translate-y-12' : ''}`}
              >
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interactive Contact Card */}
        <section className="relative mx-auto mb-32 max-w-5xl">
          <HighlightGroup className="group h-full">
            <div className="group/item h-full md:col-span-12">
              <HighlighterItem className="rounded-[3rem] p-px bg-black/5">
                <div className="relative z-20 h-full overflow-hidden rounded-[3rem] border border-black/5 bg-white shadow-2xl py-16 px-8 md:p-24">
                  <Particles
                    className="absolute inset-0 -z-10 opacity-5 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-30"
                    quantity={150}
                    color={"#000000"}
                    vy={-0.1}
                  />
                  
                  <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-3xl md:text-5xl font-poppins font-bold tracking-tight mb-6">
                        Any questions about <span className="italic uppercase">Design?</span>
                      </h3>
                      <p className="text-xl font-sans font-light opacity-60 mb-10 max-w-md">
                        Stop leaving money on the table with weak branding. Your competitors are hoping you'll settle. Book a call right now and let's engineer a digital flagship that dominates your market.
                      </p>
                      
                      <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <Link href="https://cal.com/aliimam/designali" target="_blank">
                          <Button size="lg" className="rounded-full px-8 py-6 bg-black text-white hover:bg-neutral-800 transition-all font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                            Book a call <ArrowUpRight className="w-4 h-4" />
                          </Button>
                        </Link>
                        
                        <div className="flex gap-4">
                          <Link href="mailto:contact@sparkeybranding.com" className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all group/icon shadow-sm">
                            <Mail className="w-5 h-5" />
                          </Link>
                          <Link href="https://wa.me/yournumber" className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all group/icon shadow-sm">
                            <MessageCircle className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="hidden lg:block relative w-64 h-64">
                       <div className="absolute inset-0 bg-black rounded-full overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.1)]">
                          {/* Symbolic lightning mark using the logo SVG pattern */}
                          <div className="w-full h-full flex items-center justify-center text-white p-12">
                            <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                              <path d="M13.5 2L5 14h6.5l-2.5 8 8.5-12h-6.5z" />
                            </svg>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
          </HighlightGroup>
        </section>

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
      </div>
    </div>
  );
}
