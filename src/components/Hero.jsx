import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white"
    >
      <div className="container-custom section-padding text-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Revanth Goud Gajagauni
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gold-400 font-semibold mb-6">
            Data and Business Analyst
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            A results-driven Data Analyst with over 4 years of experience in data migration,
            financial analytics, and business intelligence across insurance, nonprofit, and education sectors.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={scrollToContact}
              className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
            <a
              href="https://linkedin.com/in/revanthgoudgajagauni"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-white hover:bg-white hover:text-navy-900 font-semibold rounded-lg transition-all duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/revanthgoud"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-white hover:bg-white hover:text-navy-900 font-semibold rounded-lg transition-all duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
