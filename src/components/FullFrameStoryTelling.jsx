import styled from "styled-components";
import posterImg from "../assets/hidden.avif";
import mobilePosterImg from "../assets/hiddenMobileImg.avif";
import logoImg from "../assets/BESTSHORTFILMSPECIALAWARD-EasternEuropeFilmFestival-December2022.avif";

const StyledMainContainer = styled.section`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;

const StyledImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;

  @media (max-width: 767px) {
    display: none;
  }
`;

const StyledMobileImg = styled.img`
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;

  @media (max-width: 767px) {
    display: flex;
  }
`;

const StyledContentsContainer = styled.div`
  width: 60%;
  height: 500px;
  padding-top: 280px;
  padding-left: 60px;
  padding-bottom: 180px;
  display: flex;
  flex-direction: column;
  z-index: 99;

  @media screen and (max-width: 960px) {
    padding-top: 100px;
    padding-bottom: 80px;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
    height: 600px;
  }

  @media screen and (max-width: 478px) {
    text-align: center;
    width: 90%;
    height: 700px;
    padding-left: 16px;
  }

  @media screen and (max-width: 320px) {
    padding-top: 15px;
  }
`;

const StyledLogoContainer = styled.div`
  display: flex;
  padding-top: 30px;

  @media screen and (max-width: 478px) {
    justify-content: center;
  }
`;

const StyledLogo = styled.img`
  width: 20%;
  height: auto;
`;

const StyledNotationContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  bottom: 0;
  width: 100%;
  height: 40px;
  padding-bottom: 10px;
  z-index: 3;
  color: var(--main-notation-font-color);

  @media screen and (max-width: 478px) {
    justify-content: center;
  }
`;
const Stylednotation = styled.p`
  margin-right: 40px;
  font-size: 14px;

  @media screen and (max-width: 478px) {
    margin-right: 0;
  }
`;

const Storytelling = ({ scrollToEvent }) => {
  return (
    <StyledMainContainer>
      <StyledNotationContainer>
        <Stylednotation>Photography by Nisse Virgin.</Stylednotation>
      </StyledNotationContainer>

      <StyledImg
        src={posterImg}
        alt="A short film poster. A Man sits with his back to camera contemplating"
      />

      <StyledMobileImg
        src={mobilePosterImg}
        alt="A short film poster. A Man sits with his back to camera contemplating"
      />


      <StyledContentsContainer>
        <h4>Storytelling</h4>

        <p>
        Storytelling is at the heart of everything I do because it’s how I connect with people and make experiences meaningful.
          I’ve applied my narrative skills to develop concepts for content, films, and TV shows, while also shaping engaging user journeys and creating immersive experiences. 
          I’ve been commissioned to write concepts for B2C clients, TV channels, and streaming services, with several of these concepts being optioned.
        </p>

        <p>
        </p>
        
        <p>
        HIDDEN is a short film that I directed, produced, and wrote. It went on to win the Special Award for Best Short Film at the Eastern European Short Film Festival.
        </p>

        <StyledLogoContainer>
          <StyledLogo
            src={logoImg}
            alt="A wreath for Winner Eastern European Short Film Festival "
          />
        </StyledLogoContainer>
      </StyledContentsContainer>
    </StyledMainContainer>
  );
};
export default Storytelling;
