import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black py-6"> {/* Reduzido o padding vertical */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-6"> {/* Gap reduzido */}
          {/* About Us */}
          <div className="w-full md:flex-1">
            <h2 className="text-lg font-semibold text-[#04adef] mb-2">Sobre nós</h2> {/* Margem inferior reduzida */}
            <p className="text-sm text-white">
              Desenvolvedores front-end focados em criar interfaces modernas, intuitivas e otimizadas para a melhor experiência digital.
            </p>
          </div>

          {/* Navigation */}
          <div className="w-full md:flex-1">
            <h2 className="text-lg font-semibold text-[#04adef] mb-2">Navegação</h2> {/* Margem inferior reduzida */}
            <ul className="space-y-1 text-sm text-[#b7153b]"> {/* Espaçamento interno reduzido */}
              <li>
                <a href="#" className="text-white hover:text-[#b7153b]">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#b7153b]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#b7153b]">
                  Find Buyers
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="w-full md:flex-1">
            <h2 className="text-lg font-semibold text-[#04adef] mb-2">Conexão</h2> {/* Margem inferior reduzida */}
            <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-3"> {/* Espaçamento reduzido */}
              {/* Ícones de Redes Sociais */}
              <div className="flex space-x-3"> {/* Espaçamento horizontal reduzido */}
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 text-[#b7153b] rounded-full hover:bg-[#04adef]" 
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 text-[#b7153b] rounded-full hover:bg-[#04adef]"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 text-[#b7153b] rounded-full hover:bg-[#04adef]"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 text-[#b7153b] rounded-full hover:bg-[#04adef]"
                >
                  <i className="fab fa-google"></i>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 text-[#b7153b] rounded-full hover:bg-[#04adef]"
                >
                  <i className="fab fa-android"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t border-gray-300 pt-4 flex flex-col sm:flex-row justify-center items-center text-sm text-white">
          <p className="text-center sm:text-left">
            © Copyright <span className="font-semibold text-[#04adef]">DevHelp</span>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
