"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LuxuryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  children: React.ReactNode;
}

export const LuxuryButton = ({ 
  variant = "primary", 
  className, 
  children, 
  ...props 
}: LuxuryButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative px-8 py-3 font-sans text-sm tracking-[0.2em] uppercase transition-all duration-300",
        variant === "primary" 
          ? "bg-gold text-black hover:bg-gold-light" 
          : "border border-gold text-gold hover:bg-gold hover:text-black",
        "gold-border-glow",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
