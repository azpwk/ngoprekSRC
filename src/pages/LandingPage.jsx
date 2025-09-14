import React, { useState, useEffect } from "react";
// import "../css/full.css";
import Footer from "../component/Footer";
import Header from "../component/Header";

const HeroSection = () => (
  <section className="hero-section" id="home">
    <div className="hero-bg" />
    <div className="hero-content fade-in">
      <h1 className="hero-title">
        Selamat Datang di Dunia Jaringan <br />
        <span className="hero-subtitle-gradient">Sumber Terbuka</span>
      </h1>
      <p className="hero-description">
        Jelajahi kebebasan dan kekuatan Mikrotik, OpenWrt, dan Linux dalam
        mengelola jaringan Anda.
      </p>
      <a href="#about" className="cta-button">
        Mulai Jelajahi
      </a>
    </div>
  </section>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="content-section fade-in">
    <div className="container">
      <h2 className="section-title">{title}</h2>
      <div className="card-grid">{children}</div>
    </div>
  </section>
);

const Card = ({ title, description, image }) => (
  <div className="card-wrapper">
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  </div>
);

export default function LandingPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Terima kasih! Pesan Anda sudah terkirim.");
  };

  return (
    <div className="app-container">
      {/* font awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />

      <Header />
      <HeroSection />

      <Section id="about" title="Tentang Kami">
        <p
          className="about-text"
          style={{ textAlign: "center", maxWidth: 900, margin: "0 auto" }}
        >
          Kami adalah komunitas yang berdedikasi untuk mempromosikan dan
          mendukung penggunaan teknologi jaringan sumber terbuka. Kebebasan
          konfigurasi, keamanan, dan inovasi adalah kunci untuk membangun
          jaringan yang lebih kuat dan andal.
        </p>
      </Section>

      <Section id="mikrotik" title="Mikrotik">
        <Card
          title="Mikrotik RouterOS"
          description="Sistem operasi yang kuat dan fleksibel untuk router. Dikenal dengan fitur routing yang canggih."
          image="https://placehold.co/100x100/cyan/white?text=Mikrotik"
        />
        <Card
          title="RouterBoard"
          description="Platform perangkat keras yang dirancang khusus untuk menjalankan RouterOS. Pilihan populer untuk profesional jaringan."
          image="https://placehold.co/100x100/cyan/white?text=RouterBoard"
        />
        <Card
          title="Fitur Mikrotik"
          description="Dari firewall, VPN, QoS, hingga Load Balancing, Mikrotik menyediakan berbagai fitur untuk setiap kebutuhan jaringan."
          image="https://placehold.co/100x100/cyan/white?text=Features"
        />
      </Section>

      <Section id="openwrt" title="OpenWrt">
        <Card
          title="OpenWrt OS"
          description="Distribusi Linux yang ringan dan dapat disesuaikan untuk router. Memberikan kontrol penuh atas fungsionalitas router Anda."
          image="https://placehold.co/100x100/purple/white?text=OpenWrt"
        />
        <Card
          title="Kustomisasi Tanpa Batas"
          description="Dengan OpenWrt, Anda bisa menginstal paket perangkat lunak, membuat script kustom, dan mengoptimalkan kinerja sesuai keinginan."
          image="https://placehold.co/100x100/purple/white?text=Custom"
        />
        <Card
          title="Dukungan Komunitas"
          description="Didukung oleh komunitas pengembang yang aktif, OpenWrt terus berkembang dengan fitur-fitur baru dan perbaikan keamanan."
          image="https://placehold.co/100x100/purple/white?text=Community"
        />
      </Section>

      <Section id="linux" title="Linux">
        <Card
          title="Kekuatan Kernel Linux"
          description="Inti dari OpenWrt dan banyak sistem operasi jaringan lainnya. Memberikan fondasi yang stabil dan aman."
          image="https://placehold.co/100x100/gray/white?text=Linux"
        />
        <Card
          title="Berbagai Distribusi"
          description="Dari Ubuntu hingga CentOS, Linux menawarkan berbagai pilihan untuk server dan workstation jaringan."
          image="https://placehold.co/100x100/gray/white?text=Distros"
        />
        <Card
          title="Alat Jaringan"
          description="Dengan Linux, Anda memiliki akses ke berbagai alat jaringan yang kuat seperti iptables, ip, dan tcpdump."
          image="https://placehold.co/100x100/gray/white?text=Tools"
        />
      </Section>

      <Section id="contact" title="Hubungi Kami">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Nama
            </label>
            <input id="name" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input id="email" type="email" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Pesan
            </label>
            <textarea id="message" rows="4" className="form-input" required />
          </div>
          <button type="submit" className="submit-button">
            Kirim Pesan
          </button>
        </form>
      </Section>

      <Footer />
    </div>
  );
}
