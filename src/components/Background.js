"use client";

import TechConstellation from './TechConstellation'; // Tu archivo de constelaciones

export default function Background() {
  return (
    <div className="fixed inset-0 z-0">
        {/* Capa 1: Estrellas conectadas */}
        <TechConstellation />
        
        {/* Capa 2: Color Azul Noche semitransparente */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0c1222] to-black opacity-95"></div>
        
        {/* Capa 3: Viñeta */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,black_100%)] opacity-70"></div>
    </div>
  );
}