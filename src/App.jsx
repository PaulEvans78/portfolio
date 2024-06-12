import React, { useRef } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CaseStudies from "./pages/Case Studies";
import About from "./pages/About";
import LipusPlus from "./pages/LipusPlus";
import Ebie from "./pages/Ebie";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const GridContainer = styled.div`
  min-height: 100%;
  max-width: 100vw;
`;

const MainContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: space-evenly;
`;

const App = () => {
  const footerRef = useRef(null);
  return (
    <HashRouter>
      <ScrollToTop />
      <GridContainer>
        <Navbar footerRef={footerRef} />

        <MainContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/casestudies" element={<CaseStudies />} />

            <Route path="/about" element={<About />} />

            <Route path="/lipusplus" element={<LipusPlus />} />

            <Route path="/ebie" element={<Ebie />} />

            
          </Routes>

          <Footer ref={footerRef} />
        </MainContainer>
        <ScrollButton />
      </GridContainer>
    </HashRouter>
  );
};

export default App;
