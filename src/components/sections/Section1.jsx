import React from "react";
import Section01 from "../../assets/img/section1.jpg";
import { motion } from "framer-motion";

export default function Section1() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <motion.section
      id="sobre"
      className="bg-black py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        <motion.div variants={fadeInLeft} className="space-y-8">
          <h2
            className="text-3xl font-bold text-[#07bdbb] mb-4"
            style={{ fontFamily: '"Pixelify Sans", sans-serif' }}
          >
            Sobre nós
          </h2>
          <p className="text-white mb-8 leading-relaxed">
            Somos uma equipe apaixonada por desenvolvimento front-end,
            comprometida em transformar ideias em experiências digitais únicas.
            Com foco em interfaces modernas, intuitivas e responsivas, buscamos
            aliar design inovador e tecnologia de ponta para entregar soluções
            eficientes e cativantes.
          </p>
          {[
            {
              icon: "fas fa-users",
              title: "Parcerias que impulsionam resultado",
              text: "Atuamos lado a lado com nossos clientes, transformando ideias em projetos que impactam e conectam pessoas.",
            },
            {
              icon: "fas fa-clipboard",
              title: "Planejamento estratégico e execução impecável",
              text: "Unimos organização e criatividade para desenvolver soluções digitais inovadoras e de alto desempenho.",
            },
            {
              icon: "fas fa-broadcast-tower",
              title: "Inovação que conecta",
              text: "Criamos experiências digitais que engajam, aproximam e deixam uma marca duradoura no universo digital.",
            },
            {
              icon: "fas fa-cogs",
              title: "Soluções personalizadas",
              text: "Desenvolvemos soluções sob medida que atendem às necessidades exclusivas de cada cliente, garantindo eficiência e resultados impactantes.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <div className="text-[#07bdbb] text-3xl">
                <i className={item.icon}></i>
              </div>
              <div>
                <h3
                  className="text-lg font-bold text-[#07bdbb] mb-2"
                  style={{ fontFamily: '"Pixelify Sans", sans-serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-white leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="relative" variants={fadeInRight}>
          <motion.img
            src={Section01}
            alt="Equipe trabalhando"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
