import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Section1 from "../components/sections/Section1";
import Section2 from "../components/sections/Section2";
import Section3 from "../components/sections/Section3";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "../utils/ScrollToTopButton";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default Home;
