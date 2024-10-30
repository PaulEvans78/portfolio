import styled, { keyframes, css } from "styled-components";
import logo from "../assets/paulEvansCreativeLogo.avif";

const rotate = keyframes` 
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledLoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #171717;
  z-index: 9999;
`;

export const StyledLogo = styled.img.attrs({
  src: logo,
  alt: "Paul Evans Creative Logo",
})`
  width: 400px;
  height: 400px;
  animation: ${rotate} 1.5s linear infinite;
  border-radius: 50%;

  @media (max-width: 767px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 478px) {
    width: 200px;
    height: 200px;
  }
`;

export const StyledSquaresContainer = styled.section`
  max-width: 94.5%;
  height: auto;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  row-gap: 20px;
  column-gap: 2%;
  padding-left: 2%;
  padding-right: 2%;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  opacity: 0;
  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${fadeIn} 2s forwards;
    `}

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
  }
`;

export const StyledThreeSquaresContainer = styled.section`
  max-width: 100%;
  height: auto;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-areas:
    "hero"
    "cinema"
    "ux"
    "ai";
  row-gap: 20px;
  /* column-gap: 2%; */
  padding-top: 140px;
  /* box-sizing: border-box;  */
  /* padding-left: 2%;
  padding-right: 2%; */
  opacity: 0;
  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${fadeIn} 2s forwards;
    `}

  /* @media (min-width: 2050px) {
    grid-template-columns: 1.5fr 1fr 1fr;
  } */

  @media screen and (max-width: 960px) {
    padding-top: 90px;
    grid-template-areas:
      "hero"
      "cinema"
      "ux"
      "ai";
  }

  @media screen and (max-width: 767px) {
    padding-top: 70px;
  }
`;

export const StyledThreeSquaresReverseContainer = styled.section`
  max-width: 96%;
  height: auto;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 32% 32% 32%;
  grid-template-areas:
    "design storytelling storytelling"
    "frontend storytelling storytelling";

  row-gap: 20px;
  column-gap: 2%;
  /* padding-left: 2%;
  padding-right: 2%; */
  padding-bottom: 28px;
  opacity: 0;
  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${fadeIn} 2s forwards;
    `}

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-areas:
      "storytelling"
      "design"
      "frontend";
  }
`;

export const FadeInComponent = styled.div`
  opacity: 0;
  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${fadeIn} 1s forwards;
    `}
`;
