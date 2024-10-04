import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/AboutPage";
import Home from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
