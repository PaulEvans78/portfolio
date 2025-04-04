import { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Img from "../assets/camper.avif";

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
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 2%;
  grid-template-areas: "Context Image";

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

const StyledQuote = styled.p`
  text-align: justify;
  margin-top: 2em;

  @media screen and (max-width: 960px) {
    text-align: center;
  }
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
  visibility: hidden;
  border-radius: 24px;

  ${({ isInView }) =>
    isInView &&
    css`
      visibility: visible;
      animation: ${slideInFromRight} 1s ease-out forwards;
    `}
`;

const ForFun = () => {
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
      <StyledContentsContainer>
        <StyledCaseContents>
          <h2>For fun</h2>
          <Styledp>
            Surfing and traveling are my two biggest passions. When I'm not
            paddling out into the sea I like to work out at the gym or swim in
            the lake. I also cherish the time I spend with my family and
            friends, cooking and watching movies and TV shows.
          </Styledp>
          <StyledQuote>
            "Work like a captain, play like a pirate" - Christina Lauren
          </StyledQuote>
        </StyledCaseContents>
      </StyledContentsContainer>
      <StyledImageContainer>
        <StyledImg
          ref={imgRef}
          src={Img}
          alt="A surfboard propped up against a mobile home"
          isInView={isInView}
        />
      </StyledImageContainer>
    </StyledCaseMain>
  );
};

export default ForFun;
