import React, { useEffect } from "react";
import dopReel from "../assets/showcase1.mp4";
import styled from "styled-components";

const preloadVideo = (url) => {
  const video = document.createElement("video");
  video.src = url;
  video.preload = "auto";
  video.load();
};

const StyledWrapper = styled.div`
  grid-area: cinema;
  /* display: inline-block; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Styledp = styled.p`
  font-size: 16px;
  display: none;
`;

const StyledCaseContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 0em 2em 0.5em 2em;
  padding-bottom: 0.5em;
  border-radius: 24px;

  transform: translateY(46%); //Intial state
  transition: transform 0.5s ease-in-out;

  @media (max-width: 960px) {
    transform: translateY(42%);
  }

  @media (max-width: 478px) {
    padding: 0em 2em 0.5em 1em;
  }
`;

const StyledCaseMain = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-self: center;
  width: 100%;
  aspect-ratio: 5 / 3;
  font-size: 1.2rem;
  overflow: hidden;
  border-radius: 24px;

  &:hover ${StyledCaseContents} {
    transform: translateY(0%); // Slide up
    background-color: #060606ac;
    justify-content: center;
  }

  &:hover ${Styledp} {
    display: flex;
    /* color: var(--main-font-color); */
  }

  /* @media (min-width: 2050px) {
    aspect-ratio: 5 / 3;
  } */

  @media (max-width: 960px) {
    /* width: 96%; */

    &:hover ${StyledCaseContents} {
      transform: translateY(42%);
      background-color: transparent;
    }

    &:hover ${Styledp} {
      display: none;
    }
  }
`;

const StyledInfoContainer = styled.div`
 width: 100%;
 display: flex;
 flex-direction: row;
 justify-content: space-evenly;
 color: var(--main-font-color);
 padding: 0em 0em 2em 0em;

 @media (max-width: 960px) {
  flex-direction: column;
  align-items: center;
  padding: 0em 0em 2em 0em;
  /* text-align: center; */
  }

  /* @media (max-width: 767px) {
  flex-direction: column;
  padding: 0em 0em 2em 0em;
  } */
`;

const StyledDescription = styled.div`
 width: 20%;
 text-align: justify;

 @media (max-width: 960px) {
  width: 90%;
  text-align: center;
  }

`;

const StyledSectionTitle = styled.div`
 display: flex;
 justify-content: center;
 color: var(--main-font-color);
 padding: 2em 0em 2em 0em;
`;


const StyledNarrative= styled.div`
 width: 20%;
 text-align: justify;

 @media (max-width: 960px) {
  width: 90%;
  text-align: center;
  }
`;

const StyledCommercials = styled.div`
 width: 20%;
 text-align: justify;

 @media (max-width: 960px) {
  width: 90%;
  text-align: center;
  }
`;

const StyledMusicVideos = styled.div`
 width: 20%;
 text-align: justify;

 @media (max-width: 960px) {
  width: 90%;
  text-align: center;
  }
`;
const StyledCinemaVideo = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  align-self: center;
  object-fit: cover;
  border-radius: 24px;
`;

const StyledInfoText = styled.p`
  font-size: 16px;
`;

const StyledInfoTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const StyledOpacity = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000056;
  border-radius: 24px;
`;

const StyledHover = styled.div`
  &:hover {
    color: var(--main-button-hover-color);
  }
`;

// const StyledBorderBox =styled.div`
//   width: 95%;
//   height: 80px;
//   margin: 0em 0em 0em 2em;
//   border-bottom: 1px solid #1e1e1ee6;
//   `;

function CinemaCard({ onLoadedData }) {
  useEffect(() => {
    preloadVideo(dopReel);
  }, []);

  return (
    
    <StyledWrapper>
      <StyledSectionTitle>
      <h2>Cinematography</h2>
      </StyledSectionTitle>
      <StyledInfoContainer>
            <StyledDescription>
              <StyledInfoTitle> 
              Paul Evans FSF.
              </StyledInfoTitle>
              <StyledInfoText>
              Expertise in both film and digital formats. Thrives on blending live-action footage with VFX, 
              creating visually captivating worlds that amplify storytelling. 
              </StyledInfoText>
              </StyledDescription>
            <StyledNarrative>
            <StyledInfoTitle>
                Narrative Selected Titles:
              </StyledInfoTitle>
              <StyledInfoText>
                The Last Journey or the Vikings, Viaplay |
                Streams, SVT |
                Vi Forever, SVT
              </StyledInfoText>
            </StyledNarrative>
            <StyledCommercials>
            <StyledInfoTitle>
                Commercials Selected Brands:
              </StyledInfoTitle>
            <StyledInfoText>
                Volvo | Ikea | Fruit-Tella | Burger King | Call of Duty | Renault |
                Stadium | Gant | Doritos | ICA | Verisure | Aller Media | Grandiosa
              </StyledInfoText>
            </StyledCommercials>
            <StyledMusicVideos>
            <StyledInfoTitle>
                Music Promos Selected Artists:
              </StyledInfoTitle>
            <StyledInfoText>
                Katy Perry| Ghost | MØ | Viagra Boys | Darin | Albin Lee Meldau  |
                Ansiktet 
              </StyledInfoText>
            </StyledMusicVideos>
          </StyledInfoContainer>
      <a
        href="https://paulevans-dop.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledCaseMain>
          
          <StyledCinemaVideo
            src={dopReel}
            autoPlay
            loop
            muted
            playsInline
            alt="A showreel showing clips from different productions."
            onLoadedData={onLoadedData}
          />

          <StyledOpacity>
            <StyledCaseContents>
              <h3>Paul Evans fsf</h3>
              <Styledp>
              Captivating audiences and elevating stories.
              Working in Narrative, Commercials, Music Videos and Still Photography. 
                
              </Styledp>
              <StyledHover>
                <Styledp>See work ..</Styledp>
              </StyledHover>
            </StyledCaseContents>
          </StyledOpacity>
        </StyledCaseMain>
      </a>
      {/* <StyledBorderBox>
      </StyledBorderBox> */}
    </StyledWrapper>
  );
}

export default CinemaCard;
