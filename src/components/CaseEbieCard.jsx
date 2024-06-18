import { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import logoImg from "../assets/ebieLogo.avif";
import heroImg from "../assets/ebieHeroImg.avif";
import Button from "./ButtonEbiePrimary";

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
  background-color: var(--main-casecard-background-color);
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
  color: var(--secondary-font-color);

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
  display: flex;
  padding-bottom: 30px;
  padding-top: 30px;
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
`;

const StyledImageContainer = styled.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media screen and (max-width: 960px) {
    height: 600px;
  }

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

  @media (max-width: 478px) {
    height: 500px;
  }

  
`;

const Case = () => {
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
          <StyledLogo src={logoImg} alt="The logo for Ebie" />
        </StyledLogoContainer>

        <p>
          Create and implement a completely new and user-friendly function
          within the platform that makes it easy for property owners to apply
          for and manage group insurance. Simplify the application and the
          overview for insurance status.
        </p>

        <Button />
      </StyledCaseContents>

      <StyledImageContainer>
        <Stylednotation>Photo from www.Ebie.se</Stylednotation>
        <StyledImg
          ref={imgRef}
          src={heroImg}
          alt="A street view on the corner of Sveavägen, Sergelstorg."
          isInView={isInView}
        />
      </StyledImageContainer>
    </StyledCaseMain>
  );
};
export default Case;
