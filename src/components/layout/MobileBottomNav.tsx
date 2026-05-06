"use client";

import React from "react";
import Link from "next/link";
import { Home, ShoppingBag, User } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const MobileBottomNav = () => {
  const { setIsOpen, totalItems } = useCart();

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-black border-t border-white/10 px-8 py-4 flex justify-between items-center z-[100] glass-morphism">
      <Link href="/" className="flex flex-col items-center gap-1">
        <Home className="w-5 h-5 text-white/60 hover:text-gold transition-colors" />
        <span className="text-[10px] text-white/40 uppercase tracking-widest">Home</span>
      </Link>
      
      <button onClick={() => setIsOpen(true)} className="flex flex-col items-center gap-1 relative">
        <ShoppingBag className="w-5 h-5 text-white/60 hover:text-gold transition-colors" />
        <span className="text-[10px] text-white/40 uppercase tracking-widest">Cart</span>
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-gold text-black text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      <Link href="/account" className="flex flex-col items-center gap-1">
        <User className="w-5 h-5 text-white/60 hover:text-gold transition-colors" />
        <span className="text-[10px] text-white/40 uppercase tracking-widest">Account</span>
      </Link>
    </div>
  );
};
