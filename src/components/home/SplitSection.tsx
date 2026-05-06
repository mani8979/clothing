"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const SplitSection = () => {
  return (
    <section className="py-32 bg-black overflow-hidden">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Large Image - Asymmetrical */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-7 relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="/tee.png"
              alt="Editorial Shot"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
          </motion.div>

          {/* Text Block - Bold Typography */}
          <div className="lg:col-span-5 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="text-gold tracking-[0.4em] text-[10px] uppercase mb-8 block">
                The Narrative
              </span>
              <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-12 tracking-tight">
                SILENCE IS <br />
                <span className="italic text-gold">STRENGTH</span>
              </h2>
              <div className="w-16 h-[1px] bg-gold mb-12" />
              <p className="text-white/40 text-sm font-light leading-relaxed max-w-sm tracking-wide">
                We don&apos;t just make clothes. We create armor for the urban landscape. 
                Our silhouettes are a reflection of a world that never sleeps, 
                yet demands absolute presence.
              </p>
              
              <div className="mt-16 flex items-center gap-6 group cursor-pointer">
                 <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold transition-colors">
                    <div className="w-1 h-1 bg-gold rounded-full" />
                 </div>
                 <span className="text-[10px] tracking-[0.4em] text-white/60 uppercase group-hover:text-gold transition-colors">Read the manifesto</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
