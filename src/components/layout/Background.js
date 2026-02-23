'use client';

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Fondo base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black" />
      
      {/* Elemento flotante 1 */}
      <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-blue-600/10 rounded-full blur-3xl opacity-80" />
      
      {/* Elemento flotante 2 */}
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-cyan-600/10 rounded-full blur-3xl opacity-80" />
      
      {/* Grid sutil */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
    </div>
  );
}