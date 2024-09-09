import React from "react";
import styled, { keyframes } from "styled-components";
import ButtonGitHub from "./ButtonGitHub";
import ReactImg from "../assets/reactImg.avif";
import WebflowImg from "../assets/webflowImg.avif";
import FigmaImg from "../assets/figmaImg.avif";
import GitHubImg from "../assets/githubImg.avif";
import HtmlImg from "../assets/htmlImg.avif";
import CssImg from "../assets/cssImg.avif";
import JavascriptImg from "../assets/javascriptImg.avif";
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

const StyledFrontCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 100%;
  height: 620px;
  font-size: 1.2rem;
  overflow: hidden;
  background-color: var(--main-casecard-background-color);

  @media screen and (max-width: 1225px) {
    height: 600px;
  }

  @media screen and (max-width: 478px) {
    height: 500px;
  }
`;

const StyledBtsContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 40px;
`;

const StyledInfoContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 85%;
  height: 100%;
  color: var(--secondary-font-color);

  @media screen and (max-width: 960px) {
    width: 90%;
  }

  @media screen and (max-width: 478px) {
    height: 500px;
  }
`;

const StyledIconContainer = styled.div`
  display: grid;
  row-gap: 40px;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: auto;
  padding-left: 60px;
  padding-bottom: 60px;

  @media screen and (max-width: 478px) {
    row-gap: 16px;
  }

  @media screen and (max-width: 400px) {
    padding-left: 40px;
  }
`;

const StyledTool = styled.img`
  width: 50%;
  height: auto;
  animation: ${growShrinkAnimation} 3s ease-in-out infinite;

  @media screen and (max-width: 478px) {
    width: 40%;
  }
`;

const BottomParagraph = styled.div`
  margin-top: auto;
`;

const Card = () => {
  return (
    <StyledFrontCard>
      <StyledBtsContainer>
        <StyledIconContainer>
          <StyledTool src={ReactImg} alt="React Logo." />
          <StyledTool src={WebflowImg} alt="Webflow Logo." />
          <StyledTool src={FigmaImg} alt="Figma Logo." />
          <StyledTool src={GitHubImg} alt="GitHub Logo." />

          <StyledTool src={HtmlImg} alt="HTML Logo." />
          <StyledTool src={CssImg} alt="CSS Logo." />
          <StyledTool src={JavascriptImg} alt="Javascript Logo." />
          <StyledTool src={PhotoshopImg} alt="Photoshop Logo." />
        </StyledIconContainer>
      </StyledBtsContainer>
      <StyledInfoContainer>
        <h3>Frontend Tools</h3>
        <p>
          On top of all this I ma a qualified Frontend developer with a solid
          understanding of HTML, CSS, JavaScript, and React.
        </p>

        <BottomParagraph>
          <ButtonGitHub />
        </BottomParagraph>
      </StyledInfoContainer>
    </StyledFrontCard>
  );
};

export default Card;
