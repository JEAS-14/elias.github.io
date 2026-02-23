import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { projects } from '@/config/projects'
import Navbar from '@/components/Navbar'
import Background from '@/components/Background'
import Footer from '@/components/Footer'

export default function ProjectsPage() {
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
    <>
      <Head>
        <title>Proyectos | Elías</title>
        <meta name="description" content="Proyectos completos de desarrollo web, analytics y infraestructura" />
      </Head>

      <Background />
      <Navbar />

      <main className="relative z-10 min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Todos los Proyectos
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Explora mi portafolio completo de proyectos. Cada uno es una oportunidad de aprendizaje y crecimiento.
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl"
              >
                {/* Contenido */}
                <div className="mb-6">
                  <div className="text-5xl mb-4">{project.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    {project.category}
                  </p>
                </div>

                {/* Descripción */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded text-xs bg-slate-800/50 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Ver Detalle
                  <span>→</span>
                </Link>

                {/* Fondo */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-20 text-center"
          >
            <p className="text-slate-400 mb-6">
              ¿Interesado en trabajar juntos?
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              Iniciar Conversación
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  )
}
