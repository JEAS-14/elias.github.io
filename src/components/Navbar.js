"use client";

import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // Detectar si subes o bajas
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // Si bajas más de 150px y te mueves hacia abajo -> OCULTAR
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      // Si subes -> MOSTRAR
      setHidden(false);
    }
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" }, // Se esconde hacia arriba
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      // Diseño "Flotante" (Isla)
      className="fixed top-6 left-0 right-0 mx-auto w-max z-50 px-8 py-3 rounded-full flex gap-8 items-center backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
    >
      {/* LOGO PEQUEÑO */}
      <Link href="/" className="text-lg font-bold tracking-tighter text-white hover:text-purple-400 transition-colors">
        ELIAS<span className="text-purple-700">.</span>
      </Link>

      {/* ENLACES LIMPIOS */}
      <div className="flex gap-6 text-sm font-medium">
        <Link href="/" className="text-gray-300 hover:text-white hover:scale-105 transition-all">
          Inicio
        </Link>
        <a href="#proyectos" className="text-gray-300 hover:text-white hover:scale-105 transition-all">
          Proyectos
        </a>
      </div>

      {/* BOTÓN CONTACTO (Píldora) */}
      <a href="mailto:elias@email.com" className="px-10 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs font-bold tracking-widest hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all">
        HOLA!
      </a>
    </motion.nav>
  );
};

export default Navbar;