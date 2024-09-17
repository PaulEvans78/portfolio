import { useRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
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
  StyledLoadingContainer,
  StyledLogo,
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
        <CinemaCard onLoadedData={handleContentLoad} />
        <UxUiCard />
        <AICard />
      </StyledThreeSquaresContainer>

      <FullFrameBranding />

      <StyledThreeSquaresReverseContainer
        ref={squaresRef2}
        isVisible={isSquaresVisible2}
      >
        <Storytelling />
        <DesignCard />
        <FrontendCard />
      </StyledThreeSquaresReverseContainer>
    </StyledHomeContainer>
  );
};

export default Home;
