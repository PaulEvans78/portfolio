import React, { useEffect, useRef } from "react";
import dopReel from "../assets/showcase1.mp4";
import posterImage from "../assets/posterImg.avif";
import styled from "styled-components";
import ButtonFsF from "./ButtonFsFPrimary";

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
  &:hover .cinema-video {
    visibility: visible;
  }
`;

const StyledCinemaVideo = styled.video`
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
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.3);
  color: #ffffff;
  z-index: 3;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 90%;
  height: 100%;
  padding-top: 20px;
  padding-left: 40px;

  @media screen and (max-width: 960px) {
    width: 90%;
  }

  @media screen and (max-width: 478px) {
    padding-top: 20px;
    padding-left: 20px;
  }
`;

const BottomParagraph = styled.div`
  margin-top: auto;
`;

function CinemaCard(props) {
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
      <StyledCinemaVideo
        className="cinema-video"
        ref={videoRef}
        src={dopReel}
        loop
        muted
        playsInline
        preload="auto"
        alt="A showreel showing clips from different productions."
      />
      <StyledPosterImage
        className="poster-image"
        src={posterImage}
        alt="Poster Image"
      />
      <StyledOpacity>
        <StyledInfoContainer>
          <h3>Cinematographer</h3>
          <p>
            Member of fsf Föreningen Severiges Filmfotografer (The Association
            of Swedish Film Cinematographers). Working in Narrative,
            Commercials, Music Videos and Still Photography.
          </p>
          <BottomParagraph>
            <ButtonFsF />
          </BottomParagraph>
        </StyledInfoContainer>
      </StyledOpacity>
    </StyledFrontCard>
  );
}

export default CinemaCard;
