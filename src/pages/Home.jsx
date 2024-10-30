import { useState } from "react";
import styled from "styled-components";
import CinemaCard from "../components/CinemaCard";
import Hero from "../components/Hero";
// import UxUiCard from "../components/UxUiCard";
import AICard from "../components/AICard";
import DesignCard from "../components/DesignCard";
import FrontendCard from "../components/FrontendCard";
import LipusPlus from "../components/LipusPlus";
import Ebie from "../components/Ebie";
import Storytelling from "../components/StoryTelling";
import {
  StyledThreeSquaresContainer,
  StyledThreeSquaresReverseContainer,
  StyledLoadingContainer,
  StyledLogo,
} from "../components/FadesStyled";
import useIntersectionObserver from "../components/useIntersectionObserver";

const StyledHomeContainer = styled.section`
  max-width: 94vw;
  min-width: 94vw;
  display: flex;
  flex-direction: column;
  align-self: center;
  row-gap: 28px;
  align-content: center;
`;

const StyledBorderBox =styled.div`
  width: 95%;
  height: 80px;
  margin: 0em 0em 0em 1em;
  border-bottom: 1px solid #1e1e1ee6;
  `;

const Home = () => {
  const [squaresRef1, isSquaresVisible1] = useIntersectionObserver();
  const [squaresRef2, isSquaresVisible2] = useIntersectionObserver();
  const [isLoading, setIsLoading] = useState(true);

  const handleContentLoad = () => {
    setIsLoading(false);
  };

  return (
    <StyledHomeContainer>
      {isLoading && (
        <StyledLoadingContainer>
          <StyledLogo />
        </StyledLoadingContainer>
      )}

      <StyledThreeSquaresContainer
        ref={squaresRef1}
        isVisible={isSquaresVisible1}
      >
        
        <Hero />
        <StyledBorderBox></StyledBorderBox>
        
        <CinemaCard onLoadedData={handleContentLoad} />
        {/* <StyledBorderBox></StyledBorderBox> */}
        
        {/* <UxUiCard /> */}
        <AICard />
      </StyledThreeSquaresContainer>
      

      {/* <StyledThreeSquaresContainer> */}
      <LipusPlus />
      {/* </StyledThreeSquaresContainer> */}
      <StyledBorderBox></StyledBorderBox>

      <Ebie />
      {/* <StyledBorderBox></StyledBorderBox> */}
      
      <AICard />

      {/* <StyledThreeSquaresReverseContainer
        ref={squaresRef2}
        isVisible={isSquaresVisible2}
      > */}
        {/* <Storytelling /> */}
        {/* <DesignCard /> */}
        {/* <FrontendCard /> */}
      {/* </StyledThreeSquaresReverseContainer> */}
    </StyledHomeContainer>
  );
};

export default Home;
