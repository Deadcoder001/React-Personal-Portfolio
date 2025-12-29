import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import RotatingText from './RotatingText';
import { WordRotate } from "@/components/ui/word-rotate";

/**
 * A modern, minimal hero section component.
 */
export default function Hero() {
  const skills = ['UI/UX Designer', 'Frontend Developer', 'Backend Developer', 'Creative Coder'];
  const greetings = ["Hello", "Hola", "Ciao", "مرحبا"];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 1. Spline Background */}
      <div className="absolute inset-0 z-10 w-full h-full">
        <Spline
          scene="https://prod.spline.design/9xuF1oRA5poA131s/scene.splinecode"
          aria-label="Interactive 3D animation"
        />
      </div>

      {/* 2. Overlay Content */}
      {/* Content is aligned to the center */}
      <div className="relative z-20 flex items-center justify-center w-full h-full p-8 text-center bg-black/20 pointer-events-none sm:p-16 md:p-24">
        <div className="max-w-md pointer-events-auto">
          <h1 className="font-pixel flex items-center justify-center gap-x-2 text-5xl font-bold text-white md:text-7xl lg:text-8xl [text-shadow:_0_3px_5px_rgb(0_0_0_/_40%)]">
            <WordRotate words={greetings} />
            {", I'm"}
          </h1>
          
          {/* Rotating Text for Skills */}
          <div className="flex justify-center mt-4">
            <RotatingText
              texts={skills}
              mainClassName="text-lg text-white/90 md:text-xl lg:text-2xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)]"
              splitLevelClassName="overflow-hidden"
              staggerDuration={0.08}
              staggerFrom="last"
            />
          </div>
        
          {/* Call-to-action buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="#projects"
              onClick={e => {
                e.preventDefault();
                setTimeout(() => {
                  const el = document.getElementById('projects');
                  if (el) {
                    el.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                      inline: 'nearest'
                    });
                  }
                }, 100);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-black transition-all duration-300 bg-white rounded-lg shadow-lg pointer-events-auto hover:bg-gray-200 hover:scale-105"
            >
              View My Work
              <ArrowRight size={20} />
            </a>
            <a
              href="https://drive.google.com/file/d/1vuvWLNdXU6Mh2FTUlzscJUAOXo-Uc_D9/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white transition-all duration-300 bg-transparent border border-white rounded-lg shadow-lg pointer-events-auto hover:bg-white hover:text-white hover:scale-105"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}