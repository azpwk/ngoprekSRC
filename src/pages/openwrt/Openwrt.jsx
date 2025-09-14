import React from "react";
import Navigasi from "../../component/Header";
import Footer from "../../component/Footer";
import { UjiCoba } from "../../data/UjiCoba";
import { NavRightOpenwrt } from "../../component/Navright";

const Openwrt = () => {
  return (
    <>
      <Navigasi />
      <div className="container">
        <article>
          <div className="left">
            {UjiCoba.map((data) => (
              <section key={data.id} className="uji-card">
                <h3 className="judul">{data.title}</h3>

                <div className="source-box">
                  <span className="source">
                    sumber:{" "}
                    <a
                      href={data.source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {data.source}
                    </a>
                  </span>{" "}
                  {/* {data.source_img && (
                  <img
                    src={data.source_img}
                    alt={"" || data.source}
                    className="source-img"
                  />
                )} */}
                </div>

                <p className="art">{data.article}</p>

                <ul className="steps">
                  {Object.keys(data)
                    .filter((k) => k.startsWith("p"))
                    .map((k, i) =>
                      data[k] ? <li key={i}>{data[k]}</li> : null
                    )}
                </ul>
              </section>
            ))}
          </div>
          <div className="right">
            <NavRightOpenwrt />
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default Openwrt;
