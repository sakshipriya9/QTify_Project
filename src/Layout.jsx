import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import "./Layout.css";
import TopAlbum from "./components/TopAlbum/TopAlbum";
import NewAlbum from "./components/NewAlbum/NewAlbum";


const Layout = () => {
  return (
    <div className="layout">
      {/* Navigation bar */}
      <NavBar />

      {/* Hero section */}
      <HeroSection />

      {/* Top albums section */}
      <TopAlbum />

       {/* New albums section */}
       <NewAlbum />

    </div>
  );
};

export default Layout;