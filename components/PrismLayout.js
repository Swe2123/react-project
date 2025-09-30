"use client";

import Prism from '@/components/Prism';

export default function PrismLayout({ children }) {
    return (
    <div className="relative min-h-screen bg-white">
      {/* Prism background */}
        <div className="absolute inset-0 z-0">
        <Prism
            animationType="rotate"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0}
            glow={1}
        />
        </div>

      {/* Content on top */}
        <div className="relative z-10">
        {children}
        </div>
        </div>
    );
}