import Link from 'next/link';
import SpotlightCard from './SpotlightCard';

export default function Projects() {
  return (
    <section id="proyectos" className="max-w-6xl mx-auto mb-32">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Proyecto 1 */}
            <Link href="/ecocollect" className="md:col-span-1 block h-80 group">
                <SpotlightCard className="h-full bg-black/40 backdrop-blur-xl border-white/10 hover:border-emerald-500/50 transition-colors relative overflow-hidden">
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded border border-emerald-500/20">Web App</span>
                        <span className="text-xl text-gray-500 group-hover:text-white transition-colors">↗</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 relative z-10">EcoCollect</h3>
                    <p className="text-gray-400 text-sm relative z-10">Plataforma de reciclaje con Next.js y Tailwind.</p>
                    <div className="absolute bottom-[-20px] right-[-20px] w-40 opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
                         {/* Asegúrate de tener la imagen */}
                        <img src="/ecocollect-laptop.png" alt="App" className="rounded-lg shadow-2xl" />
                    </div>
                </SpotlightCard>
            </Link>

            {/* Proyecto 2 */}
            <Link href="/tinkuy" className="md:col-span-1 block h-80 group">
                <SpotlightCard className="h-full bg-black/40 backdrop-blur-xl border-white/10 hover:border-blue-500/50 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                        <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded border border-blue-500/20">Analytics</span>
                        <span className="text-xl text-gray-500 group-hover:text-white transition-colors">↗</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Tinkuy</h3>
                    <p className="text-gray-400 text-sm">Dashboard BI para análisis de ventas y KPIs.</p>
                </SpotlightCard>
            </Link>

            {/* Proyecto 3 */}
            <Link href="/wifi" className="md:col-span-1 block h-80 group">
                <SpotlightCard className="h-full bg-black/40 backdrop-blur-xl border-white/10 hover:border-orange-500/50 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                        <span className="px-2 py-1 bg-orange-500/10 text-orange-400 text-xs rounded border border-orange-500/20">Infra</span>
                        <span className="text-xl text-gray-500 group-hover:text-white transition-colors">↗</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Redes UPN</h3>
                    <p className="text-gray-400 text-sm">Optimización de cobertura Wi-Fi y Heatmaps.</p>
                </SpotlightCard>
            </Link>

        </div>
    </section>
  );
}