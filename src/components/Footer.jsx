import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Footer() {
  const footerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer animation
      gsap.fromTo(
        '.footer-content',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.footer-content',
            start: 'top bottom',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out'
        }
      );
    }, footerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="bg-primary-950 py-12 border-t border-primary-800"
    >
      <div className="container mx-auto px-6">
        <div className="footer-content grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#" className="text-white font-bold text-2xl">
              ELITE<span className="text-accent-500">.</span>
            </a>
            <p className="text-primary-400 mt-4 max-w-md">
              Crafting exceptional digital experiences that combine stunning design with powerful functionality to help brands thrive in the digital landscape.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-400 hover:text-accent-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-primary-400 hover:text-accent-400 transition-colors">About</a></li>
              <li><a href="#services" className="text-primary-400 hover:text-accent-400 transition-colors">Services</a></li>
              <li><a href="#work" className="text-primary-400 hover:text-accent-400 transition-colors">Work</a></li>
              <li><a href="#contact" className="text-primary-400 hover:text-accent-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-400 hover:text-accent-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-primary-400 hover:text-accent-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-primary-400 hover:text-accent-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-800 mt-12 pt-8 text-center">
          <p className="text-primary-500 text-sm">
            &copy; {new Date().getFullYear()} ELITE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}