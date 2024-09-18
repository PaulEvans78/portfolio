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

  transform: translateY(42%); /* Initially positioned off the bottom */
  transition: transform 0.5s ease-in-out;

  @media (max-width: 478px) {
    padding: 0em 2em 0.5em 1em;
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

  &:hover ${Styledp} {
    display: flex;
  }

  @media (min-width: 2050px) {
    aspect-ratio: 16 / 12;
  }

  @media (max-width: 960px) {
    &:hover ${StyledCaseContents} {
      transform: translateY(42%);
      background-color: transparent;
    }

    &:hover ${Styledp} {
      display: none;
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

function AiCard(props) {
  useEffect(() => {
    preloadVideo(AIVideo);
  }, []);

  return (
    <StyledWrapper>
      {/* <Link to="/casestudies"> */}
      <Link
        to={{
          pathname: "/casestudies",
          search: "?target=AICaseStudyBreaking", // Use search params instead of state
        }}
      >
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
              <h2>AI Case Studies</h2>

              <Styledp>
                I see AI not as a threat but as an opportunity. Though still
                evolving, AI is rapidly becoming a key tool for creating final
                content for brands.
              </Styledp>
              <StyledHover>
                <Styledp>See LinkedIn case studies ..</Styledp>
              </StyledHover>
            </StyledCaseContents>
          </StyledOpacity>
        </StyledCaseMain>
      </Link>
    </StyledWrapper>
  );
}

export default AiCard;
