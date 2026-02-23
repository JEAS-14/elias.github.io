import Head from 'next/head'
import { SITE_CONFIG } from '@/config/constants'
import Navbar from '@/components/layout/Navbar'
import Background from '@/components/layout/Background'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import TechStack from '@/components/sections/TechStack'
import Projects from '@/components/sections/Projects'
import ContactForm from '@/components/forms/ContactForm'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>{SITE_CONFIG.title}</title>
        <meta name="description" content={SITE_CONFIG.description} />
        <meta property="og:title" content={SITE_CONFIG.title} />
        <meta property="og:description" content={SITE_CONFIG.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Fondo y Navegación Global */}
      <Background />
      <Navbar />
      
      <main className="relative z-10 min-h-screen selection:bg-cyan-500 selection:text-black">
        <Hero />
        <Projects />
        <About />
        <TechStack />
        <ContactForm />
        <Footer />
      </main>
    </>
  )
}
