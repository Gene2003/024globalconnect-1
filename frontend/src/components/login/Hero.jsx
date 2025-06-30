import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Background images for the slideshow
  const slides = [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero text-center pt-40 pb-24 relative overflow-hidden">
      {/* Slideshow background */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
        {/* Overlay to make text more readable */}
      </div>
      
      <div className="container mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Empowering African Communities Through Digital Solutions
        </h1>
        <p className="text-lg text-white max-w-2xl mx-auto mb-8">
          Bridging the gap between opportunities and communities through innovative technology solutions.
        </p>
        <div className="flex justify-center gap-4 mb-10">
          <a href="#" className="btn bg-white text-blue-600 hover:bg-blue-50">Learn More</a>
          <a href="#" className="btn btn-outline border-white text-white hover:bg-white hover:text-blue-600">Watch Video</a>
        </div>
        <div className="hero-image mx-auto max-w-4xl rounded-lg overflow-hidden shadow-lg">
          <img src="https://via.placeholder.com/800x450?text=Digital+Empowerment+Platform" alt="Digital empowerment platform" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
