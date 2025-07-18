import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo(
        '.section-title',
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.section-title',
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out'
        }
      );
      
      // Stats counter animation
      gsap.fromTo(
        '.stat-item',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.stats-container',
            start: 'top 75%',
          },
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out'
        }
      );
      
      // Content sections animation
      gsap.fromTo(
        '.about-content',
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out'
        }
      );
      
      // Team images staggered animation
      gsap.fromTo(
        '.team-item',
        { 
          y: 30, 
          opacity: 0,
          scale: 0.9
        },
        {
          scrollTrigger: {
            trigger: '.team-grid',
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out'
        }
      );
    }, aboutRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={aboutRef}
      id="about" 
      className="py-24 bg-primary-900"
    >
      <div className="container mx-auto px-6">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-accent-500">Us</span>
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto"></div>
        </div>
        
        {/* Stats */}
        <div className="stats-container grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="stat-item bg-primary-800/50 p-6 rounded-xl text-center">
            <p className="text-3xl md:text-4xl font-bold text-accent-400">50+</p>
            <p className="text-primary-300 mt-2">Projects Completed</p>
          </div>
          
          <div className="stat-item bg-primary-800/50 p-6 rounded-xl text-center">
            <p className="text-3xl md:text-4xl font-bold text-accent-400">10+</p>
            <p className="text-primary-300 mt-2">Years Experience</p>
          </div>
          
          <div className="stat-item bg-primary-800/50 p-6 rounded-xl text-center">
            <p className="text-3xl md:text-4xl font-bold text-accent-400">40+</p>
            <p className="text-primary-300 mt-2">Happy Clients</p>
          </div>
          
          <div className="stat-item bg-primary-800/50 p-6 rounded-xl text-center">
            <p className="text-3xl md:text-4xl font-bold text-accent-400">5</p>
            <p className="text-primary-300 mt-2">Industry Awards</p>
          </div>
        </div>
        
        {/* About content */}
        <div className="about-content grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">We Create Digital Experiences That Matter</h3>
            <p className="text-primary-300 mb-6">
              We are a team of passionate designers and developers dedicated to crafting exceptional digital experiences. 
              With a focus on innovation and attention to detail, we transform ideas into captivating realities.
            </p>
            <p className="text-primary-300 mb-6">
              Our approach combines cutting-edge technology with strategic thinking to deliver solutions that not only look
              stunning but also drive results for our clients.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-accent-500 mr-2"></div>
                <p className="text-primary-200">Strategic Design</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-accent-500 mr-2"></div>
                <p className="text-primary-200">Modern Technologies</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-accent-500 mr-2"></div>
                <p className="text-primary-200">User Experience</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-accent-500 mr-2"></div>
                <p className="text-primary-200">Performance Focused</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-tr from-accent-700 to-accent-400 w-full h-full opacity-90"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-3/4 aspect-w-4 aspect-h-3 rounded-xl overflow-hidden border-4 border-primary-900">
              <div className="bg-primary-800 w-full h-full"></div>
            </div>
          </div>
        </div>
        
        {/* Team section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-2">Meet Our Team</h3>
          <p className="text-primary-300 max-w-2xl mx-auto">
            Talented professionals committed to delivering excellence in every project
          </p>
        </div>
        
        <div className="team-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="team-item bg-primary-800/50 rounded-xl overflow-hidden group">
              <div className="aspect-w-1 aspect-h-1 bg-primary-700"></div>
              <div className="p-4">
                <h4 className="text-white font-medium">Team Member {item}</h4>
                <p className="text-sm text-primary-400">Position</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}