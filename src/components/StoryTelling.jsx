import styled from "styled-components";
import posterImg from "../assets/hidden.avif";
import mobilePosterImg from "../assets/hiddenMobileImg.avif";
import logoImg from "../assets/BESTSHORTFILMSPECIALAWARD-EasternEuropeFilmFestival-December2022.avif";

const StyledLogoContainer = styled.div`
  display: flex;
  padding-top: 30px;

  @media screen and (max-width: 1100px) {
    padding-top: 10px;
  }

  @media screen and (max-width: 767px) {
    padding-top: 10px;
  }

  @media screen and (max-width: 478px) {
    padding-top: 10px;
  }
`;

const StyledLogo = styled.img`
  width: 60%;
  height: auto;

  @media screen and (max-width: 767px) {
    width: 40%;
  }
`;

const StyledWrapper = styled.div`
  grid-area: storytelling;
  display: inline-block;
  width: 100%;
`;

const StyledCaseContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 0em 2em 0em 2em;

  @media (max-width: 478px) {
    padding: 0em 2em 0.5em 1em;
  }
`;

const StyledCaseMain = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  aspect-ratio: 5 / 3;
  font-size: 1.2rem;
  overflow: hidden;

  @media (max-width: 767px) {
    aspect-ratio: 5 / 7;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

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

  @media (max-width: 767px) {
    display: flex;
  }
`;

const StyledOpacity = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #0000005f;
`;

const Styledp = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 1.4;

  @media (max-width: 360px) {
    font-size: 14px;
  }
`;

const Storytelling = ({ scrollToEvent }) => {
  return (
    <StyledWrapper>
      <StyledCaseMain>
        <StyledImg
          src={posterImg}
          alt="A short film poster. A Man sits with his back to camera contemplating"
        />

        <StyledMobileImg
          src={mobilePosterImg}
          alt="A short film poster. A Man sits with his back to camera contemplating"
        />

        <StyledOpacity>
          <StyledCaseContents>
            <h2>Storytelling</h2>

            <Styledp>
              Storytelling is at the heart of everything I do. I've applied this
              to commercials, films, TV shows, and building intuitive user
              interfaces, digital campaigns, and interactive experiences.
            </Styledp>

            <Styledp>
              HIDDEN is a short film that I directed, produced, and wrote. It
              went on to win the Special Award for Best Short Film at the
              Eastern European Short Film Festival.
            </Styledp>

            <StyledLogoContainer>
              <StyledLogo
                src={logoImg}
                alt="A wreath for Winner Eastern European Short Film Festival "
              />
            </StyledLogoContainer>
          </StyledCaseContents>
        </StyledOpacity>
      </StyledCaseMain>
    </StyledWrapper>
  );
};
export default Storytelling;
