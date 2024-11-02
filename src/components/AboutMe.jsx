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
  width: 90%;
  display: flex;
  flex-direction: column;
  padding-left: 4%;
  padding-right: 4%;
  background-color: var(--main-hero-backgroundcolor);
  color: var(--main-font-color);

  @media screen and (max-width: 960px) {
    justify-self: center;
  }
`;

const StyledCaseContents = styled.div`
  grid-area: Context;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (max-width: 960px) {
    justify-self: center;
    justify-content: center;
    text-align: center;
  }
`;

const Styledp = styled.p`
  text-align: justify;
`;

const StyledImageContainer = styled.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 24px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;

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
          <h2>About me </h2>

          <Styledp>
            I bring a unique combination of creative and technical expertise. I
            am competent with design tools such as Figma and Adobe Creative
            Suite as well as Useberry for testing. When it comes to frontend I
            am skilled in html, css, javascript and React. My interests also
            extend into AI, particularly image and video generation, and AR.
            Merging traditional filmmaking techniques with the latest
            technologies. I have a calm and methodical approach to life, which
            enables me to navigate challenges with ease. I enjoy working with
            people from diverse backgrounds and ages. Something thats engerises
            ans inspires immensely. My strong willpower and determination helps
            me stay focused on the goals, even during difficult times.
          </Styledp>
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
