import React from "react";
import Section01 from '../../assets/img/section1.jpg';

export default function Section1() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        {/* Texto e Lista */}
        <div>
          <h2 className="text-3xl font-bold text-[#d02013] mb-4"
           style={{ fontFamily: '"Pixelify Sans", sans-serif' }}>Sobre nós</h2>
          <p className="text-white mb-8">
          Somos uma equipe apaixonada por desenvolvimento front-end, comprometida em transformar ideias em experiências digitais únicas. Com foco em interfaces modernas, intuitivas e responsivas, buscamos aliar design inovador e tecnologia de ponta para entregar soluções eficientes e cativantes.
          </p>

          {/* Lista */}
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="flex items-start space-x-4">
              <div className="text-[#d02013] text-2xl">
                <i className="fas fa-users"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#04a1c4]"
                >
                Parcerias que impulsionam resultado
                </h3>
                <p className="text-white">
                Atuamos lado a lado com nossos clientes, transformando ideias em projetos que impactam e conectam pessoas.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start space-x-4">
              <div className="text-[#d02013] text-2xl">
                <i className="fas fa-clipboard"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#04a1c4]">
                Planejamento estratégico e execução impecável
                </h3>
                <p className="text-white">
                Unimos organização e criatividade para desenvolver soluções digitais inovadoras e de alto desempenho.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start space-x-4">
              <div className="text-[#d02013] text-2xl">
                <i className="fas fa-broadcast-tower"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#04a1c4]">
                Inovação que conecta
                </h3>
                <p className="text-white">
                Criamos experiências digitais que engajam, aproximam e deixam uma marca duradoura no universo digital.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Imagem com Botão */}
        <div className="relative">
          <img
            src={Section01}
            alt="Team"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
