import React, { useEffect } from "react";
import AiCase from "../assets/NaomiBreakin.mp4";
import styled from "styled-components";
import { forwardRef } from "react";

const preloadVideo = (url) => {
  const video = document.createElement("video");
  video.src = url;
  video.preload = "auto";
  video.load();
};

const StyledWrapper = styled.div`
  display: inline-block;
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

  transform: translateY(44%); /* Initially positioned off the bottom */
  transition: transform 0.5s ease-in-out;

  @media (max-width: 478px) {
    transform: translateY(40%);
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

  &:hover ${Styledp} {
    display: flex;
  }

  @media (max-width: 960px) {
    &:hover ${StyledCaseContents} {
      transform: translateY(44%);
      background-color: transparent;
    }

    &:hover ${Styledp} {
      display: none;
    }
  }

  @media (max-width: 478px) {
    &:hover ${StyledCaseContents} {
      transform: translateY(40%);
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

const StyledHover = styled.div`
  &:hover {
    color: var(--main-button-hover-color);
  }
`;

// function AICaseStudyBreakdancing(props) {
//   useEffect(() => {
//     preloadVideo(AiCase);
//   }, []);

const AICaseStudyBreakdancing = forwardRef((props, ref) => {
  // Wrapped component with forwardRef**
  useEffect(() => {
    preloadVideo(AiCase);
  }, []);

  return (
    <StyledWrapper ref={ref}>
      <a
        href="https://www.linkedin.com/posts/paul-evans-3a74605_aiart-generativeai-runwayai-activity-7232706903896690689-JL51?utm_source=share&utm_medium=member_desktop"
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
            alt="Design frames changing randomly"
          />

          <StyledOpacity>
            <StyledCaseContents>
              <h2>CONSISTENCY IN AI</h2>
              <Styledp>
                How I am achieving consistency in AI video generation. See case
                on linkedIn..
              </Styledp>
              <StyledHover>
                <Styledp>Go to case study ..</Styledp>
              </StyledHover>
            </StyledCaseContents>
          </StyledOpacity>
        </StyledCaseMain>
      </a>
    </StyledWrapper>
  );
});

export default AICaseStudyBreakdancing;
