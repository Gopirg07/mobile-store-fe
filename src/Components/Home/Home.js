import React from "react";
import Navbar from "../Navbar/Navbar";
import Carousell from "./Carousels";
import CardCarousels from "./CardCarousels";
import CompanyCarousel from "./CompanyCarousel";
import Footer from "../Footer/Footer";

export default function Home({ mode, setMode }) {
  return (
    <div>
      <Navbar mode={mode} setMode={setMode} />
      <Carousell mode={mode}/>
      <CardCarousels mode={mode}/>
      <CompanyCarousel/>
      <Footer mode={mode}/>
    </div>
  );
}
