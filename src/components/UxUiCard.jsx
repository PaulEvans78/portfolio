import React, { useEffect } from "react";
import UxUiReel from "../assets/uxuiReel.mp4";
import styled from "styled-components";
import ButtonCaseStudies from "./ButtonCaseStudies";

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
  aspect-ratio: 5 / 4;
  font-size: 1.2rem;
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
  background-color: #000000a0;
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
  padding-left: 40px;

  @media screen and (max-width: 478px) {
    padding-left: 20px;
  }
`;

const BottomParagraph = styled.div`
padding-bottom: 20px;
  margin-top: auto;
`;

function Card(props) {
  useEffect(() => {
    preloadVideo(UxUiReel);
  }, []);

  return (
    <StyledFrontCard>
      <StyledConceptVideo
        src={UxUiReel}
        autoPlay
        loop
        muted
        playsInline
        alt="Design frames changing randomly"
      />
      <StyledOpacity>
        <StyledInfoContainer>
          <h3>UX / UI Designer</h3>
          <p>
            My unique experience enhances visual storytelling and user
            engagement, creating seamless and captivating interactions.
          </p>

          <BottomParagraph>
            <ButtonCaseStudies />
          </BottomParagraph>
        </StyledInfoContainer>
      </StyledOpacity>
    </StyledFrontCard>
  );
}

export default Card;
