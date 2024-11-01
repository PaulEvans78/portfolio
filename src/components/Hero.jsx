import styled from "styled-components";
import heroFilm from "../assets/heroFilm.mp4";

const StyledContentsContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  padding: 8em 1em 0.5em 1em;

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 767px) {
    padding: 8em 0em 0.5em 0em;
  }
`;

const StyledVideoContainer = styled.div`
  width: 50%;
  height: 100%;
  min-height: 550px;
  overflow-x: hidden;
  display: flex;
  align-content: center;
  justify-items: center;

  @media (max-width: 960px) {
    min-height: 200px;
  }
`;

const StyledVideo = styled.video`
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const StyledIntro = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  min-height: 550px;
  font-size: 1.2rem;
  overflow: hidden;

  @media (max-width: 960px) {
    width: 90%;
    align-items: center;
    min-height: 400px;
    padding: 0em 0em 1em 0em;
  }
`;

const StyledTitle = styled.div`
  width: 100%;
`;

const Styledp = styled.p`
  color: var(--main-p-color);
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 2em;

  @media (max-width: 960px) {
    font-size: 16px;
  }
`;

const Hero = () => {
  return (
    <StyledContentsContainer>
      <StyledIntro>
        <StyledTitle>
          <h1>Paul Evans</h1>
          <Styledp>Experience Designer</Styledp>
        </StyledTitle>

        <Styledp>Hi!</Styledp>

        <Styledp>
          I am a passionate creative with over 20 years of experience in
          branding, storytelling, and content creation, blending my background
          in film with UX/UI design and web development. My passion for
          storytelling continues to inform my approach, allowing me to create
          compelling narratives and experiences that connect with audiences
          across digital and physical platforms.
        </Styledp>
      </StyledIntro>
      <StyledVideoContainer>
        <StyledVideo
          src={heroFilm}
          autoPlay
          loop
          muted
          playsInline
          alt="A animated sketch of aa man wearing a beanie with a pen, a camera, a mobile device and a palm tree floating around his head."
        />
      </StyledVideoContainer>
    </StyledContentsContainer>
  );
};

export default Hero;
