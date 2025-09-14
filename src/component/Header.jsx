import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.css";
const Navigasi = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo judul">Ngoprek</div>

        <nav
          className={`nav ${menuOpen ? "open" : ""}`}
          aria-label="Main navigation"
        >
          {/* masih pakai anchor untuk scroll section */}
          {/* <a href="#about" className="nav-link" onClick={closeMenu}>
            Tentang Kami
          </a> */}

          {/* pakai NavLink supaya ada class active */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/linux"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Linux
          </NavLink>
          <NavLink
            to="/mikrotik"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Mikrotik
          </NavLink>
          <NavLink
            to="/openwrt"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Openwrt
          </NavLink>
          {/* pakai NavLink supaya ada class active */}
          <a
            href="#about"
            style={{
              textDecoration: "none",
              color: "aliceblue",
              fontWeight: "bold",
            }}
          >
            about
          </a>
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
    </header>
  );
};

export default Navigasi;
