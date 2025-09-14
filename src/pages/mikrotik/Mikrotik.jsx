import React from "react";
import Navigasi from "../../component/Header";
import Footer from "../../component/Footer";
import { NavRightMikrotik } from "../../component/Navright";
import { DataGamePortMikrotik } from "../../data/datagameportmikrotik";

const Mikrotik = () => {
  const u = "https://";
  return (
    <>
      <Navigasi />
      <div className="container">
        <article>
          <div className="left">
            {DataGamePortMikrotik.map((data) => (
              <section key={data.id} className="uji-card">
                <h3 className="judul">{data.title}</h3>

                <div className="source-box">
                  <span className="source">
                    sumber:{" "}
                    <a
                      href={u + data.source}
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

                {/* <ul className="steps">
                  {Object.keys(data)
                    .filter((k) => k.startsWith("p"))
                    .map((k, i) =>
                      data[k] ? <li key={i}>{data[k]}</li> : null
                    )}
                </ul> */}
                <ul className="steps">
                  {Object.keys(data)
                    .filter((k) => k.startsWith("tcp"))
                    .map((k, i) =>
                      data[k] ? (
                        <li key={i}>tcp: {data[k].join(", ")}</li>
                      ) : null
                    )}
                </ul>
                <ul className="steps">
                  {Object.keys(data)
                    .filter((k) => k.startsWith("udp"))
                    .map((k, i) =>
                      data[k] ? (
                        <li key={i}>udp: {data[k].join(", ")}</li>
                      ) : null
                    )}
                </ul>
              </section>
            ))}
            {/*  */}
            {/* <textarea name="" id="">
              # Hapus address-list lama agar tidak dobel /ip firewall
              address-list remove [find list=game-ports] #
              ======================= # Mobile Legends # =======================
              /ip firewall address-list add list=game-ports address=0.0.0.0/0
              comment="Mobile Legends TCP 30101" /ip firewall mangle add
              chain=prerouting protocol=tcp port=30101 action=mark-connection
              new-connection-mark=ml_tcp_conn passthrough=yes comment="ML TCP"
              /ip firewall mangle add chain=prerouting protocol=udp
              port=5000-5221,5500-5700 action=mark-connection
              new-connection-mark=ml_udp_conn passthrough=yes comment="ML UDP" #
              ======================= # PUBG Mobile # =======================
              /ip firewall mangle add chain=prerouting protocol=tcp
              port=8085,10012,17500 action=mark-connection
              new-connection-mark=pubg_tcp_conn passthrough=yes comment="PUBG
              TCP" /ip firewall mangle add chain=prerouting protocol=udp
              port=7086,10039,10096 action=mark-connection
              new-connection-mark=pubg_udp_conn passthrough=yes comment="PUBG
              UDP" # ======================= # Free Fire #
              ======================= /ip firewall mangle add chain=prerouting
              protocol=tcp port=7008 action=mark-connection
              new-connection-mark=ff_tcp_conn passthrough=yes comment="Free Fire
              TCP" /ip firewall mangle add chain=prerouting protocol=udp
              port=10000-10008 action=mark-connection
              new-connection-mark=ff_udp_conn passthrough=yes comment="Free Fire
              UDP" # ======================= # Call of Duty Mobile #
              ======================= /ip firewall mangle add chain=prerouting
              protocol=tcp port=8013 action=mark-connection
              new-connection-mark=codm_tcp_conn passthrough=yes comment="CODM
              TCP" /ip firewall mangle add chain=prerouting protocol=udp
              port=7500-7999,8700-8999 action=mark-connection
              new-connection-mark=codm_udp_conn passthrough=yes comment="CODM
              UDP" # ======================= # Genshin Impact #
              ======================= /ip firewall mangle add chain=prerouting
              protocol=tcp port=22102-22105,42472 action=mark-connection
              new-connection-mark=genshin_tcp_conn passthrough=yes
              comment="Genshin TCP" /ip firewall mangle add chain=prerouting
              protocol=udp port=22102-22105,42472 action=mark-connection
              new-connection-mark=genshin_udp_conn passthrough=yes
              comment="Genshin UDP" # ======================= # Valorant #
              ======================= /ip firewall mangle add chain=prerouting
              protocol=tcp port=2099,5222,5223,8088,8393-8400
              action=mark-connection new-connection-mark=valo_tcp_conn
              passthrough=yes comment="Valorant TCP" /ip firewall mangle add
              chain=prerouting protocol=udp port=7000-7500,8088,8180,27000-27050
              action=mark-connection new-connection-mark=valo_udp_conn
              passthrough=yes comment="Valorant UDP" # ======================= #
              Dota 2 # ======================= /ip firewall mangle add
              chain=prerouting protocol=tcp port=27015-27030,27036-27037
              action=mark-connection new-connection-mark=dota_tcp_conn
              passthrough=yes comment="Dota2 TCP" /ip firewall mangle add
              chain=prerouting protocol=udp port=27000-27031,27036
              action=mark-connection new-connection-mark=dota_udp_conn
              passthrough=yes comment="Dota2 UDP" # ======================= #
              CS:GO # ======================= /ip firewall mangle add
              chain=prerouting protocol=tcp port=27015-27030,27036-27037
              action=mark-connection new-connection-mark=csgo_tcp_conn
              passthrough=yes comment="CSGO TCP" /ip firewall mangle add
              chain=prerouting protocol=udp port=4380,27000-27031,27036
              action=mark-connection new-connection-mark=csgo_udp_conn
              passthrough=yes comment="CSGO UDP"
            </textarea> */}
          </div>
          <div className="right">
            <NavRightMikrotik />
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default Mikrotik;
