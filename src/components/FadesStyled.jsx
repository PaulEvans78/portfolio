import styled, { css } from "styled-components";


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
  padding-top: 140px;
  opacity: 0;
  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${fadeIn} 2s forwards;
    `}

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
