import React, { useEffect } from "react";
import AiCase from "../assets/tides.mp4";
import styled from "styled-components";

const preloadVideo = (url) => {
  const video = document.createElement("video");
  video.src = url;
  video.preload = "auto";
  video.load();
};

const StyledWrapper = styled.div`
  display: inline-block;
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

  transform: translateY(58%); /* Initially positioned off the bottom */
  transition: transform 0.5s ease-in-out;

  @media (max-width: 1200px) {
    transform: translateY(54%);
  }

  @media (max-width: 1160px) {
    transform: translateY(65%);
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
  aspect-ratio: 5 / 4;
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

const StyledVideo = styled.video`
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

const Styledp = styled.p`
  font-size: 16px;
`;

const StyledHover = styled.div`
&:hover {
    color: var(--main-button-hover-color);
    }
`;

function AICaseStudyTides(props) {
  useEffect(() => {
    preloadVideo(AiCase);
  }, []);

  return (
    <StyledWrapper>
      <a
        href="https://www.linkedin.com/posts/paul-evans-3a74605_ai-userexperience-webdevelopment-activity-7234084840894021632-LNks?utm_source=share&utm_medium=member_desktop"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledCaseMain>
          <StyledVideo
            src={AiCase}
            autoPlay
            loop
            muted
            playsInline
            alt="A Prototype showing tropical islands and underwater scenes."
          />

          <StyledOpacity>
            <StyledCaseContents>
              <h5>AI & PROTOTYPING</h5>
              <p>
                Why using AI generated content can enhance the user experience
                in prototypes. See case on linkedIn..
              </p>
              <StyledHover>
                <Styledp>Go to case study ..</Styledp>
              </StyledHover>
            </StyledCaseContents>
          </StyledOpacity>
        </StyledCaseMain>
      </a>
    </StyledWrapper>
  );
}

export default AICaseStudyTides;
