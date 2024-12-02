import React, { useState, useEffect } from "react";

function Navbar() {
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 200;
      const currentScroll = window.scrollY;
      const opacity = Math.min(currentScroll / maxScroll, 1);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileClick = (href) => {
    setIsOpen(false); // Fecha o menu
    const element = document.querySelector(href); // Seleciona o elemento correspondente ao ID
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Faz o scroll suave até o elemento
    }
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 transition duration-300"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${scrollOpacity})`,
        boxShadow:
          scrollOpacity > 0.2 ? "0 4px 10px rgba(0, 0, 0, 0.3)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-16">
          {/* Menu Links (Desktop) */}
          <div className="hidden md:flex space-x-8">
            {[
              { href: "#inicio", label: "Início", icon: "fas fa-home" },
              { href: "#sobre", label: "Sobre", icon: "fas fa-info-circle" },
              { href: "#tecnologias", label: "Tecnologias", icon: "fas fa-tools" },
              { href: "#time", label: "Time", icon: "fas fa-users" },
              { href: "#projetos", label: "Projetos", icon: "fas fa-project-diagram" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center space-x-2 text-[#07bdbb] hover:text-white text-sm font-medium group"
              >
                <i
                  className={`${item.icon} text-lg transition-transform transform group-hover:scale-110`}
                ></i>
                <span className="transition-colors group-hover:underline">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          {/* Menu Button (Hamburger) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-[#07bdbb] hover:text-white"
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
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Links (Mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black shadow-lg transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-xl self-end mb-6 hover:text-[#07bdbb]"
          >
            ✖
          </button>
          {[
            { href: "#inicio", label: "Início", icon: "fas fa-home" },
            { href: "#sobre", label: "Sobre", icon: "fas fa-info-circle" },
            { href: "#tecnologias", label: "Tecnologias", icon: "fas fa-tools" },
            { href: "#time", label: "Time", icon: "fas fa-users" },
            { href: "#projetos", label: "Projetos", icon: "fas fa-project-diagram" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleMobileClick(item.href)}
              className="flex items-center space-x-3 text-[#07bdbb] hover:text-white text-sm font-medium border-b border-transparent hover:border-[#07bdbb] transition-all w-full text-left"
            >
              <i
                className={`${item.icon} text-lg transition-transform transform group-hover:scale-110`}
              ></i>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
