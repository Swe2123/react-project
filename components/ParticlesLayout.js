"use client";

import Particles from '@/components/Particles';

export default function PrismLayout({ children }) {
    return (
    <div className="relative min-h-screen bg-gradient-to-r from-fuchsia-500 to-cyan-500">
      {/* Prism background */}
        <div className="absolute inset-0 z-0">
        <Particles
            particleColors={['#0000FF', '#FFC0CB']}
            particleCount={100}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={300}
        moveParticlesOnHover={false}
        alphaParticles={true}
        disableRotation={true}
        />
        </div>

      {/* Content on top */}
        <div className="relative z-10">
        {children}
        </div>
        </div>
    );
}