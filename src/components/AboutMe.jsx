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
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Image Context";

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
  width: 75%;
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
      animation: ${slideInFromLeft} 1s ease-out forwards;
    `}
`;

const AboutMe = () => {
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
        <h3>About me </h3>

        <p>
          “Hi, I’m Paul! I have worked as a creative for over 20 years. In need
          of a platform to showcase my work, I taught myself how to code. In
          2020, I decided to study web design to gain structure and further
          insight into the platforms and methods used. My interests extend into
          AI, particularly image and video generation and recently started
          developing tools that incorporate AI to aid in my creative work. I
          have a calm and methodical approach to life, which enables me to
          navigate challenges with ease. My strong willpower and determination
          help me stay focused on the goals, even during difficult times.
        </p>
      </StyledCaseContents>

      <StyledImageContainer>
        <StyledImg
          ref={imgRef}
          src={Img}
          alt="Paul Evans watching the ocean"
          isInView={isInView}
        />
      </StyledImageContainer>
    </StyledCaseMain>
  );
};
export default AboutMe;
