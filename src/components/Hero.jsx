import styled from "styled-components";
import faceHat from "../assets/faceHat.png";
import palm from "../assets/palm.png";
import pen from "../assets/pen.png";
import mobile from "../assets/mobile.png";
import camera from "../assets/camera.png";
import film from "../assets/film.png";
import lines from "../assets/lines.png";


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

const StyledImgContainer = styled.div`
position: relative;
   width: 50%;
   height: 100%;
   min-height: 550px;
   overflow: hidden;
   display: flex;
   align-items: center;
   justify-content: center;
   padding-left: 2em;

   @media (max-width: 960px) {
     min-height: 200px;
     padding-left: 0em;
   }
`;

const StyledImgAnimation1 = styled.img`
  position: absolute;
  bottom: -100%;
   width: 90%;
   height: 100%;
   aspect-ratio: 1 / 1;
   object-fit: contain;

   animation: slideUpFade 30s ease-in-out infinite; /* Repeat animation */
   animation-delay: 2s;

  @keyframes slideUpFade {
    0% {
      bottom: -100%;
      opacity: 1;
    }
    10% {
      bottom: 0;
      opacity: 1;
    }
    50% {
      bottom: 0;
      opacity: 1;
    }
    60% {
      bottom: 0;
      opacity: 1;
    }
    85% {
      bottom: 0;
      opacity: 0; 
    }
    100% {
      bottom: -100%;
      opacity: 0; 
    }
  }
`;

const StyledImgAnimation2 = styled.img`
  position: absolute;
  bottom: 0%;
   width: 90%;
   height: 100%;
   aspect-ratio: 1 / 1;
   object-fit: contain;
   opacity: 0;
   animation: fadeUp 30s ease-in-out infinite; /* Repeat animation */
   animation-delay: 3s;

  @keyframes fadeUp {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0; 
    }
    15% {
      opacity: 1; 
    }
    50% {
      opacity: 1; 
    }
    60% {
      opacity: 0; 
    }
    85% {
      opacity: 0; 
    }
    100% {
      opacity: 0; 
    }
  }
`;

const StyledImgAnimation3 = styled.img`
  position: absolute;
  bottom: 0%;
   width: 90%;
   height: 100%;
   aspect-ratio: 1 / 1;
   object-fit: contain;
   opacity: 0;
   animation: fadeUp 30s ease-in-out infinite; /* Repeat animation */
   animation-delay: 4s;

  @keyframes fadeUp {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0; 
    }
    15% {
      opacity: 1; 
    }
    50% {
      opacity: 1; 
    }
    60% {
      opacity: 0; 
    }
    85% {
      opacity: 0; 
    }
    100% {
      opacity: 0; 
    }
  }
`;

const StyledImgAnimation4 = styled.img`
  position: absolute;
  bottom: 0%;
   width: 90%;
   height: 100%;
   aspect-ratio: 1 / 1;
   object-fit: contain;
   opacity: 0;
   animation: fadeUp 30s ease-in-out infinite; /* Repeat animation */
   animation-delay: 5s;

  @keyframes fadeUp {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0; 
    }
    15% {
      opacity: 1; 
    }
    50% {
      opacity: 1; 
    }
    60% {
      opacity: 0; 
    }
    85% {
      opacity: 0; 
    }
    100% {
      opacity: 0; 
    }
  }
`;

const StyledImgAnimation5 = styled.img`
  position: absolute;
  bottom: 0%;
   width: 90%;
   height: 100%;
   aspect-ratio: 1 / 1;
   object-fit: contain;
   opacity: 0;
   animation: fadeUp 30s ease-in-out infinite; /* Repeat animation */
   animation-delay: 6s;

  @keyframes fadeUp {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0; 
    }
    15% {
      opacity: 1; 
    }
    50% {
      opacity: 1; 
    }
    60% {
      opacity: 0; 
    }
    85% {
      opacity: 0; 
    }
    100% {
      opacity: 0; 
    }
  }
`;

const StyledImgAnimation6 = styled.img`
  position: absolute;
  bottom: 0%;
   width: 90%;
   height: 100%;
   aspect-ratio: 1 / 1;
   object-fit: contain;
   opacity: 0;
   animation: fadeUp 30s ease-in-out infinite; /* Repeat animation */
   animation-delay: 7s;

  @keyframes fadeUp {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0; 
    }
    15% {
      opacity: 1; 
    }
    50% {
      opacity: 1; 
    }
    60% {
      opacity: 0; 
    }
    85% {
      opacity: 0; 
    }
    100% {
      opacity: 0; 
    }
  }
`;

const StyledImgAnimation7 = styled.img`
  position: absolute;
  bottom: 0%;
   width: 90%;
   height: 100%;
   aspect-ratio: 1 / 1;
   object-fit: contain;
   opacity: 0;
   animation: fadeUp 30s ease-in-out infinite; /* Repeat animation */
   animation-delay: 8s;

  @keyframes fadeUp {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0; 
    }
    15% {
      opacity: 1; 
    }
    50% {
      opacity: 1; 
    }
    60% {
      opacity: 0; 
    }
    85% {
      opacity: 0; 
    }
    100% {
      opacity: 0; 
    }
  }
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

  /* Slide-in animation */
  transform: translateX(-100%); 
  animation: slideIn 1s ease-out forwards; 

  @media (max-width: 960px) {
    width: 90%;
    align-items: center;
    min-height: 400px;
    padding: 0em 0em 1em 0em;
  }

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
      opacity: 0; 
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
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
          <Styledp>Creative Lead | AI Creative Specialist | Content Creator </Styledp>
        </StyledTitle>

        <Styledp>Hi!</Styledp>

        <Styledp>
          I am a passionate creative with extensive experience in
          branding, storytelling, and content creation, blending my background
          in film production with UX/UI design and web development. My passion for
          storytelling continues to inform my approach, allowing me to create
          compelling narratives and experiences that connect with audiences. 
          As a creative producer, I’m excited about using emerging technologies 
          like AI and AR to push creativity and enhance the experience.
        </Styledp>
      </StyledIntro>
      <StyledImgContainer>
        <StyledImgAnimation1  src={faceHat} />
        <StyledImgAnimation2  src={palm} />
        <StyledImgAnimation3  src={pen} />
        <StyledImgAnimation4  src={mobile} />
        <StyledImgAnimation5  src={camera} />
        <StyledImgAnimation6  src={film} />
        <StyledImgAnimation7  src={lines} />
      </StyledImgContainer>
    </StyledContentsContainer>
  );
};

export default Hero;
