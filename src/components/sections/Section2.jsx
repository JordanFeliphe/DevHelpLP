import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Nesciunt Mete",
      description:
        "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
      icon: "🏙️", // Substitua pelo ícone adequado
    },
    {
      id: 2,
      title: "Eosle Commodi",
      description:
        "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
      icon: "🌊", // Substitua pelo ícone adequado
    },
    {
      id: 3,
      title: "Ledo Markt",
      description:
        "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
      icon: "📐", // Substitua pelo ícone adequado
    },
  ];

  return (
    <section className="bg-black py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[#d02013]">Services</h2>
          <p className="text-white mt-4">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-lg bg-black shadow-[0_4px_6px_rgba(255,255,255,0.5)] p-6 text-left group transition-transform transform hover:scale-105 "
            >
              {/* Ícone com transição de cor */}
              <div className="text-5xl text-gray-400 mb-4 group-hover:text-yellow-500 transition-colors duration-00">
                {service.icon}
              </div>
              {/* Título com efeito de linha */}
              <h3 className="text-xl font-semibold text-white group-hover:text-[#d02013] transition-colors duration-300 relative">
                {service.title}
                <span className="block h-1 w-0 bg-yellow-500 absolute bottom-0 left-0 group-hover:w-full transition-all duration-300"></span>
              </h3>
              <p className="text-gray-600 mt-4">{service.description}</p>
              <a
                href="#"
                className="text-[#d02013] mt-4 inline-block hover:underline"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
