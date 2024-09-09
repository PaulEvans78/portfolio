import React, { useEffect } from "react";
import dopReel from "../assets/showcase1.mp4";
import styled from "styled-components";
import ButtonFsF from "./ButtonFsFPrimary";

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
  background-color: #000000a0;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 90%;
  height: 100%;
  padding-top: 20px;

  @media screen and (max-width: 478px) {
    padding-top: 20px;
  }
`;

const StyledInfoBackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0em 2em 0.5em 1em;
  background-color: var(--main-infoBackground-backgroundcolor);
`;

const BottomParagraph = styled.div`
  margin-top: auto;
  padding-left: 20px;
`;

function CinemaCard(props) {
    useEffect(() => {
      preloadVideo(dopReel);
    }, []);

  return (
    <StyledFrontCard >
      <StyledCinemaVideo
        src={dopReel}
        autoPlay
        loop
        muted
        playsInline
        alt="A showreel showing clips from different productions."
      />
    
      <StyledOpacity>
        <StyledInfoContainer>
          <StyledInfoBackgroundContainer>
            <h3>Cinematographer</h3>
            <p>
              Member of fsf Föreningen Severiges Filmfotografer (The Association
              of Swedish Film Cinematographers). Working in Narrative,
              Commercials, Music Videos and Still Photography.
            </p>
          </StyledInfoBackgroundContainer>
          <BottomParagraph>
            <ButtonFsF />
          </BottomParagraph>
        </StyledInfoContainer>
      </StyledOpacity>
    </StyledFrontCard>
  );
}

export default CinemaCard;
