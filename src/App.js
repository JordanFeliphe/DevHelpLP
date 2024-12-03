import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import Section3 from "./components/sections/Section3";
import ScrollToTopButton from "./utils/ScrollToTopButton";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
      <Footer />
      <ScrollToTopButton />
     
    </div>
  );
}

export default App;
