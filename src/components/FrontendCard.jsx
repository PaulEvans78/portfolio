import React from "react";
import styled, { keyframes } from "styled-components";
import ReactImg from "../assets/reactImg.avif";
import WebflowImg from "../assets/webflowImg.avif";
import GitHubImg from "../assets/githubImg.avif";
import HtmlImg from "../assets/htmlImg.avif";
import CssImg from "../assets/cssImg.avif";
import JavascriptImg from "../assets/javascriptImg.avif";

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
  grid-area: frontend;
  display: flex;
  align-self: flex-end;
  width: 100%;
`;

const StyledCaseContents = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  text-align: left;
  width: 90%;
  min-height: 100%;
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
  aspect-ratio: 16 / 10;
  font-size: 1.2rem;
  overflow: hidden;
  background-color: var(--main-hero-backgroundcolor);
`;

const StyledIconContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  column-gap: 40px;
  grid-template-columns: 25% 25% 25%;
  grid-template-rows: auto;
  padding-top: 44px;
  padding-left: 82px;
  align-self: center;

  @media screen and (max-width: 478px) {
    row-gap: 16px;
  }

  @media screen and (max-width: 400px) {
    padding-left: 40px;
  }
`;

const StyledTool = styled.img`
  width: 54%;
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
          <StyledTool src={ReactImg} alt="React Logo." />
          <StyledTool src={WebflowImg} alt="Webflow Logo." />
          <StyledTool src={GitHubImg} alt="GitHub Logo." />

          <StyledTool src={HtmlImg} alt="HTML Logo." />
          <StyledTool src={CssImg} alt="CSS Logo." />
          <StyledTool src={JavascriptImg} alt="Javascript Logo." />
        </StyledIconContainer>

        <StyledCaseContents>
          <h5>Frontend Tools</h5>
        </StyledCaseContents>
      </StyledCaseMain>
    </StyledWrapper>
  );
};

export default Card;
