import React, { useEffect } from "react";
import dopReel from "../assets/showcase1.mp4";
import styled from "styled-components";

const preloadVideo = (url) => {
  const video = document.createElement("video");
  video.src = url;
  video.preload = "auto";
  video.load();
};

const StyledWrapper = styled.div`
  grid-area: cinema;
  display: inline-block;
  width: 100%;
`;

const StyledCaseContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 0em 2em 0.5em 2em;

  transform: translateY(56%); /* Initially positioned off the bottom */
  transition: transform 0.5s ease-in-out;

  @media (max-width: 1200px) {
    transform: translateY(60%);
  }

  @media (max-width: 1000px) {
    transform: translateY(64%);
  }

  @media (max-width: 767px) {
    transform: translateY(58%);
  }

  @media (max-width: 600px) {
    transform: translateY(66%);
  }

  @media (max-width: 478px) {
    transform: translateY(78%);
  }

  @media (max-width: 360px) {
    transform: translateY(94%);
  }
`;

const StyledCaseMain = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  aspect-ratio: 5 / 3;
  font-size: 1.2rem;
  overflow: hidden;

  &:hover ${StyledCaseContents} {
    transform: translateY(0%); /* Slide up into view */
    background-color: #060606ac;
    justify-content: center;
  }

  @media (max-width: 960px) {
    &:hover {
      transform: none;
      color: inherit;
    }
  }
`;

const StyledCinemaVideo = styled.video`
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
  background-color: #00000056;
`;

function CinemaCard(props) {
  useEffect(() => {
    preloadVideo(dopReel);
  }, []);

  return (
    <StyledWrapper>
      <a
        href="https://paulevans-dop.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledCaseMain>
          <StyledCinemaVideo
            src={dopReel}
            autoPlay
            loop
            muted
            playsInline
            alt="A showreel showing clips from different productions."
          />

          <StyledOpacity>
            <StyledCaseContents>
              <h5>Cinematography</h5>
              <p>
              Member of fsf, Föreningen Severiges Filmfotografer (The Association of Swedish Film Cinematographers). 
              Working in Narrative, Commercials, Music Videos and Still Photography. 
              </p>

              <p>See work ..</p>
            </StyledCaseContents>
          </StyledOpacity>
        </StyledCaseMain>
      </a>
    </StyledWrapper>
  );
}

export default CinemaCard;
