import React from "react";
import Team1 from "../../assets/img/Team1.jpg";
import Team2 from "../../assets/img/Team2.jpg";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Jordan Feliphe",
      role: "Fronted developer",
      description:
        "Se destaca na criação de interfaces modernas, intuitivas e focadas na melhor experiência para o usuário.",
      image: Team1,
      socials: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 2,
      name: "Vinicius De Moraes",
      role: "Fronted developer",
      description:
        "Entrega soluções inovadoras com foco na qualidade e na melhor experiência para o usuário.",
      image: Team2,
      socials: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <section className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <h2
          className="text-3xl font-semibold text-[#d02013]"
          style={{ fontFamily: '"Pixelify Sans", sans-serif' }}
        >
          Time
        </h2>
        <p className="text-white mt-4">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-black shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8"
            >
              <div className="flex-shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover"
                  style={{
                    overflow: "hidden",
                  }}
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-gray-200">
                  {member.name}
                </h3>
                <p className="text-[#04adef] font-medium">{member.role}</p>
                <p className="text-gray-400 mt-2">{member.description}</p>
                <div className="flex justify-center md:justify-start space-x-4 mt-4">
                  <a
                    href={member.socials.twitter}
                    className="text-gray-400 hover:text-[#04adef]"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href={member.socials.facebook}
                    className="text-gray-400 hover:text-[#04adef]"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    href={member.socials.instagram}
                    className="text-gray-400 hover:text-[#04adef]"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href={member.socials.linkedin}
                    className="text-gray-400 hover:text-[#04adef]"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
