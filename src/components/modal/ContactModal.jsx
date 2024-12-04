import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm px-4">
            <div className="bg-gradient-to-b from-[#1e1e1e] via-black to-[#0d0d0d] rounded-2xl shadow-xl w-full max-w-md p-6 sm:p-8 relative border border-[#07bdbb]">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-300 hover:text-[#07bdbb] transition duration-300 text-lg"
                >
                    ✖
                </button>
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#07bdbb] mb-4">
                    Entre em Contato Conosco!
                </h2>
                <p className="text-justify text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                    Estamos sempre disponíveis para atender suas dúvidas e necessidades. Clique no botão abaixo para conversar diretamente conosco pelo WhatsApp. Estamos prontos para ajudar você!
                </p>
                <div className="flex justify-center items-center">
                    <a
                        href="https://wa.me/559831960694"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center justify-center bg-black rounded-xl border-2 border-[#25D366] group hover:scale-105 transition-transform duration-300 shadow-lg w-64 h-14"
                    >
                        <FaWhatsapp className="text-[#25D366] text-2xl mr-2 group-hover:drop-shadow-[0_0_10px_#25D366]" />
                        <span className="text-[#25D366] font-semibold group-hover:drop-shadow-[0_0_10px_#25D366]">
                            WhatsApp
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#25D366]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
