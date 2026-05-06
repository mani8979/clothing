"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Sparkles, Truck } from "lucide-react";

export const AboutBrand = () => {
  return (
    <section id="about" className="py-32 bg-black border-y border-gold/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold tracking-[0.5em] text-xs uppercase mb-6 block">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-7xl font-serif leading-tight mb-8">
              CRAFTED FOR THE <span className="gold-gradient-text italic">BOLD</span>. <br />
              DESIGNED FOR THE STREETS.
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-10 max-w-lg">
              At PEPPS, we believe that streetwear is not just fashion—it&apos;s an attitude. 
              Each piece is meticulously crafted using the finest materials to ensure 
              not just style, but a legacy.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-gold" />
              <span className="text-xs tracking-[0.3em] uppercase text-gold">The PEPPS Standard</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-tr from-gold/20 via-transparent to-transparent absolute -inset-10 blur-3xl opacity-30 animate-glow" />
            <div className="relative border border-gold/20 p-12 md:p-20 text-center glass-morphism">
              <h3 className="text-8xl md:text-[12rem] font-serif text-gold/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
                PEPPS
              </h3>
              <div className="relative z-10 grid grid-cols-1 gap-12">
                <TrustItem 
                  icon={<Shield className="w-8 h-8 text-gold" />}
                  title="PREMIUM QUALITY"
                  desc="Italian-sourced fabrics and heavy cotton blends."
                />
                <TrustItem 
                  icon={<Sparkles className="w-8 h-8 text-gold" />}
                  title="LIMITED DROPS"
                  desc="Exclusive designs that never restock. Truly unique."
                />
                <TrustItem 
                  icon={<Truck className="w-8 h-8 text-gold" />}
                  title="GLOBAL SHIPPING"
                  desc="Premium delivery service to over 50 countries."
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex flex-col items-center">
    <div className="mb-4 p-3 rounded-full border border-gold/20 bg-gold/5 group-hover:bg-gold/10 transition-colors">
      {icon}
    </div>
    <h4 className="text-sm tracking-[0.2em] font-sans font-bold text-white mb-2 uppercase">{title}</h4>
    <p className="text-white/40 text-xs font-light">{desc}</p>
  </div>
);
