import SpotlightCard from './SpotlightCard'; // Asegúrate de tener este componente creado

export default function About() {
  return (
    <section id="sobre-mi" className="max-w-5xl mx-auto mb-32">
        <SpotlightCard className="flex flex-col md:flex-row items-center gap-12 bg-black/40 backdrop-blur-xl border-white/10 p-12">
            <div className="w-48 h-48 shrink-0 rounded-full border-4 border-slate-800 relative overflow-hidden shadow-2xl">
                {/* Asegúrate de tener tu foto en public/perfil.png */}
                <img src="/perfil.png" alt="Perfil" className="w-full h-full object-cover" />
            </div>
            
            <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-white mb-6">Más que código 🚀</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Soy un perfil híbrido. No me conformo con solo escribir código; necesito entender los datos que hay detrás y la infraestructura que lo sostiene.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded bg-white/5 border border-white/10 text-center">
                        <span className="block text-cyan-400 font-bold text-xl">Junior</span>
                        <span className="text-xs text-gray-500 uppercase">Nivel</span>
                    </div>
                    <div className="p-3 rounded bg-white/5 border border-white/10 text-center">
                        <span className="block text-purple-400 font-bold text-xl">Remoto</span>
                        <span className="text-xs text-gray-500 uppercase">Modalidad</span>
                    </div>
                </div>
            </div>
        </SpotlightCard>
    </section>
  );
}