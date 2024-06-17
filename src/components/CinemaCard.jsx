import { useEffect, useRef } from "react";
import dopReel from "../assets/showcase1.mp4";
import styled from "styled-components";
import ButtonFsF from "./ButtonFsFPrimary";

const StyledFrontCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-width: 100%;
  aspect-ratio: 5 / 4;
  font-size: 1.2rem;
  overflow: hidden;

  @media screen and (max-width: 1225px) {
    height: 600px;
  }

  @media screen and (max-width: 478px) {
    height: 500px;
  }
`;

const StyledConceptVideo = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: center;
  object-fit: cover;
`;

const StyledOpacity = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000052;
`;

const StyledInfoContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 90%;
  height: 100%;
  padding-left: 40px;

  @media screen and (max-width: 960px) {
    width: 90%;
  }

  @media screen and (max-width: 478px) {
    padding-top: 20px;
    padding-left: 20px;
  }
`;

const BottomParagraph = styled.div`
  margin-top: auto;
`;

function Card(props) {
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 4000); // 6000ms delay (6 seconds)

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  return (
    <StyledFrontCard>
      <StyledConceptVideo
        ref={videoRef}
        src={dopReel}
        autoplay
        loop
        muted
        playsInline
        alt="A showreel showing clips from different productions."
      />
      <StyledOpacity>
        <StyledInfoContainer>
          <h3>Cinematographer</h3>
          <p>
            Member of fsf Föreningen Severiges Filmfotografer (The Association
            of Swedish Film Cinematographers). Working in Narrative,
            Commercials, Music Videos and Still Photography.
          </p>
          <BottomParagraph>
            <ButtonFsF />
          </BottomParagraph>
        </StyledInfoContainer>
      </StyledOpacity>
    </StyledFrontCard>
  );
}

export default Card;
