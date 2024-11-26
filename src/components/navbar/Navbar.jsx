import React, { useState } from 'react';
import Logo from '../../assets/img/Logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 w-full bg-transparent text-[#b7153b] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src={Logo}
                alt="Logo"
                className="h-14 w-auto"
              />
            </a>
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
              className="flex items-center space-x-2 text-[#04adef] hover:text-[#b7153b] text-sm font-medium"
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
              onClick={toggleMenu}
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
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Links (Mobile) */}
        {isOpen && (
          <div className="md:hidden bg-black shadow-md rounded-lg border border-[#04adef] px-4">
            <div className="space-y-3 pt-2">
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
                className="flex items-center space-x-2 text-[#04adef] hover:text-[#b7153b] text-sm font-medium border-b-2 border-transparent hover:border-[#b7153b] transition-all pb-2"
              >
                <i className="fas fa-sign-in-alt"></i> <span>Entrar</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
