"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Oversized Tees",
    image: "/tee.png",
    count: "12 Items",
    href: "#",
  },
  {
    title: "Streetwear Drops",
    image: "/hoodie.png",
    count: "08 Items",
    href: "#",
  },
  {
    title: "Premium Essentials",
    image: "/pants.png",
    count: "15 Items",
    href: "#",
  },
];

export const FeaturedCollection = () => {
  return (
    <section id="featured" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-gold tracking-[0.4em] text-[10px] uppercase mb-4 block"
            >
              Curated Selection
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif leading-tight"
            >
              THE ART OF <br />
              <span className="italic">STREETWEAR</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:block"
          >
            <p className="text-white/40 text-sm max-w-xs font-light leading-relaxed">
              Discover our latest drops, designed with precision and crafted with the finest fabrics for the ultimate streetwear experience.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[700px] overflow-hidden cursor-pointer"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-90" />
              
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-all duration-700 m-6" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] tracking-[0.4em] px-8 py-3 uppercase"
                >
                  Explore Collection
                </motion.div>
              </div>

              <div className="absolute bottom-12 left-12 right-12 transition-transform duration-500 group-hover:-translate-y-4">
                <span className="text-gold tracking-[0.4em] text-[8px] uppercase mb-3 block opacity-60 group-hover:opacity-100 transition-opacity">
                  {category.count}
                </span>
                <h3 className="text-3xl font-serif text-white mb-6 group-hover:text-gold transition-colors">
                  {category.title}
                </h3>
                <div className="w-16 h-[1px] bg-gold group-hover:w-full transition-all duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
