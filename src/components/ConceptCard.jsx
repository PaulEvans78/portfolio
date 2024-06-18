import { useEffect, useRef } from "react";
import conceptReel from "../assets/conceptReel.mp4";
import styled from "styled-components";
import posterImage from "../assets/conceptPosterImg.avif"

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
  cursor: pointer;

  @media screen and (max-width: 1225px) {
    height: 600px;
  }

  @media screen and (max-width: 960px) {
    height: 500px;
    cursor: default;
  }

  @media screen and (min-width: 960px) {
    &:hover .poster-image {
      opacity: 0;
    }
    &:hover .cinema-video {
      visibility: visible;
    }
  }
  /* @media screen and (max-width: 478px) {
    height: 500px;
  } */
`;

// const StyledConceptVideo = styled.video`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   position: relative;
//   align-self: left;
//   object-fit: cover;
// `;

const StyledConceptVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  visibility: hidden;
  background-color: transparent;

  @media screen and (max-width: 960px) {
    visibility: visible;
  }
`;

const StyledPosterImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
  transition: opacity 0.5s ease-in-out;

  @media screen and (max-width: 960px) {
    opacity: 0;
  }
`;

const StyledOpacity = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000042;
  color: #ffffff;
  z-index: 3;
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
    padding-top: 20px;
    padding-left: 20px;
  }
`;

const StyledBottomParagraph = styled.div`
  margin-top: auto;
  margin-bottom: 20px;
  padding-bottom: 20px;
`;

const Styledp = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  line-height: 1.4;
  margin: 0;

  @media screen and (max-width: 478px) {
    font-size: 18px;
  }

  @media screen and (max-width: 320px) {
    font-size: 16px;
  }
`;

const Styleda = styled.a`
  &:hover {
    color: #9804e2;
  }
`;

function Card(props) {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 960) {
        if (videoRef.current) {
          videoRef.current.play();
        }
      } else {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
          videoRef.current.style.visibility = 'hidden';
        }
      }
    };

    window.addEventListener('resize', handleResize);

// Initial check
handleResize();

return () => {
  window.removeEventListener('resize', handleResize);
};
}, []);

const handleMouseEnter = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth > 960 && videoRef.current) {
    videoRef.current.play();
    videoRef.current.style.visibility = 'visible';
  }
};

const handleMouseLeave = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth > 960 && videoRef.current) {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.style.visibility = 'hidden';
  }
};



  return (
    <StyledFrontCard
    onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
      <StyledConceptVideo
         className="concept-video"
         ref={videoRef}
        src={conceptReel}
        loop
        muted
        playsInline
        preload="auto"
        alt="A video showing animated AI images made for TV concepts."
      />
      <StyledPosterImage className="poster-image" src={posterImage} alt="Poster Image" />
      <StyledOpacity>
        <StyledInfoContainer>
          <h3>Writer</h3>
          <p>
            As a writer and concept developer, I have been commissioned to write
            concepts based on briefs provided by TV channels and streaming
            services and had concepts optioned.
          </p>
          <StyledBottomParagraph>
            <Styledp>Want to know more? Send me an email.</Styledp>
            <Styleda href="mailto:paul.evans.creative@gmail.com">
              paul.evans.creative@gmail.com
            </Styleda>
          </StyledBottomParagraph>
        </StyledInfoContainer>
      </StyledOpacity>
    </StyledFrontCard>
  );
}

export default Card;


// function Card(props) {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   }, []);

//   return (
//     <StyledFrontCard>
//       <StyledConceptVideo
//         ref={videoRef}
//         src={conceptReel}
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="auto"
//         alt="A video showing animated AI images made for TV concepts."
//       />
//       <StyledOpacity>
//         <StyledInfoContainer>
//           <h3>Writer</h3>
//           <p>
//             As a writer and concept developer, I have been commissioned to write
//             concepts based on briefs provided by TV channels and streaming
//             services and had concepts optioned.
//           </p>
//           <StyledBottomParagraph>
//             <Styledp>Want to know more? Send me an email.</Styledp>
//             <Styleda href="mailto:paul.evans.creative@gmail.com">
//               paul.evans.creative@gmail.com
//             </Styleda>
//           </StyledBottomParagraph>
//         </StyledInfoContainer>
//       </StyledOpacity>
//     </StyledFrontCard>
//   );
// }

// export default Card;

