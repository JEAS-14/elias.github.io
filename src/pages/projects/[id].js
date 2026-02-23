import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getProjectById, projects } from '@/config/projects'
import Navbar from '@/components/Navbar'
import Background from '@/components/Background'
import Footer from '@/components/Footer'

export default function ProjectDetail({ project }) {
  if (!project) {
    return (
      <>
        <Head>
          <title>Proyecto No Encontrado</title>
        </Head>
        <Background />
        <Navbar />
        <main className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Proyecto No Encontrado</h1>
            <p className="text-slate-400 mb-8">Lo sentimos, no pudimos encontrar ese proyecto.</p>
            <Link href="/#projects" className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold">
              Volver a Proyectos
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{project.title} | Elías</title>
        <meta name="description" content={project.description} />
      </Head>

      <Background />
      <Navbar />

      <main className="relative z-10 min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link href="/#projects" className="text-cyan-400 hover:text-cyan-300 mb-6 inline-block">
              ← Volver a Proyectos
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{project.icon}</span>
              <div>
                <span className="px-3 py-1 rounded-full bg-slate-800/50 text-slate-300 text-sm">
                  {project.category}
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>

            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Metadata */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                <p className="text-slate-400 text-sm mb-1">Rol</p>
                <p className="text-white font-semibold">{project.role}</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                <p className="text-slate-400 text-sm mb-1">Timeline</p>
                <p className="text-white font-semibold">{project.timeline}</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                <p className="text-slate-400 text-sm mb-1">Estado</p>
                <p className="text-white font-semibold">{project.status}</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                <p className="text-slate-400 text-sm mb-1">Categoría</p>
                <p className="text-white font-semibold">{project.category}</p>
              </div>
            </div>
          </motion.div>

          {/* Imagen Principal */}
          {project.image && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-16 rounded-xl overflow-hidden border border-slate-700/50"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          )}

          {/* Contenido Principal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Columna Izquierda */}
            <div className="md:col-span-2">
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-white mb-4">Sobre el Proyecto</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>
              </motion.section>

              {/* Características */}
              {project.features && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-white mb-4">Características Principales</h2>
                  <ul className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <span className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500 flex items-center justify-center text-cyan-400 text-sm flex-shrink-0 mt-1">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.section>
              )}

              {/* Tecnologías */}
              {project.technologies && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-white mb-4">Stack Tecnológico</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.technologies.frontend && (
                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                        <h3 className="font-semibold text-cyan-400 mb-3">Frontend</h3>
                        <ul className="space-y-2">
                          {project.technologies.frontend.map((tech, idx) => (
                            <li key={idx} className="text-slate-300 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-cyan-500" />
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {project.technologies.backend && (
                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                        <h3 className="font-semibold text-blue-400 mb-3">Backend</h3>
                        <ul className="space-y-2">
                          {project.technologies.backend.map((tech, idx) => (
                            <li key={idx} className="text-slate-300 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-blue-500" />
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.section>
              )}
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              {/* Métricas */}
              {project.metrics && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-lg p-6 border border-slate-700/50 mb-6"
                >
                  <h3 className="text-xl font-bold text-white mb-4">Resultados</h3>
                  <div className="space-y-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="border-b border-slate-700/50 pb-4 last:border-b-0 last:pb-0">
                        <p className="text-slate-400 text-sm capitalize mb-1">{key.replace('_', ' ')}</p>
                        <p className="text-2xl font-bold text-cyan-400">{value}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Tags */}
              {project.tags && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-6"
                >
                  <h3 className="text-lg font-bold text-white mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-slate-800/50 text-slate-300 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Enlaces */}
              {project.links && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-6 border border-cyan-500/20"
                >
                  <h3 className="text-lg font-bold text-white mb-4">Enlaces</h3>
                  <div className="space-y-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 rounded bg-slate-800 text-white hover:bg-slate-700 transition-colors text-sm text-center"
                      >
                        GitHub
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 rounded bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-sm text-center"
                      >
                        Ver en Vivo
                      </a>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps({ params }) {
  const project = getProjectById(params.id)

  if (!project) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      project,
    },
    revalidate: 3600, // Revalidate cada hora
  }
}

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { id: project.id },
  }))

  return {
    paths,
    fallback: false,
  }
}
