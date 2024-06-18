// import styled from "styled-components";
// import ButtonGitHub from "./ButtonGitHub";
// import React from "../assets/reactImg.avif";
// import Webflow from "../assets/webflowImg.avif";
// import Figma from "../assets/figmaImg.avif";
// import GitHub from "../assets/githubImg.avif";
// import HtmlImg from "../assets/htmlImg.avif";
// import CssImg from "../assets/cssImg.avif";
// import JavascriptImg from "../assets/javascriptImg.avif";
// import Photoshop from "../assets/PhotoshopImg.avif";

// const StyledFrontCard = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   width: 100%;
//   min-width: 100%;
//   aspect-ratio: 5 / 4;
//   font-size: 1.2rem;
//   overflow: hidden;

//   @media screen and (max-width: 1225px) {
//     height: 600px;
//   }

//   @media screen and (max-width: 478px) {
//     height: 500px;
//   }
// `;

// const StyledBtsContainer = styled.div`
//   position: absolute;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 100%;
//   padding-top: 40px;
// `;

// const StyledInfoContainer = styled.div`
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   text-align: left;
//   width: 85%;
//   height: 100%;
//   padding-left: 40px;
//   color: var(--secondary-font-color);

//   @media screen and (max-width: 960px) {
//     width: 90%;
//   }

//   @media screen and (max-width: 478px) {
//     padding-left: 20px;
//     height: 500px;
//   }
// `;

// const StyledIconContainer = styled.div`
//   display: grid;
//   row-gap: 16px;
//   row-gap: 40px;
//   grid-template-columns: 25% 25% 25% 25%;
//   grid-template-rows: 30% 30%;
//   padding-left: 60px;

//   @media screen and (max-width: 478px) {
//     padding-left: 40px;
//   }
// `;

// const StyledTool = styled.img`
//   width: 50%;
//   height: auto;

//   @media screen and (max-width: 478px) {
//     width: 40%;
//   }
// `;

// const BottomParagraph = styled.div`
//   margin-top: auto;
// `;

// function Card() {
//   return (
//     <StyledFrontCard>
//       <StyledBtsContainer>
//         <StyledIconContainer>
//           <StyledTool src={React} alt="React Logo." />
//           <StyledTool src={Webflow} alt="Webflow Logo." />
//           <StyledTool src={Figma} alt="Figma Logo." />
//           <StyledTool src={GitHub} alt="GitHub Logo." />

//           <StyledTool src={HtmlImg} alt="HTML Logo." />
//           <StyledTool src={CssImg} alt="CSS Logo." />
//           <StyledTool src={JavascriptImg} alt="Javascript Logo." />
//           <StyledTool src={Photoshop} alt="Photoshop Logo." />
//         </StyledIconContainer>
//       </StyledBtsContainer>
//       <StyledInfoContainer>
//         <h3>Frontend Dev</h3>
//         <p>
//           With a solid understanding of HTML, CSS, JavaScript, and React, I have
//           created visually appealing and user-friendly interfaces for various
//           clients.
//         </p>

//         <BottomParagraph>
//           <ButtonGitHub />
//         </BottomParagraph>
//       </StyledInfoContainer>
//     </StyledFrontCard>
//   );
// }

// export default Card;

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
  align-items: flex-start;
  width: 100%;
  min-width: 100%;
  aspect-ratio: 5 / 4;
  font-size: 1.2rem;
  overflow: hidden;

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
  align-items: flex-start;
  text-align: left;
  width: 85%;
  height: 100%;
  padding-left: 40px;
  color: var(--secondary-font-color);

  @media screen and (max-width: 960px) {
    width: 90%;
  }

  @media screen and (max-width: 478px) {
    padding-left: 20px;
    height: 500px;
  }
`;

const StyledIconContainer = styled.div`
  display: grid;
  row-gap: 40px;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: auto;
  padding-left: 60px;

  @media screen and (max-width: 478px) {
    padding-left: 40px;
    row-gap: 16px;
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
        <h3>Frontend Dev</h3>
        <p>
          With a solid understanding of HTML, CSS, JavaScript, and React, I have
          created visually appealing and user-friendly interfaces for various
          clients.
        </p>
        <BottomParagraph>
          <ButtonGitHub />
        </BottomParagraph>
      </StyledInfoContainer>
    </StyledFrontCard>
  );
};

export default Card;
