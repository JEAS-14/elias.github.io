import Head from 'next/head'
import Link from 'next/link'

export default function EcoCollect() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <Head>
        <title>EcoCollect | Detalle del Proyecto</title>
      </Head>

      {/* Botón para volver atrás */}
      <Link href="/" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block font-medium">
        ← Volver al inicio
      </Link>

      <main className="max-w-4xl mx-auto">
        {/* Título del Proyecto */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">EcoCollect App ♻️</h1>
        <p className="text-xl text-gray-400 mb-8">
          Plataforma móvil para optimizar la recolección y reciclaje de residuos urbanos.
        </p>

        {/* Detalles Técnicos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
            <h3 className="text-emerald-400 font-bold mb-2">Mi Rol</h3>
            <p>Diseño UI (Figma) & Frontend (Next.js)</p>
          </div>
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
            <h3 className="text-emerald-400 font-bold mb-2">Stack Tech</h3>
            <p>React, Tailwind CSS, Figma</p>
          </div>
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
            <h3 className="text-emerald-400 font-bold mb-2">Estado</h3>
            <p>Prototipo Funcional</p>
          </div>
        </div>
        {/* --- GALERÍA PRO --- */}
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Galería de Interfaces</h2>

        <div className="w-full flex justify-center mb-20 relative">
          {/* 1. Fondo de brillo verde detrás para que resalte */}
          <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full -z-10"></div>

          {/* 2. La Imagen mucho más grande (max-w-4xl) */}
          <img
            src="/ecocollect-mockup.png"
            alt="EcoCollect App"
            className="w-full max-w-5xl rounded-xl shadow-2xl border border-slate-800 hover:scale-[1.02] transition-transform duration-500"
          />
        </div>


        {/* Explicación del Reto */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">El Desafío</h2>
          <p className="text-gray-300 leading-relaxed">
            El objetivo era conectar a los recolectores con los ciudadanos.
            Me encargué de diseñar un flujo de usuario simple donde, con solo 3 toques,
            una persona pudiera solicitar el retiro de material reciclable.
            <br /><br />
            Aunque inicialmente tuvimos problemas integrando el Backend, logré completar
            toda la interfaz visual usando <strong>Next.js</strong> para asegurar que fuera rápida y responsiva.
          </p>
        </div>
      </main>
    </div>
  )
}