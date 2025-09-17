import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../css/ahead.css";

const AHead = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // handle resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  // cek lokasi route
  const location = useLocation();
  const [Rumah, setRumah] = useState(true);
  const [Linux, setLinux] = useState(false);
  const [Mikrotik, setMikrotik] = useState(false);

  useEffect(() => {
    if (location.pathname === "/linux") {
      setRumah(false);
      setMikrotik(false);
      setLinux(true);
    } else if (location.pathname === "/mikrotik") {
      setRumah(false);
      setMikrotik(true);
      setLinux(false);
    } else {
      setRumah(true);
      setMikrotik(false);
      setLinux(false);
    }
  }, [location.pathname]);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <svg
            className="svg-logo"
            width="56"
            height="56"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <rect
              x="4"
              y="4"
              width="56"
              height="56"
              rx="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M16 40c6-10 18-10 24 0"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="32" cy="22" r="6" fill="currentColor" />
          </svg>
        </div>

        <nav
          className={`nav ${menuOpen ? "open" : ""}`}
          aria-label="Main navigation"
        >
          <NavLink to="/" className="nav-link" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/linux" className="nav-link" onClick={closeMenu}>
            Linux
          </NavLink>
          <NavLink to="/mikrotik" className="nav-link" onClick={closeMenu}>
            Mikrotik
          </NavLink>
          <NavLink to="/openwrt" className="nav-link" onClick={closeMenu}>
            Openwrt
          </NavLink>
          {/* <a
            href="#about"
            style={{
              textDecoration: "none",
              color: "aliceblue",
              fontWeight: "bold",
            }}
          >
            about
          </a> */}
        </nav>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen((s) => !s)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div>
        {Rumah && <IfHome />}
        {Linux && <IfLinux />}
        {Mikrotik && <IfMikrotik />}
      </div>
    </header>
  );
};
export default AHead;
//
const IfHome = () => {
  return (
    <>
      <div className="c-header">
        <div className="c-flex-head">
          <div className="left">
            <h2>NgoprekNetwork — Mikrotik · OpenWRT · Linux</h2>
          </div>
          <div className="right">
            <img className="a-img" src="hm.png" alt="mikrotik" />
          </div>
        </div>
      </div>
    </>
  );
};
const IfLinux = () => {
  return (
    <>
      <div className="c-header">
        <div className="c-flex-head">
          <div className="left">
            {/* <h2>Linux</h2> */}
            <h2>Linux —</h2>
            <h2>Open · Stable · Flexible</h2>
          </div>
          <div className="right">
            <img className="a-img" src="ln.png" alt="mikrotik" />
          </div>
        </div>
      </div>
    </>
  );
};
const IfMikrotik = () => {
  return (
    <>
      <div className="c-header">
        <div className="c-flex-head">
          <div className="left">
            <h2>Routing</h2>
            <h2>Firewall</h2>
            <h2>bandwidth management</h2>
          </div>
          <div className="right">
            <img className="a-img" src="mk.png" alt="mikrotik" />
          </div>
        </div>
      </div>
    </>
  );
};
