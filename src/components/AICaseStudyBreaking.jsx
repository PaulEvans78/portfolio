import React, { useEffect } from "react";
import AiCase from "../assets/NaomiBreakin.mp4";
import styled from "styled-components";
import ButtonCaseBreak from "./ButtonCaseBreak";

const preloadVideo = (url) => {
  const video = document.createElement("video");
  video.src = url;
  video.preload = "auto";
  video.load();
};

const StyledFrontCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  min-width: 100%;
  height: 600px;
  font-size: 1.2rem;
  overflow: hidden;

  @media screen and (max-width: 478px) {
    height: 500px;
  }

  @media screen and (max-width: 767px) {
  }
`;

const StyledConceptVideo = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: center;
  object-fit: cover;
`;

const StyledOpacity = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000048;
`;

const StyledInfoContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 90%;
  height: 100%;
  padding-top: 20px;
`;

const StyledInfoBackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0em 1.5em 0.5em 1em;
  background-color: var(--main-infoBackground-backgroundcolor);
`;

const BottomParagraph = styled.div`
  margin-top: auto;
  padding-left: 20px;
`;

function AICaseStudyTides(props) {
  useEffect(() => {
    preloadVideo(AiCase);
  }, []);

  return (
    <StyledFrontCard>
      <StyledConceptVideo
        src={AiCase}
        autoPlay
        loop
        muted
        playsInline
        alt="Design frames changing randomly"
      />

      <StyledOpacity>
        <StyledInfoContainer>
          <StyledInfoBackgroundContainer>
            <h3>Consistency in AI</h3>
            <p>How I am achieving consistency in video generation.</p>
          </StyledInfoBackgroundContainer>
          <BottomParagraph>
            <ButtonCaseBreak />
          </BottomParagraph>
        </StyledInfoContainer>
      </StyledOpacity>
    </StyledFrontCard>
  );
}

export default AICaseStudyTides;
