'use client';

import { motion } from 'framer-motion';
import { TECH_STACK } from '@/config/constants';

export default function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const renderStack = (stackArray) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-3 gap-3"
    >
      {stackArray.map((tech) => (
        <motion.div
          key={tech.name}
          variants={itemVariants}
          className="group p-4 bg-slate-900/50 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all hover:bg-slate-900/80"
        >
          <div className="text-2xl mb-2">{tech.icon}</div>
          <h4 className="font-semibold text-white text-sm mb-1">{tech.name}</h4>
          <p className="text-xs text-slate-400">{tech.level}</p>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section id="tech" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Stack Tecnológico</h2>
          <p className="text-slate-400 text-lg">
            Las herramientas que uso para construir soluciones
          </p>
        </motion.div>

        {/* Frontend */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-6 flex items-center gap-2"
          >
            <span className="text-cyan-500">▲</span> Frontend
          </motion.h3>
          {renderStack(TECH_STACK.frontend)}
        </div>

        {/* Backend */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-6 flex items-center gap-2"
          >
            <span className="text-green-500">🟢</span> Backend
          </motion.h3>
          {renderStack(TECH_STACK.backend)}
        </div>

        {/* Tools */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-6 flex items-center gap-2"
          >
            <span className="text-purple-500">⚙️</span> Herramientas
          </motion.h3>
          {renderStack(TECH_STACK.tools)}
        </div>
      </div>
    </section>
  );
}