import styled from "styled-components";
import posterImg from "../assets/hidden.avif";
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
  align-self: flex-start;
  object-fit: cover;
  z-index: 2;
`;

const StyledContentsContainer = styled.div`
  width: 50%;
  height: 500px;
  padding-top: 280px;
  padding-left: 60px;
  padding-bottom: 180px;
  display: flex;
  flex-direction: column;
  z-index: 99;

  @media screen and (max-width: 960px) {
    padding-top: 280px;
    padding-bottom: 100px;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
  }

  @media screen and (max-width: 478px) {
    width: 90%;
    padding-top: 140px;
    padding-left: 20px;
  }

  @media screen and (max-width: 320px) {
    width: 90%;
    padding-top: 15px;
    padding-left: 20px;
  }
`;

const StyledLogoContainer = styled.div`
  display: flex;
  padding-top: 30px;
`;

const StyledLogo = styled.img`
  width: 50%;
  height: auto;
`;

const Stylednotation = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 40px;
  font-size: 14px;
  z-index: 3;
`;

const Poster = ({ scrollToEvent }) => {
  return (
    <StyledMainContainer>
      <Stylednotation>Photography by Nisse Virgin.</Stylednotation>

      <StyledImg
        src={posterImg}
        alt="A short film poster. A Man sits with his back to camera contemplating"
      />

      <StyledContentsContainer>
        <h4>Hidden</h4>

        <p>
          My passion for storytelling led me to create a short film, which I
          directed, produced, and wrote. This film went on to win the Special
          award for Best Short Film at the Eastern European Short Film Festival.
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
export default Poster;
