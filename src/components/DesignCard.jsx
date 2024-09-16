import React from "react";
import styled, { keyframes } from "styled-components";
import MidjourneyImg from "../assets/Midjourney-logo.avif";
import FigmaImg from "../assets/figmaImg.avif";
import RunwayImg from "../assets/Runway-logo.avif";
import PhotoshopImg from "../assets/PhotoshopImg.avif";

const growShrinkAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledWrapper = styled.div`
  grid-area: design;
  display: inline-block;
  width: 100%;
`;

const StyledCaseContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  text-align: left;
  width: 90%;
  height: 100%;
  padding: 0em 2em 0.5em 2em;

  @media (max-width: 478px) {
    padding: 0em 2em 0.5em 1em;
  }
`;

const StyledCaseMain = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  aspect-ratio: 16 / 9;
  font-size: 1.2rem;
  overflow: hidden;
  background-color: var(--main-hero-backgroundcolor);
`;

const StyledIconContainer = styled.div`
  display: grid;
  row-gap: 40px;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: auto;
  padding-top: 48px;
  padding-left: 40px;

  @media screen and (max-width: 478px) {
    row-gap: 16px;
  }

  @media screen and (max-width: 400px) {
    padding-left: 40px;
  }
`;

const StyledTool = styled.img`
  width: 60%;
  height: auto;
  animation: ${growShrinkAnimation} 3s ease-in-out infinite;

  @media screen and (max-width: 478px) {
    width: 40%;
  }
`;

const Card = () => {
  return (
    <StyledWrapper>
      <StyledCaseMain>
        <StyledIconContainer>
          <StyledTool src={FigmaImg} alt="Figma Logo." />
          <StyledTool src={MidjourneyImg} alt="Midjourney Logo." />
          <StyledTool src={RunwayImg} alt="Runway Logo." />
          <StyledTool src={PhotoshopImg} alt="Photoshop Logo." />
        </StyledIconContainer>

        <StyledCaseContents>
          <h2>Design Tools</h2>
        </StyledCaseContents>
      </StyledCaseMain>
    </StyledWrapper>
  );
};

export default Card;
