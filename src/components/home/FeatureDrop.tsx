"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const dropItems = [
  { id: 1, name: "ONYX PARKA", price: "$450", image: "/hoodie.png" },
  { id: 2, name: "VOID TEE", price: "$120", image: "/tee.png" },
  { id: 3, name: "SULPHUR CARGO", price: "$320", image: "/pants.png" },
  { id: 4, name: "PHANTOM HOOD", price: "$280", image: "/hero.png" },
];

export const FeatureDrop = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const { addToCart } = useCart();

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-20 left-20 z-20">
           <h2 className="text-white/10 text-[15rem] font-serif leading-none select-none tracking-tighter">
              FALL 24
           </h2>
        </div>
        
        <motion.div style={{ x }} className="flex gap-12 px-20">
          {dropItems.map((item) => (
            <div 
              key={item.id}
              className="relative w-[70vw] md:w-[40vw] flex-shrink-0 group cursor-pointer"
              onClick={() => addToCart(item)}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#050505] border border-white/5 group-hover:border-gold/20 transition-all duration-700">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Horizontal Reveal Text */}
                <div className="absolute top-10 left-10 overflow-hidden">
                   <motion.span 
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    className="block text-[10px] tracking-[0.6em] text-gold uppercase"
                   >
                    LIMITED RELEASE
                   </motion.span>
                </div>

                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                   <div>
                      <h3 className="text-2xl font-serif text-white tracking-widest">{item.name}</h3>
                      <p className="text-gold text-sm mt-2">{item.price}</p>
                   </div>
                   <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-all duration-500">
                      <span className="text-xl font-light">+</span>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
