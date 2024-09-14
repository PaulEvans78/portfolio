import { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Img from "../assets/meAbout.avif";

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

const StyledCaseMain = styled.section`
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 2%;
  grid-template-areas: "Image Context";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`;
const StyledContentsContainer = styled.div`
  width: 100%;
  padding-left: 4%;
  padding-right: 4%;
  background-color: var(--main-hero-backgroundcolor);
`;

const StyledCaseContents = styled.div`
  grid-area: Context;
  display: flex;
  flex-direction: column;
  width: 84%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (max-width: 767px) {
    padding-left: 30px;
  }

  @media screen and (max-width: 478px) {
    padding-top: 30px;
    padding-left: 20px;
  }

  @media screen and (max-width: 360px) {
    width: 80%;
    padding-top: 15px;
  }
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

  ${({ isLoaded }) =>
    isLoaded &&
    css`
      animation: ${slideInFromLeft} 1s ease-out forwards;
    `}
`;

const AboutMe = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    const imgElement = imgRef.current;
    if (imgElement) {
      if (imgElement.complete) {
        handleLoad();
      } else {
        imgElement.addEventListener("load", handleLoad);
        return () => {
          imgElement.removeEventListener("load", handleLoad);
        };
      }
    }
  }, []);

  return (
    <StyledCaseMain>
      <StyledContentsContainer>
        <StyledCaseContents>
          <h3>About me </h3>

          <p>
            Hi, I’m Paul! A creative with over 20 years of experience in
            branding, storytelling, and commercial and narrative production, now
            specializing in Experience Design. I bring a unique combination of
            creative and technical expertise, allowing me to design visually
            engaging and user-centric experiences. My interests extend into AI,
            particularly image and video generation. Merging traditional
            filmmaking techniques with the latest technologies. I have a calm
            and methodical approach to life, which enables me to navigate
            challenges with ease. My strong willpower and determination help me
            stay focused on the goals, even during difficult times.
          </p>
        </StyledCaseContents>
      </StyledContentsContainer>
      <StyledImageContainer>
        <StyledImg
          ref={imgRef}
          src={Img}
          alt="Paul Evans watching the ocean"
          isLoaded={isLoaded}
        />
      </StyledImageContainer>
    </StyledCaseMain>
  );
};

export default AboutMe;
