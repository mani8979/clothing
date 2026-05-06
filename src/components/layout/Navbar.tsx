"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsOpen, totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "SHOP", href: "#products" },
    { name: "COLLECTIONS", href: "#featured" },
    { name: "ABOUT", href: "#about" },
    { name: "CONTACT", href: "#footer" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12",
        isScrolled 
          ? "bg-black/90 backdrop-blur-xl border-b border-gold/20 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
          : "bg-transparent py-8"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Links - Desktop */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] tracking-[0.4em] text-foreground hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center mx-8">
          <Image 
            src="/img/logo.jpeg" 
            alt="Logo" 
            width={140} 
            height={50} 
            className="object-contain"
          />
        </Link>

        {/* Right Links - Desktop */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] tracking-[0.3em] text-foreground hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-6 ml-4">
            <Search className="w-4 h-4 cursor-pointer hover:text-gold transition-colors" />
            <div className="relative" onClick={() => setIsOpen(true)}>
              <ShoppingBag className="w-4 h-4 cursor-pointer hover:text-gold transition-colors" />
              <span className="absolute -top-2 -right-2 bg-gold text-black text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-6">
          <div className="relative" onClick={() => setIsOpen(true)}>
            <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-gold" />
            <span className="absolute -top-2 -right-2 bg-gold text-black text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-black z-[100] md:hidden flex flex-col items-center justify-center p-12"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-white hover:text-gold transition-colors"
            >
              <X className="w-10 h-10" />
            </button>

            <div className="flex flex-col space-y-12 text-center">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-serif tracking-[0.2em] text-white hover:text-gold transition-colors uppercase italic"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-12 left-0 w-full flex justify-center space-x-12">
               <span className="text-gold tracking-widest text-[8px] uppercase">Instagram</span>
               <span className="text-gold tracking-widest text-[8px] uppercase">Twitter</span>
               <span className="text-gold tracking-widest text-[8px] uppercase">Support</span>
            </div>

            <div className="absolute inset-0 -z-10 overflow-hidden opacity-10">
               <h2 className="text-[20rem] font-serif text-gold absolute -bottom-20 -left-20 rotate-12 select-none">
                  PEPPS
               </h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
