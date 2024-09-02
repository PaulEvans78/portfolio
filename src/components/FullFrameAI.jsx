import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa6";
import BackgroundVideo from "../assets/conceptReel.mp4";
import Showcase from "../assets/lipusplus_brand_film_hammarby-2024.mp4";
// import ButtonFilm from "./ButtonPlayLipusPrimary";
// import ButtonCase from "./ButtonLipusPlusSecondary";
// import logoImg from "../assets/lipusPlusLogoWhite.avif";
import Modal from "./ModalLipus";

const StyledMainContainer = styled.section`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const StyledHeaderContainer = styled.div`
  /* width: 60%; */
  /* height: 500px; */
  /* padding-top: 280px; */
  /* padding-left: 60px; */
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  z-index: 3;

  /* @media screen and (max-width: 960px) {
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
  } */
`;

const StyledContentsContainer = styled.div`
  width: 100%;
  height: 500px;
  padding-top: 280px;
  /* padding-left: 60px; */
  /* padding-bottom: 80px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
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

const StyledContentsBorder = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
background: linear-gradient(#26262610, #000000e5);
padding-top: 40px;
padding-bottom: 30px;
/* border: 1px solid white; */
border-radius: 4px;
`;

const Styledp = styled.div`
width: 80%;
text-align: center;
font-size: 18px;
line-height: 1.6;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  margin-right: 2em;
  padding-top: 2em;
  padding-left: 2em;

  /* @media screen and (max-width: 960px) {
    padding-top: 2em;
    margin-right: 20px;
  }

  @media screen and (max-width: 320px) {
    flex-direction: column;
    margin-right: 0em;
  } */
`; 

// const StyledLogoContainer = styled.div`
//   display: flex;
//   padding-top: 30px;
//   margin-bottom: 30px;

//   @media screen and (max-width: 478px) {
//     justify-content: center;
//   }
// `;

// const StyledLogo = styled.img`
//   width: 30%;
//   height: auto;

//   @media screen and (max-width: 478px) {
//     width: 50%;
//   }
// `;

// const StyledButtonContainer = styled.div`
//   width: auto;
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   padding-top: 20px;

//   @media screen and (max-width: 478px) {
//     width: 100%;
//     flex-direction: column;
//     align-items: center;
//   }
// `;

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
        {/* <StyledLogoContainer>
          <StyledLogo src={logoImg} alt="LipusPlus logo" />
        </StyledLogoContainer> */}


        <StyledHeaderContainer>
        <h3>AI</h3>
        </StyledHeaderContainer>
        <StyledContentsBorder>
        <Styledp>
        It's clear we need to understand what AI can do and how it might help us in our lives. 
        As a storyteller with over 20 years in commercial and film production, I know some might see AI as a threat to creativity, but I see the potential. 
        Generative AI has been a game-changer for me, helping to convey ideas and visualize scenes that would’ve been impossible before due to budget or time constraints. 
        While AI is still in its early stages, it's quickly becoming a go-to tool for creating final content, whether for B2B or B2C brands. 
        To stay ahead, we need to grasp what AI is capable of and how to effectively work with it.
        </Styledp>
        <IconContainer>
        <FaAngleDown font-size="30px"  />
        </IconContainer>
        {/* <StyledButtonContainer>
          <ButtonFilm onClick={handleButtonClick} />
          <ButtonCase onClick={scrollToEvent} />
        </StyledButtonContainer> */}
        </StyledContentsBorder>
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
