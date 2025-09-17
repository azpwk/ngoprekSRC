import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePages from "./pages/home/HomePages";
import LinuxPages from "./pages/linux/LinuxPages";
import MikrotikPages from "./pages/mikrotik/MikrotikPages";
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/linux" element={<LinuxPages />} />
          <Route path="/mikrotik" element={<MikrotikPages />} />

          <Route
            path="*"
            element={<div className="gakada">404 not found</div>}
          />
        </Routes>
      </Router>
    </>
  );
}
