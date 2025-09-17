import React, { useState } from "react";
import AHead from "../../component/Ahead";
import AFooter from "../../component/Afooter";
import "../../css/App.css";

//
import PortGame from "../../data/mikrotik/PortGame.js";
import { AboutMikrotik } from "../../data/mikrotik/about.js";
//
const MikrotikPages = () => {
  const [MenuSatu, setMenuSatu] = useState(true);
  const [MenuDua, setMenuDua] = useState(false);
  const [MenuTiga, setMenuTiga] = useState(false);
  const [MenuEmpat, setMenuEmpat] = useState(false);
  const [MenuLima, setMenuLima] = useState(false);
  function handlersatu() {
    setMenuSatu(true);
    setMenuDua(false);
    setMenuTiga(false);
    setMenuEmpat(false);
    setMenuLima(false);
  }
  function handlerdua() {
    setMenuSatu(false);
    setMenuDua(true);
    setMenuTiga(false);
    setMenuEmpat(false);
    setMenuLima(false);
  }
  function handlertiga() {
    setMenuSatu(false);
    setMenuDua(false);
    setMenuTiga(true);
    setMenuEmpat(false);
    setMenuLima(false);
  }
  function handlerempat() {
    setMenuSatu(false);
    setMenuDua(false);
    setMenuTiga(false);
    setMenuEmpat(true);
    setMenuLima(false);
  }
  function handlerlima() {
    setMenuSatu(false);
    setMenuDua(false);
    setMenuTiga(false);
    setMenuEmpat(false);
    setMenuLima(true);
  }
  return (
    <>
      <AHead />
      <div className="container">
        <main>
          <section>
            {/* sejenis link */}
            <div className="menu">
              <span
                className="link"
                onClick={() => {
                  handlersatu();
                }}
              >
                Penjelasan Singkat
              </span>
              <span
                className="link"
                onClick={() => {
                  handlerdua();
                }}
              >
                Relase
              </span>
              <span
                className="link"
                onClick={() => {
                  handlertiga();
                }}
              >
                tutorial
              </span>
              <span
                className="link"
                onClick={() => {
                  handlerempat();
                }}
              >
                script
              </span>
              <span
                className="link"
                onClick={() => {
                  handlerlima();
                }}
              >
                news
              </span>
            </div>
            {MenuSatu && <Article />}
            {MenuDua && <Relase />}
            {MenuTiga && <Tutorial />}
            {MenuEmpat && <Script />}
            {MenuLima && <News />}
          </section>
        </main>
        <AFooter />
      </div>
    </>
  );
};

const Article = () => {
  return (
    <article>
      {/* <img
        className="mikrotik-img"
        src="https://smksnurulharomain.sch.id/wp-content/uploads/2022/07/mikrotikKKKKK-blog.jpg"
        alt=""
      /> */}
      {AboutMikrotik.map((data) =>
        data.id ? (
          <div className="list" key={data.id}>
            <p className="title">{data.title}</p>
            <p>{data.content}</p>
          </div>
        ) : null
      )}
    </article>
  );
};
const Relase = () => {
  return (
    <article>
      <h3>Daftar Port Game</h3>
      {PortGame.map((data) =>
        data.id ? (
          <div className="list" key={data.id}>
            <p className="title">{data.name}</p>
            <p>TCP: {data.tcp}</p>
            <p>UDP: {data.udp}</p>
          </div>
        ) : null
      )}
    </article>
  );
};
const Tutorial = () => {
  return (
    <article>
      <h3>tutorial</h3>
      <p>bla bla bla</p>
      <p>bla bla bla</p>
      <p>bla bla bla</p>
      <p>bla bla bla</p>
    </article>
  );
};
const Script = () => {
  return (
    <article>
      <h3>script</h3>
      <p>bla bla bla</p>
      <p>bla bla bla</p>
      <p>bla bla bla</p>
      <p>bla bla bla</p>
    </article>
  );
};
const News = () => {
  return (
    <article>
      <h3>News</h3>
      <p>bla bla bla</p>
      <p>bla bla bla</p>
      <p>bla bla bla</p>
      <p>bla bla bla</p>
    </article>
  );
};

export default MikrotikPages;
