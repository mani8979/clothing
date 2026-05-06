"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import Image from "next/image";

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.1]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center">
      {/* Editorial Background Image */}
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/hero.png"
          alt="Campaign Model"
          fill
          className="object-cover object-center opacity-80 filter contrast-125 brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
      </motion.div>

      {/* Editorial Content Layout */}
      <div className="editorial-container relative z-10 w-full flex flex-col items-start pt-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          style={{ opacity }}
        >
          <span className="text-gold tracking-[0.6em] text-[10px] mb-6 block uppercase font-light border-l border-gold/40 pl-4">
            Collection № 01 / 2024
          </span>
          <h1 className="text-7xl md:text-[12rem] font-serif leading-[0.85] mb-12 tracking-tighter">
            OWN THE <br />
            <span className="italic text-gold luxury-text-outline">STREET</span>
          </h1>
          
          <div className="max-w-xs mb-16">
             <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase leading-relaxed font-light">
                Crafted for the fearless. <br />
                Designed for the absolute.
             </p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-12"
          >
            <LuxuryButton variant="outline" className="border-gold/30 hover:border-gold px-12 group">
              <span className="group-hover:text-gold transition-colors">EXPLORE CAMPAIGN</span>
            </LuxuryButton>
            
            <div className="hidden md:flex items-center gap-4">
               <div className="w-24 h-[1px] bg-gold/20" />
               <span className="text-[8px] tracking-[0.5em] text-gold/40 uppercase">Scroll to dive</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Campaign Details - Floating Element */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-24 items-center">
         <div className="rotate-90 origin-center">
            <span className="text-[8px] tracking-[0.8em] text-white/10 uppercase whitespace-nowrap">
               AUTHENTICITY IN EVERY STITCH
            </span>
         </div>
         <div className="w-[1px] h-32 bg-gradient-to-b from-gold/40 to-transparent" />
      </div>
    </section>
  );
};
