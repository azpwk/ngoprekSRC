// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"; // contoh halaman tambahan
import Openwrt from "./pages/openwrt/Openwrt";
import About from "./pages/about/About";
import Linux from "./pages/linux/Linux";
import Mikrotik from "./pages/mikrotik/Mikrotik";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={<Home />} />
        <Route path="/linux" element={<Linux />} />
        <Route path="/mikrotik" element={<Mikrotik />} />
        <Route path="/openwrt" element={<Openwrt />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div className="gakada">404 not found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
