import { useEffect, useRef } from "react";
import conceptReel from "../assets/conceptReel.mp4";
import styled from "styled-components";
import posterImage from "../assets/conceptPosterImg.avif";

const StyledFrontCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 0%;
  aspect-ratio: 5 / 4;
  font-size: 1.2rem;
  overflow: hidden;
  cursor: pointer;

  @media screen and (max-width: 1225px) {
    height: 600px;
  }

  @media screen and (max-width: 960px) {
    height: 500px;
    cursor: default;
  }

  &:hover .poster-image {
    opacity: 0;
  }
  &:hover .concept-video {
    visibility: visible;
  }
`;

const StyledConceptVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  visibility: hidden;
  background-color: transparent;
`;

const StyledPosterImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
  transition: opacity 0.5s ease-in-out;
`;

const StyledOpacity = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000042;
  color: #ffffff;
  z-index: 3;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: left;
  width: 85%;
  height: 100%;
  padding-left: 40px;

  @media screen and (max-width: 960px) {
    width: 90%;
  }

  @media screen and (max-width: 478px) {
    padding-top: 20px;
    padding-left: 20px;
  }
`;

const StyledBottomParagraph = styled.div`
  margin-top: auto;
  margin-bottom: 20px;
  padding-bottom: 20px;
`;

const Styledp = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  line-height: 1.4;
  margin: 0;

  @media screen and (max-width: 478px) {
    font-size: 18px;
  }

  @media screen and (max-width: 320px) {
    font-size: 16px;
  }
`;

const Styleda = styled.a`
  &:hover {
    color: #9804e2;
  }
`;

function Card(props) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.style.visibility = "visible";
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.style.visibility = "hidden";
    }
  };

  return (
    <StyledFrontCard
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <StyledConceptVideo
        className="concept-video"
        ref={videoRef}
        src={conceptReel}
        loop
        muted
        playsInline
        preload="auto"
        alt="A video showing animated AI images made for TV concepts."
      />
      <StyledPosterImage
        className="poster-image"
        src={posterImage}
        alt="Poster Image"
      />
      <StyledOpacity>
        <StyledInfoContainer>
          <h3>Writer</h3>
          <p>
            As a writer and concept developer, I have been commissioned to write
            concepts based on briefs provided by TV channels and streaming
            services and had concepts optioned.
          </p>
          <StyledBottomParagraph>
            <Styledp>Want to know more? Send me an email.</Styledp>
            <Styleda href="mailto:paul.evans.creative@gmail.com">
              paul.evans.creative@gmail.com
            </Styleda>
          </StyledBottomParagraph>
        </StyledInfoContainer>
      </StyledOpacity>
    </StyledFrontCard>
  );
}

export default Card;
