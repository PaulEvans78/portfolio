import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BackgroundVideo from "../assets/vikings.mp4";
import Showcase from "../assets/vikingsTrailer.mp4";
import logoImg from "../assets/viaplayLogo.avif";
import ButtonFsF from "./ButtonFsFSecondary";
import ButtonTrailer from "./ButtonPlayVikings";
import Modal from "./ModalVikings";

const StyledMainContainer = styled.section`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
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
    padding-top: 140px;
  }

  @media screen and (max-width: 478px) {
    justify-content: center;
    text-align: center;
    width: 90%;
    padding-left: 20px;
    padding-top: 100px;
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

  @media screen and (max-width: 478px) {
    justify-content: center;
  }
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

const Film = ({ scrollToEvent }) => {
  const videoRef = useRef(null);
  const filmRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [key, setKey] = useState(0);

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
      setKey((prevKey) => prevKey + 1);
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
      videoRef.current.currentTime = 0;
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

      <StyledContentsContainer>
        <StyledLogoContainer>
          <StyledLogo src={logoImg} alt="LipusPlus logo" />
        </StyledLogoContainer>

        <h4>The Last Journey of the Vikings</h4>

        <p>
        Worked as a cinematographer for the Viaplay series "The Last Journey of the Vikings" 
        with Mopar Studios and director James Valesquez. Shot on location in Ireland, in collaboration with Subotica Entertainment.
        </p>
        <StyledButtonContainer>
          <ButtonTrailer onClick={handleButtonClick} />
          <ButtonFsF />
        </StyledButtonContainer>
      </StyledContentsContainer>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <video controls autoPlay preload="auto">
          <source src={Showcase} type="video/mp4" />
        </video>
      </Modal>

      <video
        key={key}
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
