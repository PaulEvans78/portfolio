import { useEffect, useRef } from "react";
import conceptReel from "../assets/conceptReel.mp4";
import styled from "styled-components";

const StyledFrontCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 0%;
  aspect-ratio: 5 / 4;
  font-size: 1.2rem;
  overflow: hidden;

  @media screen and (max-width: 1225px) {
    height: 600px;
  }

  @media screen and (max-width: 478px) {
    height: 480px;
  }
`;

const StyledConceptVideo = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: left;
  object-fit: cover;
`;

const StyledOpacity = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000042;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: left;
  width: 85%;
  height: 100%;
  padding-left: 40px;

  @media screen and (max-width: 960px) {
    width: 90%;
  }

  @media screen and (max-width: 478px) {
    padding-left: 20px;
  }
`;

const BottomParagraph = styled.div`
  margin-top: auto;
  padding-bottom: 20px;
`;

function Card(props) {
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 6000); // 9000ms delay (9 seconds)

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  return (
    <StyledFrontCard>
      <StyledConceptVideo
        ref={videoRef}
        src={conceptReel}
        autoplay
        loop
        muted
        playsInline
        alt="A video showing animated AI images made for TV concepts."
      />
      <StyledOpacity>
        <StyledInfoContainer>
          <h3>Writer. Concept Developer</h3>
          <p>
            As a writer and concept developer, I have had concepts optioned, and
            I have been commissioned to write concepts based on briefs provided
            by TV channels and streaming services.
          </p>
          <BottomParagraph>
            <p>
              I have found AI tools such as Midjourney, Runway, and Photoshop to
              be invaluable tools, enhancing my ability to pitch and develop
              unique projects.
            </p>
          </BottomParagraph>
        </StyledInfoContainer>
      </StyledOpacity>
    </StyledFrontCard>
  );
}

export default Card;
