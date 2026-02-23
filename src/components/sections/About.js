'use client';

import { motion } from 'framer-motion';
import { TECH_STACK, ABOUT_CONTENT } from '@/config/constants';

export default function About() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Sobre Mí</h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            {ABOUT_CONTENT.introduction}
          </p>
        </motion.div>

        {/* Grid 2 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          {/* Columna Izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              {ABOUT_CONTENT.description}
            </p>
            
            <h3 className="text-xl font-bold text-white mb-4">Logros Principales</h3>
            <ul className="space-y-3">
              {ABOUT_CONTENT.achievements.map((achievement, idx) => (
                <motion.li
                  key={idx}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Columna Derecha */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl p-8 border border-slate-700/50"
          >
            <h3 className="text-xl font-bold text-white mb-6">Mi Historia</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Empecé como apasionado por la tecnología hace varios años. Con cada proyecto aprendí más, 
              desde desarrollo web hasta ciencia de datos.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Hoy combino creatividad con lógica para construir soluciones que impacten a usuarios reales.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}