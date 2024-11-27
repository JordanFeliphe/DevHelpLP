import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Frontend Responsivo",
      description:
        "Desenvolvemos interfaces dinâmicas e responsivas com React e tecnologias modernas.",
      icon: "🖥️",
    },
    {
      id: 2,
      title: "Integração de APIs",
      description:
        "Integramos aplicações usando REST e GraphQL para eficiência e conectividade.",
      icon: "🔗",
    },
    {
      id: 3,
      title: "Design Moderno",
      description:
        "Criamos experiências adaptáveis que priorizam a usabilidade e o design.",
      icon: "📱",
    },
    {
      id: 4,
      title: "Banco de Dados Seguro",
      description:
        "Gerenciamos dados com SQL e MongoDB, garantindo segurança e escalabilidade.",
      icon: "🗄️",
    },
    {
      id: 5,
      title: "Testes Automatizados",
      description:
        "Asseguramos a qualidade do código com Jest e Cypress para testes robustos.",
      icon: "✅",
    },
    {
      id: 6,
      title: "Alta Performance",
      description:
        "Aprimoramos aplicações, reduzindo tempos de carregamento e uso de recursos.",
      icon: "⚡",
    },
  ];
  

  return (
    <section className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="text-left mb-8">
          <h2
            className="text-3xl font-semibold text-[#d02013]"
            style={{ fontFamily: '"Pixelify Sans", sans-serif' }}
          >
            Tecnologias e Habilidades
          </h2>
          <p className="text-white mt-4">
            Excelência em desenvolvimento web e design responsivo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex items-start bg-[#0a0a0a] rounded-lg p-6 shadow-[0_4px_6px_rgba(4,173,239,0.2)] transition-transform transform hover:scale-105"
            >
              {/* Ícone */}
              <div className="text-5xl text-gray-400 mr-4 group-hover:text-[#04adef] transition-colors duration-300">
                {service.icon}
              </div>
              {/* Conteúdo */}
              <div>
                <h3 className="text-xl font-semibold text-white group-hover:text-[#04adef] transition-colors duration-300 mb-2">
                  {service.title}
                </h3>
                <p className="text-white text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
