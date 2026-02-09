import { Routes, Route, Navigate } from "react-router-dom";


import HeaderBlue from "@components/HeaderBlue";
import HeaderWhite from "@components/HeaderWhite";
import Footer from "@components/Footer";

import Home from "@pages/Home";
import About from "@pages/About";
import Contact from "@pages/Contacts";
import Informatique from "@pages/Informatique";
import CCTV from "@pages/CCTV";
import Soudure from "@pages/Soudure";
import Cursor from "@components/Cursor";
import ScrollToTop from "@components/ScrollToTop";
export default function App() {
  return (
    <>
      <Cursor />
      <ScrollToTop />
      <HeaderBlue />
      <HeaderWhite />

      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/computer" element={<Informatique />} />
          <Route path="/cctv" element={<CCTV />} />
          <Route path="/welding-construction" element={<Soudure />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

