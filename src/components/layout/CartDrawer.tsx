"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { LuxuryButton } from "@/components/ui/LuxuryButton";

export const CartDrawer = () => {
  const { cart, isOpen, setIsOpen, updateQuantity, removeFromCart, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-black border-l border-gold/10 z-[70] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-8 border-b border-gold/10 flex justify-between items-center bg-black">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-gold" />
                <h2 className="text-xl font-serif tracking-widest text-white">YOUR BAG</h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gold/10 rounded-full transition-colors group"
              >
                <X className="w-6 h-6 text-white group-hover:text-gold transition-colors" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-gold/5 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag className="w-8 h-8 text-gold/30" />
                  </div>
                  <p className="text-white/40 tracking-[0.2em] text-xs uppercase mb-8">Your bag is empty</p>
                  <LuxuryButton variant="outline" onClick={() => setIsOpen(false)}>
                    Start Shopping
                  </LuxuryButton>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-6 group"
                  >
                    <div className="relative w-24 h-32 bg-[#111] overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="text-sm font-sans tracking-wide text-white uppercase">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-white/20 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-gold font-serif text-sm">₹{item.price.toFixed(2)}</p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-gold/20 bg-black">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-gold/10 text-white transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs text-white">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-gold/10 text-white transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 border-t border-gold/10 bg-black/50 backdrop-blur-md">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-white/40 tracking-[0.3em] text-[10px] uppercase">Subtotal</span>
                  <span className="text-2xl font-serif text-gold">₹{totalPrice.toFixed(2)}</span>
                </div>
                <LuxuryButton className="w-full py-4 text-xs tracking-[0.4em]">
                  SECURE CHECKOUT
                </LuxuryButton>
                <p className="text-center text-[10px] text-white/20 mt-6 tracking-widest uppercase">
                  Free Shipping & Returns on all orders
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
