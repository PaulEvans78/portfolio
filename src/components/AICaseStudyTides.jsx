import React, { useEffect } from "react";
import AiCase from "../assets/tides-spec-prototype.mp4";
import styled from "styled-components";
import ButtonCaseTides from "./ButtonCaseTides";

const preloadVideo = (url) => {
  const video = document.createElement('video');
  video.src = url;
  video.preload = 'auto';
  video.load();
};

const StyledFrontCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-width: 100%;
  /* aspect-ratio: 5 / 4; */
  height: 900px; 
  font-size: 1.2rem;
  color: var(--secondary-font-color);
  overflow: hidden;

  @media screen and (max-width: 1225px) {
    height: 600px;
  }

  @media screen and (max-width: 478px) {
    height: 500px;
  }

  @media screen and (max-width: 767px) {
  }
`;

const StyledHeaderContainer = styled.video`
 /* position: absolute; */
  width: 100%;
  height: 200px;
  position: relative;
  align-self: center;
  object-fit: cover;
  z-index: 100;
  /* color: var(--secondary-font-color); */
`;


const StyledConceptVideo = styled.video`
  /* position: absolute; */
  width: 100%;
  height: 100%;
  position: relative;
  align-self: center;
  object-fit: cover;
`;

// const StyledOpacity = styled.div`
//   position: absolute;
//   display: flex;
//   width: 100%;
//   height: 100%;
//   background-color: #000000a0;
// `;

const StyledInfoContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 90%;
  height: 100%;
  padding-top: 20px;
  padding-left: 40px;

  @media screen and (max-width: 478px) {
    padding-left: 20px;
  }
`;

const BottomParagraph = styled.div`
  margin-top: auto;
`;

function AICaseStudyTides(props) {
  useEffect(() => {
    preloadVideo(AiCase);
  }, []);

  return (
    <StyledFrontCard>

      <StyledHeaderContainer>
      <h3>AI</h3>
          <p>
            My unique experience enhances visual storytelling and user
            engagement, creating seamless and captivating interactions.
          </p>

      </StyledHeaderContainer>

      <StyledConceptVideo
        src={AiCase}
        autoPlay
        loop
        muted
        playsInline
        alt="Design frames changing randomly"
      />
      {/* <StyledOpacity> */}
        <StyledInfoContainer>
          {/* <h3>AI</h3>
          <p>
            My unique experience enhances visual storytelling and user
            engagement, creating seamless and captivating interactions.
          </p> */}

          <BottomParagraph>
            <ButtonCaseTides />
          </BottomParagraph>
        </StyledInfoContainer>
      {/* </StyledOpacity> */}
    </StyledFrontCard>
  );
}

export default AICaseStudyTides;
