import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BackgroundVideo from "../assets/lipusplus_brand_film_hammarby-2024_short.mp4";
import Showcase from "../assets/lipusplus_brand_film_hammarby-2024.mp4";
import ButtonFilm from "./ButtonPlayLipusPrimary";
import ButtonCase from "./ButtonLipusPlusSecondary";
import Modal from "./ModalLipus";

const StyledWrapper = styled.div`
  display: inline-block;
  width: 100%;
`;

const StyledButtonContainer = styled.div`
  width: auto;
  display: none;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 20px;

  @media screen and (max-width: 478px) {
    padding-top: 0px;
  }
`;

const Styledp = styled.p`
  font-size: 16px;
  display: none;
`;

const StyledContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 0em 2em 0.5em 2em;
  z-index: 3;

  transform: translateY(48%); /* Initially positioned off the bottom */
  transition: transform 0.5s ease-in-out;

  @media (max-width: 478px) {
    padding: 0em 2em 0.5em 1em;
  }
`;

const StyledContents = styled.div`
  width: 60%;

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;

const StyledMainContainer = styled.section`
  position: relative;
  max-width: 95%;
  aspect-ratio: 16 / 9;
  margin-left: 2%;
  margin-right: 2%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  align-self: left;
  flex-direction: column;

  &:hover ${StyledContentsContainer} {
    transform: translateY(0%); /* Slide up into view */
    background-color: #060606ac;
    justify-content: center;
  }

  &:hover ${Styledp} {
    display: flex;
  }

  &:hover ${StyledButtonContainer} {
    display: flex;
  }

  @media (max-width: 960px) {
    &:hover {
      transform: none;
      color: inherit;
    }
  }

  @media (max-width: 478px) {
    aspect-ratio: 4 / 5;
  }
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
    <StyledWrapper>
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
          <StyledContents>
            <h5>LIPUSPLUS</h5>

            <Styledp>
              Brand film highlighting LipusPlus's partnership with Hammarby
              Handball.
            </Styledp>
            <StyledButtonContainer>
              <ButtonFilm onClick={handleButtonClick} />
              <ButtonCase onClick={scrollToEvent} />
            </StyledButtonContainer>
          </StyledContents>
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
    </StyledWrapper>
  );
};

export default Film;
