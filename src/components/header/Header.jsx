import React, { useState, useEffect } from 'react';
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
            <header id="inicio" className="relative bg-white text-black">
                {/* Seção da imagem de fundo */}
                <div
                    className="relative bg-cover bg-[center_right_78%] md:bg-center lg:bg-[center_top_20%] z-0"
                    style={{
                        backgroundImage: `url(${HeaderImage})`,
                        minHeight: '100vh', // Faz o header ocupar toda a altura da tela
                    }}
                >
                    {/* Overlay na parte direita */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/100"></div>

                    {/* Conteúdo alinhado */}
                    <div className="relative z-20 flex flex-col justify-center h-full px-4 sm:pr-8 lg:pr-16">
                        <div className="pt-60 sm:pt-40 lg:pt-72 text-center lg:text-right flex flex-col items-center sm:items-center lg:items-end">
                            <h1
                                className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white"
                                style={{ fontFamily: '"Pixelify Sans", sans-serif' }}
                            >
                                Welcome to
                            </h1>

                            <h2
                                className="text-3xl sm:text-6xl lg:text-5xl font-bold text-[#07bdbb]"
                                style={{ fontFamily: '"Pixelify Sans", sans-serif' }}
                            >
                                Midnight Tec
                            </h2>
                            <p className="mt-4 text-sm sm:text-lg text-white">
                                <Typed
                                    style={{ fontFamily: '"Poppins", sans-serif' }}
                                    strings={[
                                        'Descubra soluções digitais que encantam e impulsionam resultados!',
                                    ]}
                                    typeSpeed={70} // Velocidade de digitação mais lenta
                                    backSpeed={130} // Velocidade de apagamento (se usar loop)
                                    showCursor={false} // Ocultar cursor piscando
                                    loop={false} // Apenas escreve uma vez
                                />

                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
