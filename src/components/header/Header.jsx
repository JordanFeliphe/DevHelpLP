import React from 'react';
import WaveDown from '../../assets/svg/waveDown.svg';
import HeaderImage from '../../assets/img/header.jpg';

export default function Header() {
    return (
        <header className="relative bg-white text-black">
            {/* Seção da imagem de fundo */}
            <div
                className="relative bg-cover bg-[center_right_78%] md:bg-center lg:bg-[center_top_30%] z-0"
                style={{
                    backgroundImage: `url(${HeaderImage})`,
                    minHeight: '100vh', // Faz o header ocupar toda a altura da tela
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

                {/* Conteúdo alinhado */}
                <div className="relative z-20 flex flex-col justify-center h-full pr-6 sm:pr-8 lg:pr-16">
                    <div className="pt-40 lg:pt-72 text-center lg:text-right flex flex-col items-center lg:items-end">
                        <h1
                            className="text-6xl lg:text-8xl font-bold text-[#b7153b]"
                            style={{ fontFamily: "'Orbitron', sans-serif" }}
                        >
                            Welcome to
                        </h1>
                        <h2
                            className="text-6xl lg:text-5xl font-bold text-[#04adef]"
                            style={{ fontFamily: "'Orbitron', sans-serif" }}
                        >
                            DevHelp
                        </h2>
                        <p
                            className="mt-4 text-lg text-white"
                            style={{ fontFamily: "'Orbitron', sans-serif" }}
                        >
                            Descubra tudo o que temos para oferecer com um design incrível
                        </p>
                    </div>
                </div>

            </div>

            {/* Onda inferior */}
            <div className="absolute bottom-0 left-0 w-full z-10">
                <img src={WaveDown} alt="Wave Down" className="w-full" />
            </div>
        </header>
    );
}
