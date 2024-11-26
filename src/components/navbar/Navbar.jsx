import React, { useState, useEffect } from 'react';
import Logo from '../../assets/img/Logo.png';

function Navbar() {
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 200; // Distância máxima para a transição de opacidade
      const currentScroll = window.scrollY;
      const opacity = Math.min(currentScroll / maxScroll, 1); // Calcula a opacidade (0 a 1)
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-50 transition duration-300"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${scrollOpacity})`, // Opacidade dinâmica
        boxShadow: scrollOpacity > 0.2 ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none', // Sombra ao rolar
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            {/* <a href="/">
              <img src={Logo} alt="Logo" className="h-14 w-auto" />
            </a> */}
          </div>

          {/* Menu Links (Desktop) */}
          <div className="hidden md:flex space-x-6 justify-end">
            <a
              href="#precos"
              className="flex items-center space-x-2 text-[#04adef] hover:text-[#b7153b] text-sm font-medium"
            >
              <i className="fas fa-home"></i> <span>Preços</span>
            </a>
            <a
              href="#sobre"
              className="flex items-center space-x-2 text-[#04adef] hover:text-[#b7153b] text-sm font-medium"
            >
              <i className="fas fa-info-circle"></i> <span>Sobre</span>
            </a>
            <a
              href="#blog"
              className="flex items-center space-x-2 text-[#04adef] hover:text-[#b7153b] text-sm font-medium "
            >
              <i className="fas fa-blog"></i> <span>Blog</span>
            </a>
            <a
              href="#depoimentos"
              className="flex items-center space-x-2 text-[#04adef] hover:text-[#b7153b] text-sm font-medium"
            >
              <i className="fas fa-comments"></i> <span>Depoimentos</span>
            </a>
          </div>

          {/* Menu Button (Hamburger) */}
          <div className="flex md:hidden justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-[#b7153b] hover:text-gray-400"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16m-7 6h7'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Links (Mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black shadow-md transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="space-y-3 p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-xl mb-4"
          >
            ✖
          </button>
          <a
            href="#precos"
            className="flex items-center space-x-2 text-[#04adef] hover:text-[#b7153b] text-sm font-medium border-b-2 border-transparent hover:border-[#b7153b] transition-all"
          >
            <i className="fas fa-home"></i> <span>Preços</span>
          </a>
          <a
            href="#sobre"
            className="flex items-center space-x-2 text-[#04adef] hover:text-[#b7153b] text-sm font-medium border-b-2 border-transparent hover:border-[#b7153b] transition-all"
          >
            <i className="fas fa-info-circle"></i> <span>Sobre</span>
          </a>
          <a
            href="#blog"
            className="flex items-center space-x-2 text-[#04adef] hover:text-[#b7153b] text-sm font-medium border-b-2 border-transparent hover:border-[#b7153b] transition-all"
          >
            <i className="fas fa-blog"></i> <span>Blog</span>
          </a>
          <a
            href="#depoimentos"
            className="flex items-center space-x-2 text-[#04adef] hover:text-[#b7153b] text-sm font-medium border-b-2 border-transparent hover:border-[#b7153b] transition-all"
          >
            <i className="fas fa-comments"></i> <span>Depoimentos</span>
          </a>
          <a
            href="#entrar"
            className="flex items-center space-x-2 text-[#04adef] hover:text-[#b7153b] text-sm font-medium border-b-2 border-transparent hover:border-[#b7153b] transition-all"
          >
            <i className="fas fa-sign-in-alt"></i> <span>Entrar</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
