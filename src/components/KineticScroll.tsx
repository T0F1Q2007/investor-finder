'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface KineticScrollProps {
  children: React.ReactNode;
}

export default function KineticScroll({ children }: KineticScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !sliderRef.current) return;

    // Calculate total width to scroll
    const sliderWidth = sliderRef.current.scrollWidth;
    const windowWidth = window.innerWidth;
    
    // Only apply horizontal scroll if content is wider than viewport
    if (sliderWidth > windowWidth) {
      const xOffset = -(sliderWidth - windowWidth + 100); // 100px padding

      const ctx = gsap.context(() => {
        gsap.to(sliderRef.current, {
          x: xOffset,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1, // Smooth scrubbing
            start: 'top top',
            end: () => `+=${sliderWidth}`, // The scroll distance equals the width of the slider
            invalidateOnRefresh: true,
          }
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, [children]); // Re-run if children change

  return (
    <div ref={containerRef} className="h-screen w-full overflow-hidden bg-black flex items-center">
      <div className="pl-8 md:pl-24 pt-24 w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 shrink-0">
          Matched Investors
        </h2>
        <div ref={sliderRef} className="flex gap-8 w-max pr-24 pb-12">
          {children}
        </div>
      </div>
    </div>
  );
}
