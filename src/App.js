import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Art from "./components/Art";
import Translation from "./unused/Translation";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Taiko from "./components/Taiko";

export default function App() {
  return (
    <Router>
      <NavBar />
      <div className="ml-32 lg:ml-0 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art" element={<Art />} />
          <Route path="/taiko" element={<Taiko />} />
          <Route path="/translation" element={<Translation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}