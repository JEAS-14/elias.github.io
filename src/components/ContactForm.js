"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

function ContactForm() {
    // Usa solo el ID de Formspree (no la URL completa)
    const [state, handleSubmit] = useForm("xdkqworb");

  if (state.succeeded) {
      return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-emerald-500/10 border border-emerald-500/50 p-8 rounded-3xl text-center"
        >
            <h3 className="text-2xl font-bold text-emerald-400 mb-2">¡Mensaje Enviado! 🚀</h3>
            <p className="text-gray-300">Gracias por contactarme, Elías. Te responderé pronto.</p>
        </motion.div>
      );
  }

  return (
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
        
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[50px] rounded-full -z-10"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/20 blur-[50px] rounded-full -z-10"></div>

        <h2 className="text-3xl font-bold text-white mb-6 text-center">Envíame un mensaje</h2>

        {/* Campo Email */}
        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 text-sm mb-2 font-mono uppercase">Tu Correo</label>
            <input
                id="email"
                type="email" 
                name="email"
                className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="ejemplo@correo.com"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Campo Mensaje */}
        <div className="mb-6">
            <label htmlFor="message" className="block text-gray-400 text-sm mb-2 font-mono uppercase">Mensaje</label>
            <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Hola Elías, me gustaría trabajar contigo..."
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        {/* Botón */}
        <button 
            type="submit" 
            disabled={state.submitting}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-lg hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all transform hover:scale-[1.02]"
        >
            {state.submitting ? "Enviando..." : "ENVIAR MENSAJE"}
        </button>
      </form>
  );
}

export default ContactForm;