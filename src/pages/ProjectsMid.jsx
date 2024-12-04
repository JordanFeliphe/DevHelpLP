import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header2";
import Section4 from "../components/sections/Section4";
import Section5 from "../components/sections/Section5";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "../utils/ScrollToTopButton";

function ProjectsMid() {
    return (
        <div>
            <Navbar />
            <Header />
            <Section4 />
            <Section5 />
            <Footer />
            <ScrollToTopButton />
        </div>
    );
}

export default ProjectsMid;
