import Head from 'next/head'
import Navbar from '../components/Navbar'
import Background from '../components/Background'
import Hero from '../components/Hero'
import About from '../components/About'
import TechStack from '../components/TechStack'
import Projects from '../components/Projects'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import FloatingDock from '../components/FloatingDock'

export default function Home() {
  return (
    <>
      <Head>
        <title>Elías | Portfolio</title>
      </Head>

      {/* 1. Fondo y Navegación Global */}
      <Background />
      <Navbar />
      
      <main className="relative z-10 min-h-screen px-4 pt-20 pb-40 font-sans selection:bg-cyan-500 selection:text-black">
        
        {/* 2. Invocamos cada sección en orden */}
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <ContactForm />
        <Footer />
        
        {/* 3. Elementos Flotantes */}
        <FloatingDock />
        
      </main>
    </>
  )
}