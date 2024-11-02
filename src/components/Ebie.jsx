import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ebie1 from "../assets/ebie_insuranceStatus.mp4";
import ebie2 from "../assets/ebie_application.mp4";

const StyledWrapper = styled.div`
  display: inline-block;
  width: 100%;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: var(--main-font-color);
  padding: 0em 0em 2em 0em;

  @media (max-width: 960px) {
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
`;

const StyledSectionTitle = styled.div`
  display: flex;
  justify-content: center;
  color: var(--main-font-color);
  padding: 2em 0em 2em 0em;
`;

const StyledSectionNotation = styled.div`
  display: flex;
  justify-self: center;
  justify-content: center;
  width: 100%;
  color: var(--main-font-color);
  padding: 0em 0em 3em 0em;

  @media (max-width: 767px) {
    padding: 0em 0em 0em 0em;
    height: 20px;
  }
`;

const StyledNotation = styled.p`
  font-size: 14px;
  text-align: center;
`;

const StyledDescription = styled.div`
  width: 30%;
  text-align: justify;
  padding-right: 4em;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
    padding-right: 0em;
  }
`;

const StyledRole = styled.div`
  width: 30%;
  text-align: justify;
  padding-left: 4em;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
    padding-left: 0em;
  }
`;

const StyledToolsSkills = styled.div`
  width: 30%;
  text-align: justify;

  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
  }
`;

const StyledInfoText = styled.p`
  font-size: 16px;
`;

const StyledInfoTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const StyledImgContent = styled.div`
  display: Grid;
  grid-template-areas:
    "image1 image2"
    "image3 image4";
  row-gap: 40px;
  column-gap: 4%;
  width: 100%;
  padding: 1em 0em 3em 0em;

  @media (max-width: 767px) {
    grid-template-areas:
      "image1"
      "image2"
      "image3"
      "image4";
    padding: 1em 0em 0em 0em;
  }
`;

const StyledImage1Wrapper = styled.div`
  grid-area: image1;
  display: flex;
  justify-content: flex-end;
  height: 100%;

  @media (max-width: 767px) {
    justify-content: center;
  }
`;

const StyledImage2Wrapper = styled.div`
  grid-area: image2;
  display: flex;
  justify-content: flex-start;
  height: 100%;

  @media (max-width: 767px) {
    justify-content: center;
  }
`;

const StyledVideo = styled.video`
  position: absolute;
  width: 100%;
  height: 95%;
  position: relative;
  align-self: center;
  object-fit: cover;
  border-radius: 24px;

  @media (max-width: 960px) {
    height: 96%;
  }

  @media (max-width: 960px) {
    height: 100%;
  }
`;

const Case = ({ scrollToEvent }) => {
  const videoRef = useRef(null);
  const filmRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleFullScreenChange = () => {
      if (!document.fullscreenElement) {
        if (filmRef.current) {
          filmRef.current.pause();
          filmRef.current.currentTime = 0;
        }
      }
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  return (
    <StyledWrapper>
      <StyledSectionTitle>
        <h2>UX / UI </h2>
      </StyledSectionTitle>
      <StyledInfoContainer>
        <StyledDescription>
          <StyledInfoTitle>Ebie - Group Insurance</StyledInfoTitle>
          <StyledInfoText>
            Created and implemented a completely new and user-friendly function
            into Ebies design system, that simplifies applying and managing of
            group insurance.
          </StyledInfoText>
        </StyledDescription>
        <StyledRole>
          <StyledInfoTitle>Role</StyledInfoTitle>
          <StyledInfoText>UX & UI Designer</StyledInfoText>
        </StyledRole>
        <StyledToolsSkills>
          <StyledInfoTitle>Tools & Skills</StyledInfoTitle>
          <StyledInfoText>Figma | Useberry | Google forms</StyledInfoText>
        </StyledToolsSkills>
      </StyledInfoContainer>

      <StyledImgContent>
        <StyledImage1Wrapper>
          <StyledVideo
            src={ebie1}
            autoPlay
            loop
            muted
            playsInline
            alt="A showreel showing clips from different productions."
          />
        </StyledImage1Wrapper>
        <StyledImage2Wrapper>
          <StyledVideo
            src={ebie2}
            autoPlay
            loop
            muted
            playsInline
            alt="A showreel showing clips from different productions."
          />
        </StyledImage2Wrapper>
      </StyledImgContent>
      <StyledSectionNotation>
        <StyledNotation>Prototypes for Ebie's Group Insurance. </StyledNotation>
      </StyledSectionNotation>
    </StyledWrapper>
  );
};

export default Case;
