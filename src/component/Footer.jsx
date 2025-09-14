import React from "react";
import "../css/Footer.css";
import Gsvg from "../assets/github.svg";
import Rsvg from "../assets/react.svg";
import Vsvg from "../assets/vite.svg";
const Footer = () => {
  return (
    <>
      <div className="container">
        <div
          className="about"
          id="about"
          style={{
            backgroundColor: "rgba(240, 248, 255, 0.068)",
            borderRadius: "10px",
            padding: "10px",
            marginTop: "100px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3 style={{ borderBottom: "3px solid aliceblue" }}>About</h3>
          <p>
            Website ini dibuat sebagai catatan pribadi sekaligus media
            pembelajaran. Semua konten ditulis untuk berbagi pengetahuan dan
            eksperimen seputar teknologi.
          </p>
          {/*  */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1px",
                flexDirection: "column",
                marginTop: "20px",
              }}
            >
              <span
                style={{
                  fontSize: "15px",
                  // borderTop: "1px solid aliceblue",
                }}
              >
                @azpwkk
              </span>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <img
                  src={Gsvg}
                  alt="mygithub"
                  style={{
                    maxWidth: "30px",
                    marginTop: "10px",
                  }}
                />
                <img
                  src={Rsvg}
                  alt="mygithub"
                  style={{
                    maxWidth: "30px",
                    marginTop: "10px",
                  }}
                />
                <img
                  src={Vsvg}
                  alt="mygithub"
                  style={{
                    maxWidth: "30px",
                    marginTop: "10px",
                  }}
                />
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>

      <footer className="footer">
        <div className="container footer-content">
          <p>&copy; 2025 warga purwakarta.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
