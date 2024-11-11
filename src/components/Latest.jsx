import React, { useEffect } from "react";
import Reel from "../assets/sns.mp4";
import styled from "styled-components";
import { useInView } from 'react-intersection-observer';

const preloadVideo = (url) => {
  const video = document.createElement("video");
  video.src = url;
  video.preload = "auto";
  video.load();
};

const StyledWrapper = styled.div`
  grid-area: cinema;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

const Styledp = styled.p`
  font-size: 16px;
  display: none;
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
  border-radius: 24px;

  transform: translateY(46%); //Intial state
  transition: transform 0.5s ease-in-out;

  @media (max-width: 960px) {
    transform: translateY(42%);
    padding: 0em 2em 1em 1em;
  }

  @media (max-width: 478px) {
    justify-content: flex-end;
    padding: 0em 2em 2em 1em;
  }
`;

const StyledCaseMain = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-self: center;
  width: 100%;
  aspect-ratio: 16 / 9;
  font-size: 1.2rem;
  overflow: hidden;
  border-radius: 24px; 
  transform: perspective(1000px) ${({ isVisible }) => (isVisible ? "rotateX(0deg)" : "rotateX(75deg)")};
  transition: transform 1s ease-in-out;

  &:hover ${StyledCaseContents} {
    transform: translateY(0%); // Slide up
    background-color: #060606ac;
    justify-content: center;
  }

  &:hover ${Styledp} {
    display: flex;
  }

  @media (max-width: 960px) {
    ${StyledCaseContents} {
      transform: translateY(0%);
    }

    ${Styledp} {
      display: flex;
    }

    &:hover ${StyledCaseContents} {
      transform: translateY(0%);
      background-color: transparent;
    }

    &:hover ${Styledp} {
      display: none;
    }
  }

  @media (max-width: 478px) {
    aspect-ratio: 4 / 5;
  }
`;

const StyledInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: var(--main-font-color);
  padding: 0em 0em 2em 0em;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    padding: 0em 0em 2em 0em;
  }
`;

const StyledDescription = styled.div`
  width: 90%;
  text-align: center;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
  }
`;

const StyledSectionTitle = styled.div`
  display: flex;
  justify-content: center;
  color: var(--main-font-color);
  padding: 2em 0em 2em 0em;
`;

const StyledCinemaVideo = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: center;
  object-fit: cover;
  border-radius: 24px;
`;

const StyledInfoText = styled.p`
  font-size: 16px;
  margin-bottom: 3em;
`;

const StyledOpacity = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000011;
  border-radius: 24px;
`;



const StyledSectionNotation = styled.div`
  display: flex;
  justify-self: center;
  justify-content: center;
  width: 90%;
  color: var(--main-font-color);
  padding: 3em 0em 3em 0em;
`;

const StyledNotation = styled.p`
  font-size: 14px;
  text-align: center;
  height: 20px;
`;

function AiCard() {
  useEffect(() => {
    preloadVideo(Reel);
  }, []);

  const { ref: videoRef, inView } = useInView({ threshold: 0.5 });

  return (
    <StyledWrapper>
      <StyledSectionTitle>
        <h2>Latest </h2>
      </StyledSectionTitle>
      <StyledInfoContainer>
        <StyledDescription>
          <StyledInfoText>
          Singles Day with Sneakers n Stuff. 
          
          For this campaign, collaborating with Ekman & Falck & SneakersnStuff, we designed AI-driven content that brings a playful twist to the Singles Day experience—
          imagining artificial characters in a Tinder-like environment, all showing their love for sneakers. 

          This post features a selection of the content we delivered, all created and turned around within 24 hours 
          of project acceptance! This campaign demonstrates how brands can embrace AI to generate unique, engaging content, 
          even on a tight timeline.
          </StyledInfoText>
      
        </StyledDescription>
      </StyledInfoContainer>
      <a
        // href="https://www.linkedin.com/in/paul-evans-3a74605/"
        // target="_blank"
        // rel="noopener noreferrer"
      >
        <StyledCaseMain ref={videoRef}  isVisible={inView}>
          <StyledCinemaVideo
            src={Reel}
            autoPlay
            loop
            muted
            playsInline
            alt="Fun AI generated Images of people who love sneakers. For SneakersnStuff, Singles Day Campaign."
          />

          <StyledOpacity>
         
          </StyledOpacity>
        </StyledCaseMain>
      </a>
      <StyledSectionNotation>
        <StyledNotation>
          A Screen recording from the SneakersnStuff webpage.  
        </StyledNotation>
      </StyledSectionNotation>
    </StyledWrapper>
  );
}

export default AiCard;
