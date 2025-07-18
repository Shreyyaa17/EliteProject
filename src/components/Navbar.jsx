import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Navbar() {
  const navRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.nav-item', 
        { y: -20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 0.8,
          ease: 'power3.out'
        }
      );
    }, navRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <nav 
      ref={navRef} 
      className="fixed w-full px-6 lg:px-12 py-6 z-50 backdrop-blur-lg bg-primary-950/80"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-white font-bold text-xl sm:text-2xl nav-item">
          ELITE<span className="text-accent-500">.</span>
        </a>
        
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="text-white/80 hover:text-accent-400 transition-colors nav-item">About</a>
          <a href="#services" className="text-white/80 hover:text-accent-400 transition-colors nav-item">Services</a>
          <a href="#work" className="text-white/80 hover:text-accent-400 transition-colors nav-item">Work</a>
          <a href="#contact" className="bg-accent-600 hover:bg-accent-500 text-white px-6 py-2 rounded-full transition-all hover:shadow-lg hover:shadow-accent-500/20 nav-item">
            Contact
          </a>
        </div>
        
        <button className="md:hidden text-white text-xl nav-item">
          ☰
        </button>
      </div>
    </nav>
  );
}