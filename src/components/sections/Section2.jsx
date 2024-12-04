import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({ service }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <motion.div
      ref={ref}
      className="relative group bg-black border border-[#07bdbb] rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-[#07bdbb]/50 hover:border-white hover:scale-105"
      variants={cardVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="w-14 h-14 flex items-center justify-center bg-[#07bdbb] rounded-full shadow-md mb-6 transition-transform group-hover:scale-110 group-hover:bg-white">
        <i className={`${service.icon} text-black text-2xl`}></i>
      </div>
      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#07bdbb] transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white">
        {service.description}
      </p>
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#07bdbb] transition-all duration-300"></div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Frontend Responsivo",
      description:
        "Desenvolvemos interfaces dinâmicas e responsivas com React e tecnologias modernas.",
      icon: "fas fa-laptop-code",
    },
    {
      id: 2,
      title: "Integração de APIs",
      description:
        "Integramos aplicações usando REST e GraphQL para eficiência e conectividade.",
      icon: "fas fa-network-wired",
    },
    {
      id: 3,
      title: "Design Moderno",
      description:
        "Criamos experiências adaptáveis que priorizam a usabilidade e o design.",
      icon: "fas fa-mobile-alt",
    },
    {
      id: 4,
      title: "Banco de Dados Seguro",
      description:
        "Gerenciamos dados com SQL e MongoDB, garantindo segurança e escalabilidade.",
      icon: "fas fa-database",
    },
    {
      id: 5,
      title: "Testes Automatizados",
      description:
        "Asseguramos a qualidade do código com Jest e Cypress para testes robustos.",
      icon: "fas fa-vial",
    },
    {
      id: 6,
      title: "Alta Performance",
      description:
        "Aprimoramos aplicações, reduzindo tempos de carregamento e uso de recursos.",
      icon: "fas fa-rocket",
    },
  ];

  return (
    <section id="tecnologias" className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold text-[#07bdbb] tracking-wide"
            style={{ fontFamily: '"Pixelify Sans", sans-serif' }}
          >
            Tecnologias e Habilidades
          </h2>
          <p className="text-white mt-4 text-lg">
            Soluções que combinam tecnologia de ponta com design inovador.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
