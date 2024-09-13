import { useRef } from "react";
import styled from "styled-components";
// import Hero from "../components/Hero";
import CinemaCard from "../components/CinemaCard";
import UxUiCard from "../components/UxUiCard";
import AICard from "../components/AICard";
import DesignCard from "../components/DesignCard";
import FrontendCard from "../components/FrontendCard";
import FullFrameBranding from "../components/FullFrameLipus";
import Storytelling from "../components/StoryTelling";
import {
  StyledThreeSquaresContainer,
  StyledThreeSquaresReverseContainer,
} from "../components/FadesStyled";
import useIntersectionObserver from "../components/useIntersectionObserver";

const StyledHomeContainer = styled.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  align-content: center;
`;

const Home = () => {
  const [squaresRef1, isSquaresVisible1] = useIntersectionObserver();
  const [squaresRef2, isSquaresVisible2] = useIntersectionObserver();
  

  const caseRef = useRef(null);

  const scrollToEvent = () => {
    if (caseRef.current) {
      caseRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledHomeContainer>
      {/* <Hero /> */}
      <StyledThreeSquaresContainer
        ref={squaresRef1}
        isVisible={isSquaresVisible1}
      >
        <CinemaCard />
        <UxUiCard />
        <AICard />
      </StyledThreeSquaresContainer>
    
  
      <FullFrameBranding scrollToEvent={scrollToEvent} />

     

      <StyledThreeSquaresReverseContainer
        ref={squaresRef2}
        isVisible={isSquaresVisible2}
      >
        <Storytelling />
        <DesignCard/>
        <FrontendCard />
      </StyledThreeSquaresReverseContainer>

   
    </StyledHomeContainer>
  );
};

export default Home;
