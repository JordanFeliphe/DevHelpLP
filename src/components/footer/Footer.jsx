import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black py-10"> {/* Espaço maior para equilíbrio visual */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Seção Principal */}
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-10">
          {/* Sobre nós */}
          <div className="w-full md:flex-1">
            <h2 className="text-xl font-bold text-[#07bdbb] mb-4" style={{ fontFamily: '"Pixelify Sans", sans-serif' }}>
              Midnight Tec
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Somos especialistas em desenvolvimento tecnológico, entregando interfaces modernas, soluções escaláveis e experiências digitais de alto impacto.
            </p>
          </div>

          {/* Navegação */}
          <div className="w-full md:flex-1">
            <h2 className="text-lg font-semibold text-[#07bdbb] mb-3">Navegação</h2>
            <ul className="space-y-2 text-sm">
              {['Início', 'Sobre nós', 'Serviços', 'Contato'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-[#07bdbb] transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Conecte-se */}
          <div className="w-full md:flex-1">
            <h2 className="text-lg font-semibold text-[#07bdbb] mb-3">Conecte-se</h2>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://github.com/midcompany"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center border border-[#07bdbb] text-[#07bdbb] rounded-full hover:bg-[#07bdbb] hover:text-black transition-all duration-300"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>

            {/* Formulário de E-mail */}
            <div>
              <h2 className="text-lg font-semibold text-[#07bdbb] mb-3">Receba nossas novidades</h2>
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Digite seu e-mail"
                  className="flex-grow p-2 text-sm rounded-md border border-gray-700 bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#07bdbb]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#07bdbb] text-black text-sm font-medium rounded-md hover:bg-white hover:text-black transition-all duration-300"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="mt-8 border-t border-gray-800 pt-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} <span className="font-semibold text-[#07bdbb]">Midnight Tec</span>. Todos os direitos reservados.
          </p>
          <p className="mt-2 sm:mt-0">
            Desenvolvido pela equipe <span className="text-[#07bdbb] font-semibold">Midnight Tec</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
