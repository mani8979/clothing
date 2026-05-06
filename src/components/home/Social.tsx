"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const reviews = [
  { text: "Absolute presence in every piece.", author: "@Vogue" },
  { text: "The new standard for urban luxury.", author: "@Hypebeast" },
  { text: "Armor for the modern creative.", author: "@Highsnobiety" },
];

export const SocialProof = () => {
  return (
    <section className="py-48 bg-black border-y border-white/5">
      <div className="editorial-container">
        <div className="text-center mb-32">
           <h2 className="text-white/20 text-6xl md:text-9xl font-serif tracking-tighter luxury-text-outline">RECOGNITION</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="relative group text-center"
            >
              <div className="absolute -inset-8 bg-gold/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                 <p className="text-2xl md:text-3xl font-serif text-white/80 leading-relaxed italic mb-8">
                    &ldquo;{review.text}&rdquo;
                 </p>
                 <span className="text-[10px] tracking-[0.6em] text-gold uppercase font-light">{review.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const InstagramStrip = () => {
  const posts = ["/hero.png", "/tee.png", "/hoodie.png", "/pants.png", "/hero.png", "/tee.png"];
  
  return (
    <section className="bg-black py-24 overflow-hidden">
      <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar">
        {posts.map((img, i) => (
          <div 
            key={i} 
            className="flex-shrink-0 w-80 md:w-[450px] aspect-[4/5] relative snap-center group cursor-crosshair border-r border-white/5"
          >
            <Image
              src={img}
              alt="Insta post"
              fill
              className="object-cover transition-all duration-700 group-hover:grayscale-0 grayscale-[0.8] brightness-75 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
               <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center">
                  <span className="text-gold text-[8px] tracking-widest uppercase">View</span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
