import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa6";
import BackgroundVideo from "../assets/AIReel.mp4";
import Showcase from "../assets/lipusplus_brand_film_hammarby-2024.mp4";
import logoImg1 from "../assets/Midjourney-logo.avif";
import logoImg2 from "../assets/Runway-logo.avif";
import logoImg3 from "../assets/Photoshop-logo.avif";
import Modal from "./ModalLipus";

const StyledMainContainer = styled.section`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
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

const StyledOpacity = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.32);
  z-index: 2;
`;

const StyledContentsContainer = styled.div`
  width: 80%;
  height: 500px;
  padding-top: 280px;
  padding-left: 60px;
  padding-bottom: 180px;
  display: flex;
  flex-direction: column;
  z-index: 3;

  @media screen and (max-width: 960px) {
    padding-top: 100px;
    padding-bottom: 80px;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
    padding-top: 240px;
    padding-bottom: 240px;
  }

  @media screen and (max-width: 478px) {
    justify-content: center;
    text-align: center;
    width: 90%;
    height: 650px;
    padding-left: 20px;
    padding-top: 100px;
    padding-bottom: 100px;
  }

  @media screen and (max-width: 320px) {
    padding-top: 120px;
    padding-bottom: 80px;
  }
`;

const StyledLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 478px) {
    justify-content: center;
  }
`;

const StyledLogo = styled.img`
  width: 10%;
  height: auto;
  margin-right: 20px;

  @media screen and (max-width: 478px) {
    width: 50%;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  margin-right: 2em;
  padding-top: 2em;
  padding-left: 2em;
`;

const Film = ({ scrollToEvent }) => {
  const videoRef = useRef(null);
  const filmRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);
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

  const handleButtonClick = () => {
    if (isSmallScreen) {
      setTimeout(() => {
        if (filmRef.current) {
          const videoElement = filmRef.current;
          videoElement.pause();
          videoElement.currentTime = 0;
          const playPromise = videoElement.play();

          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                videoElement.requestFullscreen().catch((err) => {
                  console.log(
                    "Error attempting to enable full-screen mode:",
                    err
                  );
                });
              })
              .catch((error) => {
                console.log("Failed to play the video automatically:", error);
              });
          }
        }
      }, 0);
    } else {
      setModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

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
    <StyledMainContainer>
      <StyledVideo
        ref={videoRef}
        src={BackgroundVideo}
        loop
        muted
        playsInline
        preload="auto"
        alt="Background video"
      />

      <StyledOpacity />

      <StyledContentsContainer>

        <StyledLogoContainer>
          <StyledLogo src={logoImg1} alt="Midjourney AI logo" />
          <StyledLogo src={logoImg2} alt="Runway AI logo" />
          <StyledLogo src={logoImg3} alt="Adobe Photoshop logo" />
        </StyledLogoContainer>
        <h4>AI</h4>

        <p>
        We need to understand what AI can do and how it can benefit us. 
        As a storyteller, I see AI not as a threat but as an opportunity. 
        Generative AI has been a game-changer, helping me convey ideas and visualize scenes that were previously limited by budget or time. 
        Though still evolving, AI is rapidly becoming a key tool for creating final content for both B2B and B2C brands.
        </p>
        <IconContainer>
          <FaAngleDown font-size="30px" />
        </IconContainer>
      </StyledContentsContainer>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <video controls autoPlay preload="auto">
          <source src={Showcase} type="video/mp4" />
        </video>
      </Modal>

      <video
        ref={filmRef}
        style={{ display: "none" }}
        src={Showcase}
        type="video/mp4"
        controls
        preload="auto"
      />
    </StyledMainContainer>
  );
};

export default Film;
