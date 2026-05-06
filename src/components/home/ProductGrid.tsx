"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Plus, ShoppingCart } from "lucide-react";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { useCart } from "@/context/CartContext";

const products = [
  { id: 1, name: "PREMIUM OVERSIZED TEE", price: "₹85.00", image: "/img/p1.jpeg", category: "T-Shirts" },
  { id: 2, name: "LUXURY STREET HOODIE", price: "₹145.00", image: "/img/p2.jpeg", category: "Outerwear" },
  { id: 3, name: "SIGNATURE CARGO PANTS", price: "₹120.00", image: "/img/p3.jpeg", category: "Bottoms" },
  { id: 4, name: "ESSENTIAL LOGO TEE", price: "₹75.00", image: "/img/p4.jpeg", category: "T-Shirts" },
  { id: 5, name: "ELITE TECH JACKET", price: "₹295.00", image: "/img/p5.jpeg", category: "Outerwear" },
  { id: 6, name: "URBAN TRACK PANTS", price: "₹110.00", image: "/img/p6.jpeg", category: "Bottoms" },
  { id: 7, name: "VINTAGE WASH TEE", price: "₹90.00", image: "/img/p7.jpeg", category: "T-Shirts" },
  { id: 8, name: "CLASSIC ZIP HOODIE", price: "₹130.00", image: "/img/p8.jpeg", category: "Outerwear" },
  { id: 9, name: "FITTED JOGGERS", price: "₹105.00", image: "/img/p9.jpeg", category: "Bottoms" },
];

export const ProductGrid = () => {
  const { addToCart } = useCart();

  return (
    <section id="products" className="py-24 px-6 md:px-12 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-5xl font-serif mb-4"
          >
            OUR COLLECTION
          </motion.h2>
          <div className="w-20 h-[1px] bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index % 3) * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] bg-[#111] overflow-hidden mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay on hover (Desktop) */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    className="bg-gold text-black px-6 py-3 flex items-center gap-2 tracking-[0.2em] text-[10px] font-bold uppercase"
                  >
                    <Plus className="w-4 h-4" />
                    Add to Bag
                  </motion.div>
                  
                  <div className="text-white/40 text-[8px] tracking-[0.3em] uppercase">
                    Quick View
                  </div>
                </div>

                {/* Quick Add Button (Mobile Only) */}
                <div className="absolute bottom-4 left-4 right-4 md:hidden">
                   <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    className="w-full bg-gold text-black text-[10px] py-3 tracking-widest uppercase font-bold shadow-2xl flex items-center justify-center gap-2"
                   >
                      <Plus className="w-4 h-4" />
                      Add to Bag
                   </button>
                </div>
              </div>

              <div className="flex justify-between items-start" onClick={() => addToCart(product)}>
                <div>
                  <p className="text-gold/40 text-[9px] tracking-[0.2em] uppercase mb-1">
                    {product.category}
                  </p>
                  <h3 className="text-sm font-sans tracking-wide text-white group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                </div>
                <p className="text-sm font-serif text-gold">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <LuxuryButton variant="outline" className="px-12">
            View All Products
          </LuxuryButton>
        </div>
      </div>
    </section>
  );
};
