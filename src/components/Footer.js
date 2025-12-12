const Footer = () => {
  return (
    <footer className="w-full py-8 text-center border-t border-white/10 bg-black/50 backdrop-blur-md mt-20 relative z-10">
      <div className="flex justify-center gap-8 mb-4">
        {/* Enlace a LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/elias-juan-arango-salvador" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition-colors font-medium"
        >
          LinkedIn
        </a>

        {/* Enlace a GitHub */}
        <a 
          href="https://github.com/JEAS-14" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-purple-500 transition-colors font-medium"
        >
          GitHub
        </a>

        {/* Enlace a Email (Recuerda cambiar 'tu@correo.com' por el real) */}
        <a 
          href="mailto:tu-correo@ejemplo.com" 
          className="text-gray-400 hover:text-emerald-400 transition-colors font-medium"
        >
          Email
        </a>
      </div>
      
      <p className="text-gray-600 text-sm">
        © 2025 Elías Arango. Desarrollado con <span className="text-purple-500">Next.js</span>.
      </p>
    </footer>
  );
};

export default Footer;