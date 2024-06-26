import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import smokeGif from "../assets/smoke.gif";

const preloadImage = (url) => {
  const img = new Image();
  img.src = url;
};

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const StyledHeroMain = styled.section`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--main-hero-backgroundcolor);
`;

const StyledHeroContents = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  padding-top: 160px;
  padding-left: 60px;
  padding-bottom: 200px;
  display: flex;
  flex-direction: column;
  z-index: 99;

  @media screen and (max-width: 1225px) {
    padding-top: 120px;
    padding-bottom: 150px;
  }

  @media screen and (max-width: 1025px) {
    padding-bottom: 120px;
    padding-top: 140px;
  }

  @media screen and (max-width: 767px) {
    padding-top: 160px;
    padding-bottom: 80px;
  }

  @media screen and (max-width: 478px) {
    padding-top: 140px;
    padding-left: 40px;
  }

  @media screen and (max-width: 320px) {
    padding-bottom: 60px;
    padding-left: 20px;
  }
`;

const StyledAnimatedHeading = styled.div`
  animation: ${slideInFromLeft} 1s ease-out 0.5s forwards;
`;

const Styledp = styled.p`
  width: 70%;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  line-height: 1.4;

  @media screen and (max-width: 1225px) {
    width: 80%;
  }

  @media screen and (max-width: 1025px) {
    width: 85%;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
    font-size: 20px;
  }

  @media screen and (max-width: 478px) {
    font-size: 18px;
  }

  @media screen and (max-width: 320px) {
    font-size: 16px;
  }
`;

const Hero = () => {
  useEffect(() => {
    preloadImage(smokeGif);
  }, []);

  return (
    <StyledHeroMain>
      <StyledHeroContents>
        <h1 style={{ backgroundImage: `url(${smokeGif})` }}>Paul Evans</h1>
        <StyledAnimatedHeading>
          <h2>Experience Designer</h2>
        </StyledAnimatedHeading>
        <Styledp>
          I am a passionate creative who's professional background spans over 20
          years, during which time I have worn many hats. Cinematographer, UX /
          UI designer, frontend developer and not to mention concept developer
          and writer. This experience brings a unique perspective to Visual
          Design. Combining these skills to create the ultimate Brand and
          Customer Experience excites and drives me.
        </Styledp>
      </StyledHeroContents>
    </StyledHeroMain>
  );
};

export default Hero;
