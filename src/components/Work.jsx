import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const workRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = ['all', 'web', 'mobile', 'branding'];
  
  const projects = [
    {
      id: 1,
      title: 'Modern E-Commerce Platform',
      category: 'web',
      description: 'A full-featured e-commerce solution with seamless UX and modern design.'
    },
    {
      id: 2,
      title: 'Banking Mobile Application',
      category: 'mobile',
      description: 'Secure and intuitive mobile banking app with advanced features.'
    },
    {
      id: 3,
      title: 'Corporate Brand Identity',
      category: 'branding',
      description: 'Complete brand identity redesign for a tech company.'
    },
    {
      id: 4,
      title: 'Real Estate Platform',
      category: 'web',
      description: 'Interactive property search and virtual tour platform.'
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'Health monitoring and workout tracking application.'
    },
    {
      id: 6,
      title: 'Restaurant Brand Package',
      category: 'branding',
      description: 'Logo design and visual identity for an upscale restaurant.'
    }
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo(
        '.work-title',
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.work-title',
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out'
        }
      );
      
      // Category filters animation
      gsap.fromTo(
        '.category-btn',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.categories-container',
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: 'power3.out'
        }
      );
      
      // Project items animation on initial load
      animateProjectItems();
    }, workRef);
    
    return () => ctx.revert();
  }, []);
  
  // Animation for project items when category changes
  useEffect(() => {
    animateProjectItems();
  }, [activeCategory]);
  
  const animateProjectItems = () => {
    // Clear any existing animations on project items
    gsap.killTweensOf('.project-item');
    
    // Animate the filtered project items
    gsap.fromTo(
      '.project-item',
      { 
        y: 40, 
        opacity: 0,
        scale: 0.95
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out'
      }
    );
  };

  return (
    <section 
      ref={workRef}
      id="work" 
      className="py-24 bg-primary-900"
    >
      <div className="container mx-auto px-6">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="work-title text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-accent-500">Work</span>
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>
          <p className="work-title max-w-2xl mx-auto text-primary-300">
            Explore our portfolio of successful projects that showcase our expertise and creativity.
          </p>
        </div>
        
        {/* Categories filter */}
        <div className="categories-container flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category 
                  ? 'bg-accent-600 text-white' 
                  : 'bg-primary-800 text-primary-300 hover:bg-primary-700'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="project-item group"
            >
              <div className="relative overflow-hidden rounded-xl">
                <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-primary-800 to-primary-700 group-hover:scale-105 transition-transform duration-500">
                  {/* Project image would go here */}
                  <div className="flex items-center justify-center text-accent-500 text-5xl">
                    {project.category === 'web' && '🌐'}
                    {project.category === 'mobile' && '📱'}
                    {project.category === 'branding' && '✨'}
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-primary-300 mb-4">{project.description}</p>
                  <a href="#" className="inline-flex items-center text-accent-400 hover:text-accent-300">
                    <span>View Project</span>
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}