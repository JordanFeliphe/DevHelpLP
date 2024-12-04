import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCogs, FaRobot, FaBaby, FaBuilding, FaCar, FaBrain, FaShoppingCart,FaGlobe } from "react-icons/fa";

const ProjectCard = ({ project }) => {
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
      className="bg-gradient-to-b from-[#0d0d0d] via-[#1a1a1a] to-black rounded-xl p-6 shadow-lg"
      variants={cardVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Ícone do projeto */}
      <div className="text-[#07bdbb] text-4xl mb-4 flex justify-center">
        {project.icon}
      </div>
      <h3 className="text-xl font-bold text-[#07bdbb] mb-2">{project.name}</h3>
      <p className="text-gray-400">{project.description}</p>
    </motion.div>
  );
};

const Section4 = () => {
  const projects = [
    {
      id: 1,
      name: "Smink LTDA",
      description:
        "A equipe desenvolveu uma API de OCR para extração de dados de documentos como CNH e RG, utilizando NestJS no backend e ReactJS no frontend. O sistema inclui painéis administrativos e de clientes, arquitetura segura com criptografia e autenticação, e um modelo de cobrança por uso, combinando eficiência, escalabilidade e precisão.",
      icon: <FaCogs />,
    },
    {
      id: 2,
      name: "TzsExpertAcademy",
      description:
        "Foi planejado e implementado um sistema de automação inteligente para atendimento ao cliente, utilizando OpenAI e Eleven Labs. A solução oferece interações ágeis e personalizadas, otimizando processos por meio de inteligência artificial de última geração.",
      icon: <FaRobot />,
    },
    {
      id: 3,
      name: "BebeBet",
      description:
        "Uma plataforma inovadora que transforma chás de bebê em experiências interativas. O backend foi desenvolvido com Python e o frontend com ReactJS e Tailwind CSS, garantindo uma arquitetura robusta, interface responsiva e foco na experiência do usuário.",
      icon: <FaBaby />,
    },
    {
      id: 4,
      name: "SindPortal",
      description:
        "Um sistema robusto e funcional desenvolvido com MongoDB e Droplet, implementando processamento assíncrono com Bull e Redis para garantir alto desempenho e escalabilidade. A equipe foi responsável por todo o design do sistema e implementação do backend e frontend.",
      icon: <FaBuilding />,
    },
    {
      id: 5,
      name: "WepTek",
      description:
        "Inspirado no Uber, o WepTek é um aplicativo de transporte desenvolvido com React Native e TypeScript, integrando Websockets para comunicação em tempo real e OneSignal para notificações personalizadas, proporcionando uma experiência fluida e confiável.",
      icon: <FaCar />,
    },
    {
      id: 6,
      name: "MindsClub",
      description:
        "Uma plataforma que conecta psicólogos e pacientes de forma eficiente, com backend em NestJS e frontend em React com Tailwind CSS. Oferece funcionalidades como agendamento de consultas, gerenciamento de perfis e integração de pagamento, atendendo às demandas do mercado de saúde mental.",
      icon: <FaBrain />,
    },
    {
      id: 7,
      name: "Nexly",
      description:
        "Plataforma inovadora para comercialização de assinaturas de produtos digitais. Desenvolvida com backend em NestJS e frontend utilizando React com Material UI e Tailwind CSS, oferece funcionalidades robustas para gestão de assinaturas, com foco em escalabilidade e segurança.",
      icon: <FaShoppingCart />,
    },
    {
        id: 8,
        name: "GlobalConnect",
        description:
          "Uma plataforma projetada para conectar empresas globais, promovendo parcerias e oportunidades de networking. O sistema facilita a comunicação entre diferentes setores e oferece ferramentas para integração eficiente de equipes, garantindo que negócios ao redor do mundo se conectem de maneira prática e escalável.",
        icon: <FaGlobe />,
      },
      {
        id: 9,
        name: "EcoRide",
        description:
          "Aplicativo inovador para compartilhamento de caronas ecológicas, incentivando a sustentabilidade e reduzindo o impacto ambiental. O sistema inclui funcionalidades como rotas otimizadas, integração com mapas em tempo real e notificações personalizadas, garantindo uma experiência eficiente e colaborativa para os usuários.",
        icon: <FaCar />,
      },
  ];

  return (
    <section id="section4" className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <h2
          className="text-4xl font-bold text-[#07bdbb] text-center mb-6"
          style={{ fontFamily: '"Pixelify Sans", sans-serif' }}
        >
          Projetos
        </h2>
        <p className="text-gray-300 text-center text-lg mb-12">
          Conheça os principais projetos desenvolvidos pela nossa equipe.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
