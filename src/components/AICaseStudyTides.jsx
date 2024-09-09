import React, { useEffect } from "react";
import AiCase from "../assets/tides-black-spec-prototype.mp4";
import styled from "styled-components";
import ButtonCaseTides from "./ButtonCaseTides";

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
  background-color: black;

  @media screen and (max-width: 478px) {
    height: 500px;
  }

  @media screen and (max-width: 767px) {
  }
`;

const StyledConceptVideo = styled.video`
  position: absolute;
  /* right: 0; */
  width: 200%;
  /* height: 90%; */
  position: relative;
  object-fit: cover;
  padding-bottom: 30px;
  /* padding-left: 160px; */
 /* margin-right: 160px; */

  @media screen and (max-width: 1200px) {
    padding-left: 120px;
  }

  @media screen and (max-width: 1000px) {
    padding-left: 90px;
  }

  @media screen and (max-width: 960px) {
    padding-left: 160px;
  }

  @media screen and (max-width: 600px) {
    padding-left: 100px;
  }

  @media screen and (max-width: 476px) {
    padding-left: 90px;
  }

  @media screen and (max-width: 476px) {
    padding-left: 50px;
  }
`;

const StyledOpacity = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #0000007e;
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
            <h3>AI & Prototypes</h3>
            <p>
              Why using AI generated content can enhance the user experience in
              prototypes.
            </p>
          </StyledInfoBackgroundContainer>
          <BottomParagraph>
            <ButtonCaseTides />
          </BottomParagraph>
        </StyledInfoContainer>
      </StyledOpacity>
    </StyledFrontCard>
  );
}

export default AICaseStudyTides;
