import React, { useEffect } from "react";
import aiReel from "../assets/aiReel.mp4";
import styled from "styled-components";

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
    padding: 0em 2em 0.5em 1em;
  }

  @media (max-width: 478px) {
    padding: 0em 2em 0.5em 1em;
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
  text-align: justify;

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
`;

const StyledOpacity = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000056;
  border-radius: 24px;
`;

const StyledHover = styled.div`
  &:hover {
    color: var(--main-button-hover-color);
  }
`;

const StyledLink = styled.a`
  font-size: 16px;
  color: var(--main-button-color);

  &:hover {
    color: var(--main-button-hover-color);
  }
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
`;

const StyledBorderBox = styled.div`
  width: 95%;
  height: 80px;
  margin: 0em 0em 0em 1em;
  border-bottom: 1px solid #1e1e1ee6;
`;

function AiCard() {
  useEffect(() => {
    preloadVideo(aiReel);
  }, []);

  return (
    <StyledWrapper>
      <StyledSectionTitle>
        <h2>Emerging Tech</h2>
      </StyledSectionTitle>
      <StyledInfoContainer>
        <StyledDescription>
          <StyledInfoText>
            My interests expand into emerging technologies such as AI, augmented
            reality (AR), digital signage, and projection, with a strong focus
            on how they can be used to create captivating, immersive
            experiences. Coming from a background in traditional film and
            photography, I deeply value the importance of responsible AI use. I
            view AI as a powerful tool to complement our creative work, not
            replace it—challenging us, expanding our creative boundaries, and
            increasing efficiency. Through this lens, I explore how technology
            can redefine visual storytelling and audience engagement without
            losing the human touch. I regularly share insights and industry
            trends on LinkedIn—join me there to see more of what I’m exploring
            in this space.
          </StyledInfoText>
          <StyledLink
            href="https://www.linkedin.com/in/paul-evans-3a74605/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </StyledLink>
        </StyledDescription>
      </StyledInfoContainer>
      <a
        href="https://www.linkedin.com/in/paul-evans-3a74605/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledCaseMain>
          <StyledCinemaVideo
            src={aiReel}
            autoPlay
            loop
            muted
            playsInline
            alt="A showreel of Ai generated video."
          />

          <StyledOpacity>
            <StyledCaseContents>
              <h3>AI</h3>
              <Styledp>
                Keeping up to date with emerging technologies such as AI and
                implenting them into my creative process.
              </Styledp>
              <StyledHover>
                <Styledp>LinkedIn ..</Styledp>
              </StyledHover>
            </StyledCaseContents>
          </StyledOpacity>
        </StyledCaseMain>
      </a>
      <StyledSectionNotation>
        <StyledNotation>
          AI generated video for concepts. Disclaimer: This video was created
          independently and is not affiliated with or endorsed by any brands.{" "}
        </StyledNotation>
      </StyledSectionNotation>
      <StyledBorderBox></StyledBorderBox>
    </StyledWrapper>
  );
}

export default AiCard;
