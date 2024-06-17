import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BackgroundVideo from "../assets/lipusplus_brand_film_hammarby-2024_short.mp4";
import Showcase from "../assets/lipusplus_brand_film_hammarby-2024.mp4";
import ButtonFilm from "./ButtonPlayLipusPrimary";
import ButtonCase from "./ButtonLipusPlusSecondary";
import logoImg from "../assets/lipusPlusLogoWhite.avif";
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
  width: 60%;
  height: 500px;
  padding-top: 280px;
  padding-left: 60px;
  padding-bottom: 180px;
  display: flex;
  flex-direction: column;
  z-index: 3;

  @media screen and (max-width: 960px) {
    padding-top: 200px;
    padding-bottom: 200px;
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
  padding-top: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 478px) {
    justify-content: center;
  }
`;

const StyledLogo = styled.img`
  width: 30%;
  height: auto;

  @media screen and (max-width: 478px) {
    width: 50%;
  }
`;

const StyledButtonContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 20px;

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
    const handleVideoPause = () => {
      setModalOpen(false);
      if (filmRef.current) {
        filmRef.current.pause();
        filmRef.current.currentTime = 0;
      }
    };

    if (filmRef.current) {
      filmRef.current.addEventListener("pause", handleVideoPause);
      filmRef.current.addEventListener("ended", handleVideoPause);
    }

    return () => {
      if (filmRef.current) {
        filmRef.current.removeEventListener("pause", handleVideoPause);
        filmRef.current.removeEventListener("ended", handleVideoPause);
      }
    };
  }, [isSmallScreen]);

  const handleButtonClick = () => {
    if (isSmallScreen) {
      if (filmRef.current) {
        const videoElement = filmRef.current;
        videoElement.pause();
        videoElement.currentTime = 0;
        const playPromise = videoElement.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              videoElement.requestFullscreen().catch((err) => {
                console.log("Error attempting to enable full-screen mode:", err);
              });
            })
            .catch((error) => {
              console.log("Failed to play the video automatically:", error);
            });
        }
      }
    } else {
      setModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
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
        alt="Background video"
      />

      <StyledOpacity />

      <StyledContentsContainer>
        <StyledLogoContainer>
          <StyledLogo src={logoImg} alt="LipusPlus logo" />
        </StyledLogoContainer>

        <h4>Meet the Physio of Hammarby Handball</h4>

        <p>
          Brand film highlighting LipusPlus's partnership with Hammarby Handball, showcasing through testimonals the effectiveness of the modality.
        </p>
        <StyledButtonContainer>
          <ButtonFilm onClick={handleButtonClick} />
          <ButtonCase onClick={scrollToEvent} />
        </StyledButtonContainer>
      </StyledContentsContainer>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <video controls autoPlay>
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
      </Modal>

      <video
        ref={filmRef}
        style={{ display: "none" }}
        src={Showcase}
        type="video/mp4"
        controls
      />
    </StyledMainContainer>
  );
};

export default Film;








// import React, { useEffect, useRef, useState } from "react";
// import styled from "styled-components";
// import Video from "../assets/lipusplus_brand_film_hammarby-2024_short.mp4";
// import ButtonFilm from "./ButtonPlayLipusPrimary";
// import ButtonCase from "./ButtonLipusPlusSecondary";
// import logoImg from "../assets/lipusPlusLogoWhite.avif";
// import Modal from "./ModalLipus";

// const StyledMainContainer = styled.section`
//   position: relative;
//   max-width: 100%;
//   min-width: 100%;
//   overflow-x: hidden;
//   overflow-y: hidden;
//   position: relative;
//   display: flex;
//   flex-direction: column;
// `;

// const StyledVideo = styled.video`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   transform: translate(-50%, -50%);
//   z-index: 1;
// `;

// const StyledOpacity = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.32);
//   z-index: 2;
// `;

// const StyledContentsContainer = styled.div`
//   width: 60%;
//   height: 500px;
//   padding-top: 280px;
//   padding-left: 60px;
//   padding-bottom: 180px;
//   display: flex;
//   flex-direction: column;
//   z-index: 3;

//   @media screen and (max-width: 960px) {
//     padding-top: 200px;
//     padding-bottom: 200px;
//   }

//   @media screen and (max-width: 767px) {
//     width: 80%;
//     padding-top: 240px;
//     padding-bottom: 240px;
//   }

//   @media screen and (max-width: 478px) {
//     justify-content: center;
//     text-align: center;
//     width: 90%;
//     height: 650px;
//     padding-left: 20px;
//     padding-top: 100px;
//     padding-bottom: 100px;
//   }

//   @media screen and (max-width: 320px) {
//     padding-top: 120px;
//     padding-bottom: 80px;
//   }
// `;

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

// const Film = ({ scrollToEvent }) => {
//   const videoRef = useRef(null);
//   const [isModalOpen, setModalOpen] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (videoRef.current) {
//         videoRef.current.play();
//       }
//     }, 1000); 

//     return () => clearTimeout(timer); 
//   }, []);

//   return (
//     <StyledMainContainer>
//       <StyledVideo
//         ref={videoRef}
//         src={Video}
//         loop
//         muted
//         playsInline
//         alt="Background video"
//       />

//       <StyledOpacity />

//       <StyledContentsContainer>
//         <StyledLogoContainer>
//           <StyledLogo src={logoImg} alt="LipusPlus logo" />
//         </StyledLogoContainer>

//         <h4>Meet the Physio of Hammarby Handball</h4>

//         <p>
//           Brand film highlighting LipusPlus's partnership with Hammarby
//           Handball, showcasing through testimonals the effectiveness of the
//           modality.
//         </p>

//         <StyledButtonContainer>
//           <ButtonFilm onClick={() => setModalOpen(true)} />

//           <ButtonCase onClick={scrollToEvent} />
//         </StyledButtonContainer>
//       </StyledContentsContainer>
//       <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}></Modal>
//     </StyledMainContainer>
//   );
// };
// export default Film;
