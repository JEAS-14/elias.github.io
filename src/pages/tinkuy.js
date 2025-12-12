import Head from 'next/head'
import Link from 'next/link'

export default function Tinkuy() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-12 font-sans">
      <Head>
        <title>Dashboard Tinkuy | Data Analytics</title>
      </Head>

      {/* Navegación */}
      <nav className="max-w-5xl mx-auto mb-12 flex justify-between items-center">
        <Link href="/" className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
          ← Volver al inicio
        </Link>
      </nav>

      <main className="max-w-5xl mx-auto">
        {/* Encabezado del Proyecto */}
        <div className="mb-12">
            <span className="text-blue-400 font-bold tracking-wider text-sm uppercase">Business Intelligence</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6">Dashboard E-commerce Tinkuy</h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Sistema de reporte interactivo para analizar el rendimiento de ventas de productos artesanales y optimizar el stock.
            </p>
        </div>

        {/* Resumen Técnico (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
            <h3 className="text-gray-500 text-sm mb-1 uppercase">Rol</h3>
            <p className="font-semibold text-white">Analista de Datos</p>
          </div>
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
            <h3 className="text-gray-500 text-sm mb-1 uppercase">Herramientas</h3>
            <p className="font-semibold text-white">Power BI, Excel, SQL</p>
          </div>
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
            <h3 className="text-gray-500 text-sm mb-1 uppercase">Impacto</h3>
            <p className="font-semibold text-emerald-400">+15% Ventas</p>
          </div>
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
            <h3 className="text-gray-500 text-sm mb-1 uppercase">Año</h3>
            <p className="font-semibold text-white">2025</p>
          </div>
        </div>

        {/* Sección de Análisis */}
        <div className="space-y-12">
            {/* Problema y Solución */}
            <section className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-white">El Reto</h2>
                    <p className="text-gray-400 leading-relaxed">
                        La empresa "Tinkuy" tenía datos de ventas dispersos en múltiples hojas de cálculo, lo que dificultaba identificar qué productos artesanales eran los más vendidos y en qué temporadas. Se necesitaba centralizar la información para tomar decisiones rápidas.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-white">La Solución</h2>
                    <p className="text-gray-400 leading-relaxed">
                        Implementé un proceso ETL (Extracción, Transformación y Carga) usando Power Query para limpiar los datos. Diseñé un Dashboard interactivo en Power BI que permite filtrar por categoría, región y fecha, visualizando los KPIs críticos del negocio.
                    </p>
                </div>
            </section>

            {/* Simulación de Imagen del Dashboard (Placeholder) */}
            <section className="w-full h-96 bg-slate-900 rounded-3xl border border-slate-800 flex items-center justify-center relative overflow-hidden group">
                <div className="text-center p-6">
                    <p className="text-gray-500 mb-2">Aquí irá la captura de tu Dashboard de Power BI</p>
                    <span className="text-xs text-gray-600">(Puedes subir la imagen a la carpeta public/images más tarde)</span>
                </div>
                {/* Efecto visual de fondo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent pointer-events-none"></div>
            </section>

            {/* Lecciones Aprendidas */}
            <section className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
                <h2 className="text-2xl font-bold mb-4">Aprendizajes Clave</h2>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Modelado de datos en estrella para optimizar consultas DAX.</li>
                    <li>Diseño de experiencia de usuario (UX) aplicado a reportes gerenciales.</li>
                    <li>Limpieza de datos (Data Cleaning) avanzada con Excel y Power Query.</li>
                </ul>
            </section>
        </div>

      </main>
    </div>
  )
}