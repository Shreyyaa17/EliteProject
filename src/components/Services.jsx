import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const servicesRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo(
        '.services-title',
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.services-title',
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out'
        }
      );
      
      // Service cards staggered animation
      gsap.fromTo(
        '.service-card',
        { 
          y: 50, 
          opacity: 0,
          scale: 0.95
        },
        {
          scrollTrigger: {
            trigger: '.services-grid',
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
      
      // Service card hover animations
      document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card.querySelector('.service-icon'), {
            y: -10,
            duration: 0.4,
            ease: 'power2.out'
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card.querySelector('.service-icon'), {
            y: 0,
            duration: 0.4,
            ease: 'power2.out'
          });
        });
      });
    }, servicesRef);
    
    return () => ctx.revert();
  }, []);

  const services = [
    {
      id: 1,
      title: 'Web Design',
      description: 'Stunning, user-friendly interfaces that captivate and engage your audience, designed with conversion in mind.',
      icon: '🎨'
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'High-performance websites and applications built with the latest technologies and optimized for all devices.',
      icon: '💻'
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'User-centered design that delivers intuitive experiences, focusing on usability and visual aesthetics.',
      icon: '✏️'
    },
    {
      id: 4,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that provide seamless experiences across all devices.',
      icon: '📱'
    },
    {
      id: 5,
      title: 'E-Commerce',
      description: 'Complete online store solutions with secure payment processing, inventory management, and marketing tools.',
      icon: '🛒'
    },
    {
      id: 6,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns that drive traffic, increase brand awareness, and boost conversions.',
      icon: '📈'
    }
  ];

  return (
    <section 
      ref={servicesRef}
      id="services" 
      className="py-24 bg-primary-950"
    >
      <div className="container mx-auto px-6">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="services-title text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-accent-500">Services</span>
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>
          <p className="services-title max-w-2xl mx-auto text-primary-300">
            We offer comprehensive digital solutions tailored to your unique needs, helping your business thrive in the digital landscape.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card bg-primary-800/50 rounded-xl p-6 border border-primary-700 hover:border-accent-500 transition-all group"
            >
              <div className="service-icon flex justify-center items-center w-16 h-16 bg-accent-600/20 text-accent-400 rounded-lg text-2xl mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-primary-300">
                {service.description}
              </p>
              
              <div className="mt-6 pt-4 border-t border-primary-700">
                <a href="#contact" className="flex items-center text-accent-400 hover:text-accent-300 transition-colors">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}