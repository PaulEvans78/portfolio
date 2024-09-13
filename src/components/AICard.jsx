import React, { useEffect } from "react";
import styled from "styled-components";
import AIVideo from "../assets/AIReel.mp4";
import { Link } from "react-router-dom";

const preloadVideo = (url) => {
  const video = document.createElement("video");
  video.src = url;
  video.preload = "auto";
  video.load();
};

const StyledWrapper = styled.div`
  grid-area: ai;
  display: flex;
  align-self: flex-end;
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

  transform: translateY(64%); /* Initially positioned off the bottom */
  transition: transform 0.5s ease-in-out;

  @media (max-width: 1200px) {
    transform: translateY(94%);
  }

  @media (max-width: 1000px) {
    transform: translateY(58%);
  }

  @media (max-width: 960px) {
    transform: translateY(54%);
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
  aspect-ratio: 16 / 9;
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

function AiCard(props) {
  useEffect(() => {
    preloadVideo(AIVideo);
  }, []);

  return (
    <StyledWrapper>
      <Link to="/casestudies">
        <StyledCaseMain>
        <StyledVideo
        src={AIVideo}
        autoPlay
        loop
        muted
        playsInline
        alt="A background video showing various moving images created with ai."
      />
      <StyledOpacity>
      <StyledCaseContents>
            <h5>AI Case Studies</h5>

            <Styledp>
            I see AI not as a threat but as an opportunity.
          Though still evolving, AI is rapidly becoming a key tool for creating
          final content for brands.
            </Styledp>
            <StyledHover> 
            <Styledp>
           See LinkedIn case studies ..
            </Styledp>
            </StyledHover>
            </StyledCaseContents>
      </StyledOpacity>
      </StyledCaseMain>
      </Link>
    </StyledWrapper>
  );
}

export default AiCard;
