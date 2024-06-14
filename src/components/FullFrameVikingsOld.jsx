import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import Video from "../assets/vikings.mp4";
import logoImg from "../assets/viaplayLogo.avif";
import ButtonFsF from "./ButtonFsFSecondary";
import ButtonTrailer from "./ButtonPlayVikings";



const StyledMainContainer = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const StyledVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const StyledContentsContainer = styled.div`
  position: relative;
  width: 60%;
  height: 500px;
  padding-top: 200px;
  padding-left: 60px;
  padding-bottom: 180px;
  display: flex;
  flex-direction: column;
  z-index: 3;

  @media screen and (max-width: 960px) {
    height: 600px;
    padding-top: 120px;
    padding-bottom: 140px;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
    padding-top: 140px;
  }

  @media screen and (max-width: 478px) {
    width: 90%;
    padding-left: 20px;
    padding-bottom: 120px;
  }

  @media screen and (max-width: 320px) {
    height: 750px;
    padding-top: 100px;
    padding-bottom: 80px;
  }
`;

const StyledLogoContainer = styled.div`
  display: flex;
  padding-top: 30px;
  margin-bottom: 30px;
`;

const StyledLogo = styled.img`
  width: 30%;
  height: auto;
`;

const StyledButtonContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media screen and (max-width: 478px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

// const StyledAnimatedHeading = styled.div`
//   opacity: 0;
//   animation: ${slideInFromLeft} 1s ease-out 0.5s forwards;
// `;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #171717;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 3rem;
  color: #ffffff;
  cursor: pointer;
  z-index: 100;
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModalVideo = styled.video`
  width: 100%;
  height: auto;
`;

const Film = ({ scrollToEvent }) => {
  const videoRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledMainContainer>
      <StyledVideo
        ref={videoRef}
        src={Video}
        autoplay
        loop
        muted
        playsInline
        alt="Background video"
      />
      <StyledContentsContainer>
        {/* <StyledAnimatedHeading /> */}
        <StyledLogoContainer>
          <StyledLogo src={logoImg} alt="Viaplay logo" />
        </StyledLogoContainer>
        <h4>The Last Journey of the Vikings</h4>
        <p>
          In collaboration with director James Valesquez, Mopar Studios and
          Viaplay, I served as the series cinematographer. The production took
          place in both Sweden and Ireland.
        </p>
        <StyledButtonContainer>
          <ButtonTrailer onClick={() => setModalOpen(true)} />
          <ButtonFsF />
        </StyledButtonContainer>

      </StyledContentsContainer>
      {isModalOpen && (
        <ModalBackground>
          <ModalContent>
            <CloseButton onClick={() => setModalOpen(false)}>
              &times;
            </CloseButton>
            <VideoContainer>
              <StyledModalVideo controls autoPlay>
                <source src={Video} type="video/mp4" />
              </StyledModalVideo>
            </VideoContainer>
          </ModalContent>
        </ModalBackground>
      )}
    </StyledMainContainer>
  );
};

export default Film;

