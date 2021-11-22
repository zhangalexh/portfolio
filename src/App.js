import React from "react";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";

export default function App() {
  return (
    <main className="flex min-h-screen">
      <NavBar />
      <MainContent />
    </main>
  );
}
