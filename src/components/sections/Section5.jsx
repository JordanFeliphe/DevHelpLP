import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaAws, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const TechnologyCard = ({ technology }) => {
  return (
    <motion.div
      className="bg-gradient-to-b from-[#1e1e1e] to-black border border-transparent rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 relative group overflow-hidden flex flex-col items-center justify-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#07bdbb] to-transparent opacity-0 group-hover:opacity-25 transition-opacity duration-500 rounded-xl"></div>
      <motion.div
        className="mb-4 relative z-10 flex items-center justify-center"
        animate={{
          y: [0, -5, 0], 
        }}
        transition={{
          repeat: Infinity,
          duration: 3, 
          ease: "easeInOut",
        }}
      >
        <div className="text-6xl">{technology.icon}</div>
      </motion.div>
      <h3 className="text-xl font-bold text-[#07bdbb] text-center relative z-10">
        {technology.name}
      </h3>
      <p className="text-gray-400 text-center mt-2 relative z-10">
        {technology.description}
      </p>
    </motion.div>
  );
};

const Section5 = () => {
  const technologies = [
    {
      id: 1,
      name: "React",
      description: "Biblioteca para criar interfaces modernas e dinâmicas.",
      icon: <FaReact className="text-blue-500" />,
    },
    {
      id: 2,
      name: "Node.js",
      description: "Plataforma para construir aplicações escaláveis no backend.",
      icon: <FaNodeJs className="text-green-500" />,
    },
    {
      id: 3,
      name: "Tailwind CSS",
      description: "Framework para estilização rápida e responsiva.",
      icon: <SiTailwindcss className="text-blue-400" />,
    },
    {
      id: 4,
      name: "AWS",
      description: "Plataforma de serviços em nuvem para escalabilidade e confiabilidade.",
      icon: <FaAws className="text-orange-500" />,
    },
    {
      id: 5,
      name: "Python",
      description: "Linguagem poderosa para desenvolvimento web e automação.",
      icon: <FaPython className="text-blue-600" />,
    },
    {
      id: 6,
      name: "TypeScript",
      description: "Extensão do JavaScript com tipagem estática para maior robustez.",
      icon: <SiTypescript className="text-blue-600" />,
    },
  ];
  return (
    <section id="section5" className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <h2
          className="text-4xl font-bold text-[#07bdbb] text-center mb-6"
          style={{ fontFamily: '"Pixelify Sans", sans-serif' }}
        >
          Tecnologias que Utilizamos
        </h2>
        <p className="text-gray-300 text-center text-lg mb-12">
          Domínio nas melhores tecnologias para entregar soluções de alta qualidade.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {technologies.map((technology) => (
            <TechnologyCard key={technology.id} technology={technology} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section5;
