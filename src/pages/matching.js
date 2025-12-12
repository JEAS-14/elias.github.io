import Head from 'next/head'
import Link from 'next/link'

export default function Matching() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-12 font-sans">
      <Head>
        <title>Modelo Predictivo | Machine Learning</title>
      </Head>

      {/* Navegación */}
      <nav className="max-w-4xl mx-auto mb-12">
        <Link href="/" className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
          ← Volver al inicio
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <div className="mb-10">
            <span className="text-purple-400 font-bold tracking-wider text-sm uppercase">Data Science & AI</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Modelo Predictivo de Tendencias</h1>
            <p className="text-xl text-gray-400">
              Algoritmo en Python para identificar patrones de comportamiento y predecir "matches" efectivos.
            </p>
        </div>

        {/* Stack Tecnológico */}
        <div className="flex gap-4 mb-12 flex-wrap">
          <span className="px-4 py-2 bg-slate-900 border border-purple-500/30 rounded-lg text-purple-400 font-mono">Python</span>
          <span className="px-4 py-2 bg-slate-900 border border-purple-500/30 rounded-lg text-purple-400 font-mono">Pandas</span>
          <span className="px-4 py-2 bg-slate-900 border border-purple-500/30 rounded-lg text-purple-400 font-mono">Scikit-Learn</span>
          <span className="px-4 py-2 bg-slate-900 border border-purple-500/30 rounded-lg text-purple-400 font-mono">Google Colab</span>
        </div>

        {/* Explicación Técnica */}
        <div className="grid md:grid-cols-2 gap-12">
            
            {/* Columna Izquierda: Lógica */}
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-3 text-white">¿Cómo funciona?</h2>
                    <p className="text-gray-400 leading-relaxed">
                        El objetivo era predecir qué beneficiarios tenían mayor probabilidad de éxito en el programa. 
                        Desarrollé un script en <strong>Python</strong> que analiza variables históricas (edad, ubicación, intereses) 
                        y genera un "score de compatibilidad".
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-3 text-white">El Código</h2>
                    <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 font-mono text-xs text-gray-300 overflow-x-auto">
                        <p className="text-purple-400">import <span className="text-white">pandas</span> as <span className="text-white">pd</span></p>
                        <p className="text-purple-400">from <span className="text-white">sklearn.cluster</span> import <span className="text-white">KMeans</span></p>
                        <br/>
                        <p className="text-gray-500"># Cargar dataset limpio</p>
                        <p>df = pd.read_csv(<span className="text-emerald-300">'data_beneficiarios.csv'</span>)</p>
                        <br/>
                        <p className="text-gray-500"># Algoritmo de agrupación</p>
                        <p>kmeans = KMeans(n_clusters=3)</p>
                        <p>df[<span className="text-emerald-300">'cluster'</span>] = kmeans.fit_predict(df[[<span className="text-emerald-300">'score'</span>, <span className="text-emerald-300">'edad'</span>]])</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">* Fragmento simplificado del algoritmo de clustering.</p>
                </section>
            </div>

            {/* Columna Derecha: Resultados Visuales */}
            <div className="space-y-6">
                 <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 h-full flex flex-col justify-center items-center text-center">
                    <div className="w-full h-40 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl mb-4 flex items-center justify-center border border-slate-700 border-dashed">
                        <span className="text-gray-500">Gráfico de Dispersión (Matplotlib)</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Resultados</h3>
                    <p className="text-gray-400 text-sm">
                        Logramos segmentar a los usuarios en 3 grupos claros, permitiendo personalizar la estrategia de contacto y aumentando la efectividad en un <strong>20%</strong>.
                    </p>
                 </div>
            </div>
        </div>

      </main>
    </div>
  )
}