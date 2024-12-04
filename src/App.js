import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Página principal
import ProjectsMid from "./pages/ProjectsMid"; // Página principal

function App() {
  return (
    <Router>
      <>
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/projects" element={<ProjectsMid />} /> 
          </Routes>
        </main>
      </>
    </Router>
  );
}

export default App;
