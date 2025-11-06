import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white py-8">
      <div className="container-custom px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {currentYear} Revanth Goud Gajagauni. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="mailto:revanthgoudgajagauni@gmail.com"
              className="text-gray-400 hover:text-gold-400 transition-colors"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/revanthgoudgajagauni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/revanthgoud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
