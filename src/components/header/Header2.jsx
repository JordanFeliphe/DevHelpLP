import React, { useState, useEffect } from 'react';
import HeaderImage from '../../assets/img/header2.jpg';
import { ReactTyped as Typed } from 'react-typed';

export default function Header2() {
    const [navbarOpacity, setNavbarOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const maxScroll = window.innerHeight;
            const currentScroll = window.scrollY;
            const opacity = Math.min(currentScroll / maxScroll, 1);
            setNavbarOpacity(opacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav
                className="fixed top-0 left-0 w-full z-30 transition duration-300"
                style={{
                    backgroundColor: `rgba(255, 255, 255, ${navbarOpacity})`,
                    boxShadow: navbarOpacity > 0 ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
                }}
            >
            </nav>
            <header id="inicio" className="relative bg-white text-black">
                <div
                    className="relative bg-cover bg-[center_right_78%] md:bg-center lg:bg-[center_top_20%] z-0"
                    style={{
                        backgroundImage: `url(${HeaderImage})`,
                        minHeight: '100vh',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/100"></div>
                    <div className="relative z-20 flex flex-col justify-center h-full px-4 sm:pr-8 lg:pr-16">
                        <div className="pt-60 sm:pt-40 lg:pt-72 text-center lg:text-right flex flex-col items-center sm:items-center lg:items-end">
                            <h1
                                className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white"
                                style={{ fontFamily: '"Pixelify Sans", sans-serif' }}
                            >
                                Projetos
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
                                    strings={['Conheça nossos projetos e veja inovação em ação!']}
                                    typeSpeed={70}
                                    backSpeed={130}
                                    showCursor={false}
                                    loop={false}
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
