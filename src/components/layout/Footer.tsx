"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Twitter, Facebook, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-[#050505] pt-24 pb-12 border-t border-gold/10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <Link href="/" className="text-3xl font-serif tracking-widest gold-gradient-text font-bold mb-8 block">
              PEPPS
            </Link>
            <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs">
              Defining the future of luxury streetwear. Crafted with passion, worn with pride.
            </p>
          </div>

          <div>
            <h4 className="text-white tracking-[0.3em] text-[10px] uppercase mb-8 font-bold">Collections</h4>
            <ul className="space-y-4">
              <FooterLink href="#">All Products</FooterLink>
              <FooterLink href="#">New Arrivals</FooterLink>
              <FooterLink href="#">Essential Tees</FooterLink>
              <FooterLink href="#">Streetwear Drops</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-white tracking-[0.3em] text-[10px] uppercase mb-8 font-bold">Support</h4>
            <ul className="space-y-4">
              <FooterLink href="#">Shipping Policy</FooterLink>
              <FooterLink href="#">Returns & Exchanges</FooterLink>
              <FooterLink href="#">Size Guide</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-white tracking-[0.3em] text-[10px] uppercase mb-8 font-bold">Newsletter</h4>
            <p className="text-white/30 text-[10px] mb-6 tracking-wider uppercase">Get exclusive access to private drops.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-gold/20 pb-4 text-[10px] tracking-widest text-white focus:outline-none focus:border-gold transition-colors"
              />
              <button className="absolute right-0 top-0 text-gold hover:translate-x-1 hover:-translate-y-1 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <div className="flex space-x-8">
            <Instagram className="w-5 h-5 text-white/40 hover:text-gold cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-white/40 hover:text-gold cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 text-white/40 hover:text-gold cursor-pointer transition-colors" />
          </div>
          <p className="text-white/20 text-[10px] tracking-[0.4em] uppercase">
            © 2024 PEPPS CLOTHING. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li>
    <Link href={href} className="text-white/40 text-xs tracking-widest uppercase hover:text-gold transition-colors duration-300">
      {children}
    </Link>
  </li>
);
