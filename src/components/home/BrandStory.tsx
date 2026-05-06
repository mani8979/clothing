"use client";

import React from "react";
import { motion } from "framer-motion";

export const BrandStory = () => {
  return (
    <section className="py-64 bg-black flex items-center justify-center text-center">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
        >
          <h2 className="text-6xl md:text-[10rem] font-serif leading-none tracking-tighter mb-16">
            CRAFTED FOR <br />
            <span className="italic text-gold luxury-text-outline">THE FEARLESS</span>
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-white/40 text-sm md:text-lg font-light leading-relaxed tracking-wide uppercase">
              In a world of noise, we choose silence. <br />
              In a world of trends, we choose the eternal. <br />
              Every stitch is a manifesto. Every silhouette is a revolt.
            </p>
          </div>

          <div className="mt-24 w-px h-32 bg-gradient-to-b from-gold/40 to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};
