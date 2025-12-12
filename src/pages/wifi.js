import Head from 'next/head'
import Link from 'next/link'

export default function Wifi() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-12 font-sans">
      <Head>
        <title>Optimización Wi-Fi | Infraestructura TI</title>
      </Head>

      {/* Navegación */}
      <nav className="max-w-4xl mx-auto mb-12">
        <Link href="/" className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
          ← Volver al inicio
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto">
        {/* Título */}
        <div className="mb-10">
            <span className="text-orange-400 font-bold tracking-wider text-sm uppercase">Infraestructura & Redes</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Optimización de Red Wi-Fi (Sede UPN)</h1>
            <p className="text-xl text-gray-400">
              Diagnóstico de cobertura y plan de mejora de conectividad para entornos de alta densidad.
            </p>
        </div>

        {/* Detalles Rápidos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
            <h3 className="text-gray-500 text-xs uppercase mb-1">Ubicación</h3>
            <p className="font-semibold">Sede Principal</p>
          </div>
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
            <h3 className="text-gray-500 text-xs uppercase mb-1">Herramientas</h3>
            <p className="font-semibold">Wi-Fi Analyzer, Packet Tracer</p>
          </div>
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
            <h3 className="text-gray-500 text-xs uppercase mb-1">Problema</h3>
            <p className="font-semibold text-red-400">Zonas Muertas</p>
          </div>
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
            <h3 className="text-gray-500 text-xs uppercase mb-1">Resultado</h3>
            <p className="font-semibold text-emerald-400">Cobertura 95%</p>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="space-y-12">
            
            {/* El Problema */}
            <section className="bg-slate-900/50 p-6 rounded-2xl border-l-4 border-orange-500">
                <h2 className="text-2xl font-bold mb-3 text-white">El Diagnóstico</h2>
                <p className="text-gray-300">
                    Los usuarios reportaban desconexiones constantes en los sótanos y áreas comunes. 
                    Realicé un análisis de espectro y descubrí interferencias graves en la banda de 2.4GHz 
                    y una distribución ineficiente de los Access Points (APs).
                </p>
            </section>

            {/* Metodología (Mapas de Calor) */}
            <section>
                <h2 className="text-2xl font-bold mb-6 text-white">Mapas de Calor y Solución</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <p className="text-gray-400">
                            Utilicé software de mapeo para visualizar la intensidad de la señal (RSSI). 
                            Esto permitió identificar los "puntos ciegos" exactos donde la señal caía por debajo de -70dBm.
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Reubicación estratégica de 4 APs.</li>
                            <li>Cambio de canales para evitar solapamiento.</li>
                            <li>Migración de dispositivos críticos a la banda de 5GHz.</li>
                        </ul>
                    </div>
                    
                    {/* Placeholder para tu imagen del mapa de calor */}
                    <div className="h-64 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center relative overflow-hidden">
                         <span className="text-gray-600 text-sm text-center px-4">
                             (Aquí iría la imagen de tu mapa de calor: rojo/verde)
                         </span>
                         <div className="absolute inset-0 bg-orange-500/5"></div>
                    </div>
                </div>
            </section>
        </div>

      </main>
    </div>
  )
}