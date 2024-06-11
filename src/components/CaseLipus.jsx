import { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import logoImg from "../assets/lipusPlusLogo.avif";
import heroImg from "../assets/lipusHeroImg.avif";
import Button from "./ButtonCasePrimary";

const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const StyledCaseMain = styled.section`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Context Image";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`;

const StyledCaseContents = styled.div`
  grid-area: Context;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 80px;
  color: #2c2c2c;

  @media screen and (max-width: 767px) {
    padding-left: 60px;
  }

  @media screen and (max-width: 478px) {
    padding-top: 30px;
    padding-left: 40px;
  }

  @media screen and (max-width: 360px) {
    width: 90%;
    padding-top: 15px;
    padding-left: 20px;
  }
`;

const StyledLogoContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
`;

const StyledLogo = styled.img`
  width: 40%;
  height: auto;
`;

const Stylednotation = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 40px;
  font-size: 14px;
  z-index: 2;
  /* margin-top: ; */
`;

const StyledImageContainer = styled.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({ isInView }) =>
    isInView &&
    css`
      animation: ${slideInFromRight} 1s ease-out forwards;
    `}
`;

const LipusPlus = () => {
  const imgRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <StyledCaseMain>
      <StyledCaseContents>
        <h4>UX Case study</h4>

        <StyledLogoContainer>
          <StyledLogo src={logoImg} alt="The logo for LipuspLus" />
        </StyledLogoContainer>

        <p>
          LipusPlus aims to attract physiotherapists and elite athletes to its
          webinars on the Return to Play concept. An enticing and informative
          landing page is needed to generate leads for these webinars.
        </p>

        <Button />

        {/* <Stylednotation>
        Photo by Peder Rotkirch.
        </Stylednotation> */}
      </StyledCaseContents>

      <StyledImageContainer>
        <Stylednotation>Photo by Peder Rotkirch.</Stylednotation>
        <StyledImg
          ref={imgRef}
          src={heroImg}
          alt="A hammarby handball player in green and white stripes holds a ball."
          isInView={isInView}
        />
      </StyledImageContainer>
    </StyledCaseMain>
  );
};
export default LipusPlus;
