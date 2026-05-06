"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { LuxuryButton } from "@/components/ui/LuxuryButton";

export const SignaturePiece = () => {
  const { addToCart } = useCart();
  const product = { id: 99, name: "ARCHETYPE CARGO", price: "$320", image: "/pants.png" };

  return (
    <section className="py-48 bg-black relative overflow-hidden">
      <div className="editorial-container">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          {/* Spotlight Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="lg:w-1/2 relative aspect-square group"
          >
            <div className="absolute inset-0 bg-gold/5 blur-[100px] rounded-full group-hover:bg-gold/10 transition-colors" />
            <div className="relative aspect-[4/5] overflow-hidden border border-white/5">
              <Image
                src="/pants.png"
                alt="Signature Piece"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Details */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-gold tracking-[0.8em] text-[10px] uppercase mb-12 block font-light">
                Object № 099
              </span>
              <h2 className="text-6xl md:text-8xl font-serif leading-none mb-8 tracking-tighter">
                THE <br />
                <span className="italic text-gold">ARCHETYPE</span>
              </h2>
              <p className="text-white/40 text-[10px] tracking-[0.4em] uppercase mb-12 leading-loose max-w-sm">
                Engineered for maximum utility. Constructed from water-resistant heavy canvas with signature gold-plated hardware.
              </p>
              
              <div className="flex items-end gap-12 mb-16">
                 <span className="text-4xl font-serif text-white">{product.price}</span>
                 <span className="text-white/20 text-[10px] tracking-widest uppercase mb-2">VAT Included</span>
              </div>

              <LuxuryButton 
                variant="outline" 
                className="w-full md:w-auto px-16 border-gold/40 hover:bg-gold hover:text-black transition-all duration-500 py-6 text-xs tracking-[0.6em]"
                onClick={() => addToCart(product)}
              >
                ADD TO ARCHIVE
              </LuxuryButton>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background Text Overlay */}
      <div className="absolute -bottom-20 left-0 w-full opacity-[0.02] pointer-events-none">
         <h2 className="text-[25rem] font-serif whitespace-nowrap tracking-tighter italic">
            CRAFTED FOR THE FEARLESS
         </h2>
      </div>
    </section>
  );
};
