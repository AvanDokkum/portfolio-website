import Features from "../components/feature/Features";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import "./Layout.css";

import React from "react";

const Layout: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <main className="grid-container">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
