"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const cursorX = useSpring(0, { damping: 20, stiffness: 100 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Cinematic Spotlight */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[9998] opacity-20 mix-blend-soft-light"
        animate={{
          background: `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(201, 162, 74, 0.15), transparent 80%)`,
        }}
      />
      
      {/* Soft Glowing Dot */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        className="fixed top-0 left-0 w-4 h-4 bg-gold rounded-full z-[10000] pointer-events-none -ml-2 -mt-2 mix-blend-difference blur-[1px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />

      {/* Outer Ring */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        className="fixed top-0 left-0 w-12 h-12 border border-gold/20 rounded-full z-[10000] pointer-events-none -ml-6 -mt-6"
      />

      {/* Grain Overlay Wrapper */}
      <div className="grain-overlay" />
    </>
  );
};
