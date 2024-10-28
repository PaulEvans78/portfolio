import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BackgroundVideo from "../assets/lipusplus_brand_film_hammarby-2024_short.mp4";
import Showcase from "../assets/lipusplus_brand_film_hammarby-2024.mp4";
import ButtonFilm from "./ButtonPlayLipusPrimary";
import Img1 from "../assets/lipusImg1.avif";
import Img2 from "../assets/lipusImg2.avif";
import Img3 from "../assets/lipusImg3.avif";
import Img4 from "../assets/lipusImg4.avif";
// import ButtonCase from "./ButtonLipusPlusSecondary";
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

  @media (max-width: 960px) {
    transform: translateY(44%);
  }

  @media (max-width: 478px) {
    transform: translateY(48%);
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
  max-width: 96%;
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
    ${StyledContentsContainer} {
      transform: translateY(0%);
    }
    ${StyledButtonContainer} {
      display: flex;
    }
    ${Styledp} {
      display: flex;
    }

    &:hover ${StyledContentsContainer} {
      transform: translateY(0%);
      background-color: transparent;
    }
  }

  @media (max-width: 478px) {
    aspect-ratio: 4 / 5;
  }
`;

const StyledInfoContainer = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-evenly;
 color: var(--main-font-color);
 padding: 0em 0em 2em 0em;

 @media (max-width: 960px) {
  flex-direction: column;
  padding: 0em 0em 2em 2em;
  }

  @media (max-width: 767px) {
  flex-direction: column;
  padding: 0em 0em 2em 1em;
  }
`;

const StyledDescription = styled.div`
 width: 20%;
 text-align: justify;

 @media (max-width: 960px) {
  width: 90%;
  }

`;

const StyledRole= styled.div`
 width: 20%;
 text-align: justify;

 @media (max-width: 960px) {
  width: 90%;
  }
`;

const StyledToolsSkills = styled.div`
 width: 20%;
 text-align: justify;

 @media (max-width: 960px) {
  width: 90%;
  }
`;

const StyledMore = styled.div`
 width: 20%;
 text-align: justify;

 @media (max-width: 960px) {
  width: 90%;
  }
`;

const StyledInfoText = styled.p`
  font-size: 16px;
`;

const StyledInfoTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  `;

  const StyledLink = styled.a`
  font-size: 16px;
  `;

const StyledImgContent = styled.div`
display: Grid;
grid-template-areas:
    "image1 image2"
    "image3 image4";
  row-gap: 40px;
  column-gap: 4%;
width: 95%;
padding: 1em 2em 4em 2em;



/* @media (max-width: 960px) {
 width: 90%;
 } */
`;

const StyledImage1Wrapper = styled.div`
  grid-area: image1;
  display: flex;
  justify-content: flex-end;
  /* width: 20%; */
  height: 100%;
`;

const StyledImage2Wrapper = styled.div`
  grid-area: image2;
  display: flex;
  justify-content: flex-start;
  /* width: 20%; */
  height: 100%;
`;

const StyledImage3Wrapper = styled.div`
  grid-area: image3;
  display: flex;
  justify-content: flex-end;
  /* width: 20%; */
  height: 100%;
`;

const StyledImage4Wrapper = styled.div`
  grid-area: image4;
  display: flex;
  justify-content: flex-start;
  /* width: 20%; */
  height: 100%;
`;

const StyledImg = styled.img`
  width: 80%;
  /* height: 100%; */
  object-fit: cover;
  border-radius: 24px;

  /* @media (max-width: 767px) {
    display: none;
  } */
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

// const StyledBorderBox =styled.div`
//   width: 91%;
//   height: 80px;
//   margin: 0em 0em 0em 4em;
//   border-bottom: 1px solid #1e1e1ee6;
//   `;

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
      <StyledInfoContainer>
            <StyledDescription>
              <StyledInfoTitle> 
              HealthTech Positioning
              </StyledInfoTitle>
              <StyledInfoText>
              Designed and created an enticing and informative landing page, to attract physiotherapists 
              and elite athletes to LipusPlus webinars on the Return to Play concept. 
              </StyledInfoText>
              </StyledDescription>
            <StyledRole>
            <StyledInfoTitle>
                Role 
              </StyledInfoTitle>
              <StyledInfoText>
              UX / UI Designer | 
              Frontend Developer | 
              Content Creator
              </StyledInfoText>
            </StyledRole>
            <StyledToolsSkills>
            <StyledInfoTitle>
                Tools & Skills
              </StyledInfoTitle>
            <StyledInfoText>
                Figma | Webflow | Vimeo | JavaScript | Adobe Creative Suite | Cinemtography |
                Storytelling
              </StyledInfoText>
            </StyledToolsSkills>
            <StyledMore>
            <StyledInfoTitle>
                Website
              </StyledInfoTitle>
            <StyledLink href="https://www.lipusplus.com/casestudies/hammarby" target="_blank" rel="noopener noreferrer">
    lipusplus.com
              </StyledLink>
            </StyledMore>
          </StyledInfoContainer>

          <StyledImgContent>
<StyledImage1Wrapper>
          <StyledImg
          src={Img1}
          alt="A short film poster. A Man sits with his back to camera contemplating"
        />
</StyledImage1Wrapper>
<StyledImage2Wrapper>
<StyledImg
          src={Img2}
          alt="A short film poster. A Man sits with his back to camera contemplating"
        />
</StyledImage2Wrapper>
<StyledImage3Wrapper>
<StyledImg
          src={Img3}
          alt="A short film poster. A Man sits with his back to camera contemplating"
        />
</StyledImage3Wrapper>
<StyledImage4Wrapper>
<StyledImg
          src={Img4}
          alt="A short film poster. A Man sits with his back to camera contemplating"
        />
</StyledImage4Wrapper>
          </StyledImgContent>
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
            <h2>LIPUSPLUS</h2>

            <Styledp>
              Brand film highlighting LipusPlus's partnership with Hammarby
              Handball.
            </Styledp>
            <StyledButtonContainer>
              <ButtonFilm onClick={handleButtonClick} />
              {/* <ButtonCase onClick={scrollToEvent} /> */}
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
      {/* <StyledBorderBox>
      </StyledBorderBox> */}
    </StyledWrapper>
  );
};

export default Film;
