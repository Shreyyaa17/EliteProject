import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main title animation
      gsap.fromTo(
        '.hero-title', 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.3
        }
      );
      
      // Subtitle animation
      gsap.fromTo(
        '.hero-subtitle', 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.5
        }
      );
      
      // Button animation
      gsap.fromTo(
        '.hero-button', 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: 'power3.out',
          delay: 0.7
        }
      );
      
      // Animated sphere
      gsap.to('.hero-sphere', {
        y: -30,
        duration: 2,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true
      });
      
      // Scroll indicator animation
      gsap.fromTo(
        '.scroll-indicator',
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 1.5,
          ease: 'power2.out'
        }
      );
      
      gsap.to('.scroll-indicator', {
        y: 10,
        duration: 1.5,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true
      });
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative h-screen flex items-center justify-center bg-primary-950 overflow-hidden"
    >
      {/* Background gradient spheres */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-accent-600/20 blur-[100px] -top-20 -left-20" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px] bottom-0 right-0" />
      
      {/* Interactive sphere */}
      <div className="absolute hero-sphere right-1/4 top-1/4 w-32 h-32 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full opacity-70 blur-sm" />
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="block">Crafting Digital</span>
            <span className="block bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>
          
          <p className="hero-subtitle text-lg md:text-xl text-primary-300 mb-10 max-w-2xl mx-auto">
            We build cutting-edge web experiences that merge design and technology to create something truly extraordinary for your brand.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 hero-button">
            <a href="#work" className="px-8 py-4 rounded-full bg-accent-600 hover:bg-accent-500 text-white font-medium transition-all shadow-lg shadow-accent-600/20 hover:shadow-accent-500/30">
              View Our Work
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full bg-primary-800 hover:bg-primary-700 text-white font-medium transition-all border border-primary-700">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-primary-400 text-sm mb-2">Scroll to explore</p>
        <div className="w-6 h-10 rounded-full border-2 border-primary-400 flex justify-center pt-2 mx-auto">
          <div className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}