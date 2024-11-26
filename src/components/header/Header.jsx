import React, { useState, useEffect } from 'react';
import WaveDown from '../../assets/svg/waveDown.svg';
import HeaderImage from '../../assets/img/header.jpg';
import { ReactTyped as Typed } from 'react-typed';

export default function Header() {
    const [navbarOpacity, setNavbarOpacity] = useState(0); // Inicializa opacidade da navbar

    useEffect(() => {
        const handleScroll = () => {
            const maxScroll = window.innerHeight; // Altura máxima do header
            const currentScroll = window.scrollY; // Posição atual do scroll
            const opacity = Math.min(currentScroll / maxScroll, 1); // Calcula opacidade (0 a 1)
            setNavbarOpacity(opacity);
        };

        window.addEventListener('scroll', handleScroll); // Adiciona listener de scroll
        return () => {
            window.removeEventListener('scroll', handleScroll); // Remove listener ao desmontar
        };
    }, []);

    return (
        <>
            {/* Navbar */}
            <nav
                className="fixed top-0 left-0 w-full z-30 transition duration-300"
                style={{
                    backgroundColor: `rgba(255, 255, 255, ${navbarOpacity})`, // Opacidade dinâmica
                    boxShadow: navbarOpacity > 0 ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none', // Sombra leve
                }}
            >
            </nav>

            {/* Header */}
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
                    <div className="absolute inset-0 bg-black opacity-80 sm:opacity-50 z-10"></div>

                    {/* Conteúdo alinhado */}
                    <div className="relative z-20 flex flex-col justify-center h-full px-4 sm:pr-8 lg:pr-16">
                        <div className="pt-60 sm:pt-40 lg:pt-72 text-center lg:text-right flex flex-col items-center sm:items-center lg:items-end">
                            <h1
                                className="text-4xl sm:text-6xl lg:text-8xl font-bold text-[#b7153b]"
                                style={{ fontFamily: '"Pixelify Sans", sans-serif' }}
                            >
                                Welcome to
                            </h1>

                            <h2 className="text-3xl sm:text-6xl lg:text-5xl font-bold text-[#04adef]"
                            style={{ fontFamily: '"Pixelify Sans", sans-serif' }}>
                                DevHelp
                            </h2>
                            <p className="mt-4 text-sm sm:text-lg text-white">
                                <Typed
                                style={{ fontFamily: '"Pixelify Sans", sans-serif' }}
                                    strings={[
                                        ' Descubra tudo o que temos para oferecer com um design incrível!',
                                    ]}
                                    typeSpeed={50} // Velocidade de digitação mais lenta
                                    backSpeed={130} // Velocidade de apagamento (se usar loop)
                                    showCursor={false} // Ocultar cursor piscando
                                    loop={false} // Apenas escreve uma vez
                                />
                            </p>
                        </div>
                    </div>
                </div>

                {/* Onda inferior */}
                <div className="absolute bottom-0 left-0 w-full z-10">
                    <img src={WaveDown} alt="Wave Down" className="w-full" />
                </div>
            </header>
        </>
    );
}
