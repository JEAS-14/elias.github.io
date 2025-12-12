"use client";

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center max-w-5xl mx-auto text-center mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-3 py-1 mb-6 mx-auto rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs tracking-widest uppercase font-bold backdrop-blur-md"
        >
            Disponible para trabajar
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-6xl md:text-9xl font-bold text-white mb-6 tracking-tighter drop-shadow-2xl"
        >
          ELÍAS<span className="text-cyan-500">.DEV</span>
        </motion.h1>
        
        <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
          Ingeniero en formación. Fusionando <span className="text-white font-medium border-b border-cyan-500/50">Datos</span>, <span className="text-white font-medium border-b border-purple-500/50">Código</span> e <span className="text-white font-medium border-b border-orange-500/50">Infraestructura</span>.
        </p>
        
        <div className="flex gap-4 justify-center mt-8">
            <a href="#proyectos" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-all hover:scale-105">Ver Trabajo</a>
        </div>
    </section>
  );
}