import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import Art from "./components/Art";
import Translation from "./unused/Translation";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Taiko from "./components/Taiko";
import Resume from "./components/Resume"
import Secret from "./components/Secret/Secret"
import Modelling from "./components/Secret/Modelling"

export default function App() {
  return (
    <HashRouter>
      <NavBar />
      <Resume />
      <Secret />
      <div className="ml-32 lg:ml-0 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art" element={<Art />} />
          <Route path="/taiko" element={<Taiko />} />
          <Route path="/translation" element={<Translation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/modelling" element={<Modelling />} />
        </Routes>
      </div>
    </HashRouter>
  );
}