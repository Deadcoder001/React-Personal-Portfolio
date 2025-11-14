import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import SocialMagnet from './components/SocialMagnet';
import ContactForm from './components/ContactForm';
import { SmoothCursor } from './components/ui/smooth-cursor';

import './App.css'

function App() {
  useEffect(() => {
    // 1. Initialize Lenis with custom settings for scroll speed
    const lenis = new Lenis({
      duration: 1.2, // Affects the animation duration
      lerp: 0.05, // Lower values (e.g., 0.05) are smoother and "floatier". Higher values (e.g., 0.2) are more responsive.
      smoothWheel: true,
    });

    // 2. Connect Lenis to GSAP's ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // 3. Use GSAP's ticker to drive Lenis's animation loop
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // 4. Cleanup on component unmount
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <>
      <SmoothCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
         <Education />
        <Projects />
        {/* <Certifications /> */}
        <ContactForm />
        <SocialMagnet />
      </main>
    </>
  )
}

export default App

