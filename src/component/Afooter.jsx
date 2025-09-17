import React from "react";
import "../css/afooter.css";
const AFooter = () => {
  return (
    <>
      <footer className="az-footer">
        <div>
          <small>
            Azpwk © {new Date().getFullYear()} NgoprekNetwork — Mikrotik ·
            OpenWRT · Linux
          </small>
        </div>
      </footer>
    </>
  );
};

export default AFooter;
