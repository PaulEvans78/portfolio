import styled from "styled-components";
import posterImg from "../assets/hidden.avif";
import mobilePosterImg from "../assets/hiddenMobileImg.avif";
import logoImg from "../assets/BESTSHORTFILMSPECIALAWARD-EasternEuropeFilmFestival-December2022.avif";

// const StyledMainContainer = styled.section`
//   position: relative;
//   max-width: 100%;
//   min-width: 100%;
//   overflow-x: hidden;
//   overflow-y: hidden;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   z-index: 2;
// `;

// const StyledImg = styled.img`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   z-index: 2;

//   @media (max-width: 767px) {
//     display: none;
//   }
// `;

// const StyledMobileImg = styled.img`
//   position: absolute;
//   display: none;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   z-index: 2;

//   @media (max-width: 767px) {
//     display: flex;
//   }
// `;

// const StyledContentsContainer = styled.div`
//   width: 60%;
//   height: 500px;
//   padding-top: 280px;
//   padding-left: 60px;
//   padding-bottom: 180px;
//   display: flex;
//   flex-direction: column;
//   z-index: 99;

//   @media screen and (max-width: 960px) {
//     padding-top: 100px;
//     padding-bottom: 80px;
//   }

//   @media screen and (max-width: 767px) {
//     width: 80%;
//     height: 600px;
//   }

//   @media screen and (max-width: 478px) {
//     text-align: center;
//     width: 90%;
//     height: 700px;
//     padding-left: 16px;
//   }

//   @media screen and (max-width: 320px) {
//     padding-top: 15px;
//   }
// `;

const StyledLogoContainer = styled.div`
  display: flex;
  padding-top: 30px;

  @media screen and (max-width: 767px) {
    padding-top: 20px;
  }

  @media screen and (max-width: 478px) {
    justify-content: center;
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

// const StyledNotationContainer = styled.div`
//   position: absolute;
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-end;
//   bottom: 0;
//   width: 100%;
//   height: 40px;
//   padding-bottom: 10px;
//   z-index: 3;
//   color: var(--main-notation-font-color);

//   @media screen and (max-width: 478px) {
//     justify-content: center;
//   }
// `;
// const Stylednotation = styled.p`
//   margin-right: 40px;
//   font-size: 14px;

//   @media screen and (max-width: 478px) {
//     margin-right: 0;
//   }
// `;

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

  /* transform: translateY(54%); /* Initially positioned off the bottom */
  /* transition: transform 0.5s ease-in-out; */

  /* @media (max-width: 1200px) {
    transform: translateY(60%);
  }

  @media (max-width: 1000px) {
    transform: translateY(64%);
  }

  @media (max-width: 767px) {
    transform: translateY(58%);
  }

  @media (max-width: 600px) {
    transform: translateY(66%);
  }

  @media (max-width: 478px) {
    transform: translateY(78%);
  }

  @media (max-width: 360px) {
    transform: translateY(94%);
  }  */
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
  /* background-color: #060606ac; */

  /* &:hover ${StyledCaseContents} {
    transform: translateY(0%); 
    background-color: #060606ac;
    justify-content: center;
  } */

  /* @media (max-width: 960px) {
    &:hover {
      transform: none;
      color: inherit;
    }
  } */
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 478px) {
    height: 500px;
  }
`;

const StyledOpacity = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #0000005f;
`;

const Storytelling = ({ scrollToEvent }) => {
  return (
    <StyledWrapper>
      <StyledCaseMain>
      {/* <StyledNotationContainer>
        <Stylednotation>Photography by Nisse Virgin.</Stylednotation>
      </StyledNotationContainer> */}

      <StyledImg
        src={posterImg}
        alt="A short film poster. A Man sits with his back to camera contemplating"
      />

      {/* <StyledMobileImg
        src={mobilePosterImg}
        alt="A short film poster. A Man sits with his back to camera contemplating"
      /> */}


<StyledOpacity>
<StyledCaseContents>
        <h5>Storytelling</h5>

        <p>
        Storytelling is at the heart of everything I do, it’s how I connect with people and make experiences meaningful.
          I’ve applied my narrative skills to developing commercials, films, and TV shows, while also shaping engaging user journeys and creating immersive experiences. 
          I’ve been commissioned to write concepts for B2C clients, TV channels, and streaming services, with several of these concepts being optioned.
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
      </StyledCaseContents>
          </StyledOpacity>
        </StyledCaseMain>
    </StyledWrapper>
  );
};
export default Storytelling;
