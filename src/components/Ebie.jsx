import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BackgroundVideo from "../assets/lipusplus_brand_film_hammarby-2024_short.mp4";
import Showcase from "../assets/lipusplus_brand_film_hammarby-2024.mp4";
import ButtonFilm from "./ButtonPlayLipusPrimary";
import ebie1 from "../assets/ebie_insuranceStatus.mp4";
import ebie2 from "../assets/ebie_application.mp4";
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
  border-radius: 24px;
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
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-left: 2%;
  margin-right: 2%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  align-self: left;
  justify-self: center;
  flex-direction: column;
  border-radius: 24px;

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
 /* margin-top: 2em; */

 @media (max-width: 960px) {
  /* width: 90%; */
  flex-direction: column;
  justify-items: center;
  /* align-self: center; */
  padding: 0em 0em 2em 4em;
  }

  @media (max-width: 478px) {
  flex-direction: column;
  padding: 0em 0em 2em 3em;
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
 width: 90%;
 color: var(--main-font-color);
 padding: 0em 0em 3em 0em;

 @media (max-width: 767px) {
  padding: 0em 0em 0em 0em;
  }
`;

const StyledNotation = styled.p`
 font-size: 14px;
 text-align: center;
`;

const StyledDescription = styled.div`
 width: 20%;
 text-align: justify;

 @media (max-width: 960px) {
  width: 90%;
  text-align: center;
  }

`;

const StyledRole= styled.div`
 width: 20%;
 text-align: justify;

 @media (max-width: 960px) {
  width: 90%;
  text-align: center;
  }
`;

const StyledToolsSkills = styled.div`
 width: 20%;
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



const StyledBorderBox =styled.div`
  width: 95%;
  height: 80px;
  margin: 0em 0em 0em 1em;
  border-bottom: 1px solid #1e1e1ee6;
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
      <StyledSectionTitle>
      <h2>UX / UI </h2>
      </StyledSectionTitle>
      <StyledInfoContainer>
            <StyledDescription>
              <StyledInfoTitle> 
              Ebie - Group Insurance
              </StyledInfoTitle>
              <StyledInfoText>
              Created and implemented a completely new and user-friendly function into Ebies design system, 
              that simplifies applying and managing of group insurance.
              </StyledInfoText>
              
              </StyledDescription>
            <StyledRole>
            <StyledInfoTitle>
                Role 
              </StyledInfoTitle>
              <StyledInfoText>
              UX & UI Designer
              </StyledInfoText>
            </StyledRole>
            <StyledToolsSkills>
            <StyledInfoTitle>
                Tools & Skills
              </StyledInfoTitle>
            <StyledInfoText>
                Figma | Useberry | Google forms
              </StyledInfoText>
            </StyledToolsSkills>
            {/* <StyledMore>
            <StyledInfoTitle>
                Website
              </StyledInfoTitle>
            <StyledLink href="https://www.lipusplus.com/casestudies/hammarby" target="_blank" rel="noopener noreferrer">
    lipusplus.com
              </StyledLink>
            </StyledMore> */}
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
{/* <StyledImage3Wrapper>
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
</StyledImage4Wrapper> */}
          </StyledImgContent>
          <StyledSectionNotation>
      <StyledNotation>Prototypes from Ebie's Design system. </StyledNotation>
      </StyledSectionNotation>
      {/* <StyledMainContainer>
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
      </StyledMainContainer> */}
      <StyledBorderBox>
      </StyledBorderBox>
    </StyledWrapper>
  );
};

export default Film;
