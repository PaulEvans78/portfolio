import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Video from "../assets/vikings.mp4";
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

// const StyledOpacity = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.32);
//   z-index: 2;
// `;

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

const Film = ({ scrollToEvent }) => {
  const videoRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 1000); // 9000ms delay (9 seconds)

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
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

      {/* <StyledOpacity /> */}

      <StyledContentsContainer>
        <StyledLogoContainer>
          <StyledLogo src={logoImg} alt="Viaplays logo" />
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
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}></Modal>
    </StyledMainContainer>
  );
};
export default Film;
