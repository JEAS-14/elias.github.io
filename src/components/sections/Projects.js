'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/config/projects';

const colorMap = {
  emerald: 'border-emerald-500/50 hover:border-emerald-500 hover:shadow-emerald-500/20',
  blue: 'border-blue-500/50 hover:border-blue-500 hover:shadow-blue-500/20',
  orange: 'border-orange-500/50 hover:border-orange-500 hover:shadow-orange-500/20',
  purple: 'border-purple-500/50 hover:border-purple-500 hover:shadow-purple-500/20',
};

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-slate-400 text-lg">
            Soluciones que transforman ideas en resultados tangibles
          </p>
        </motion.div>
        {/* Grid de Proyectos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`group relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 transition-all duration-300 hover:shadow-2xl ${colorMap[project.color]}`}
            >
              {/* Contenido */}
              <div className="relative z-10">
                
                {/* Categoría */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{project.icon}</span>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Título */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                {/* Descripción corta */}
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-800/50 text-slate-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Enlace */}
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold"
                >
                  Ver Detalle
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </Link>
              </div>

              {/* Fondo gradiente en hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* Ver Todos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-all"
          >
            Ver todos los proyectos
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}