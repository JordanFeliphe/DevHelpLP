import React, { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-gradient-to-r from-[#04adef] to-[#07bdbb] p-3 rounded-md shadow-md hover:scale-105 transition-all duration-300 z-50 flex items-center justify-center group"
          aria-label="Voltar ao topo"
        >
          <div className="relative flex items-center justify-center">
            {/* Fundo tecnológico animado */}
            <span className="absolute inset-0 w-full h-full bg-[#07bdbb] rounded-md blur-md opacity-30 group-hover:animate-pulse"></span>
            {/* Ícone */}
            <i className="fas fa-arrow-up text-white text-lg"></i>
          </div>
        </button>
      )}
    </>
  );
}
