import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Team1 from "../../assets/img/Team1.jpg";
import Team2 from "../../assets/img/Team2.jpg";
import Team3 from "../../assets/img/Team3.jpg";
import Team4 from "../../assets/img/Team4.jpg";
import Team5 from "../../assets/img/Team5.jpg";
import Team6 from "../../assets/img/Team6.jpg";

const TeamMember = ({ member }) => {
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
      className="bg-gradient-to-b from-[#0d0d0d] via-[#1a1a1a] to-black rounded-xl p-6 shadow-lg relative overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="relative">
        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#07bdbb] mx-auto"
        />
      </div>
      <div className="text-center mt-6">
        <h3 className="text-xl font-bold text-white">{member.name}</h3>
        <p className="text-[#07bdbb] font-medium">{member.role}</p>
        <p className="text-gray-400 mt-3">{member.description}</p>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Jordan Feliphe",
      role: "Software Developer",
      description:
        "Especialista em criar interfaces modernas e intuitivas, garantindo experiências incríveis para os usuários.",
      image: Team1,
    },
    {
      id: 2,
      name: "Ezequiel Magalhães",
      role: "Tech Lead",
      description:
        "Lidera equipes para desenvolver projetos inovadores e entregar soluções de alta qualidade.",
      image: Team4,
    },
    {
      id: 3,
      name: "Vinicius De Moraes",
      role: "Software Developer",
      description:
        "Focado na entrega de soluções eficientes e interfaces de alta qualidade para os usuários.",
      image: Team2,
    },
    {
      id: 4,
      name: "Antonio Edilberto",
      role: "Dev Senior",
      description:
        "Desenvolve soluções robustas e eficientes, garantindo excelência em cada projeto.",
      image: Team3,
    },
    {
      id: 5,
      name: "Pedro Lima",
      role: "Project Manager",
      description:
        "Lidera projetos, conectando equipes e stakeholders para garantir entregas no prazo e com qualidade.",
      image: Team5,
    },
    {
      id: 6,
      name: "Laura Carvalho",
      role: "HR Manager",
      description:
        "Focada na gestão de talentos, promove seleções eficientes e um ambiente motivador.",
      image: Team6,
    },
  ];

  return (
    <section id="time" className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <h2
          className="text-4xl font-bold text-[#07bdbb] text-center mb-6"
          style={{ fontFamily: '"Pixelify Sans", sans-serif' }}
        >
          Nosso Time
        </h2>
        <p className="text-gray-300 text-center text-lg mb-12">
          Profissionais comprometidos em criar soluções inovadoras e eficientes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
