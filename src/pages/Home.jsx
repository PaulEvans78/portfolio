import { useState } from "react";
import styled from "styled-components";
import CinemaCard from "../components/CinemaCard";
import Hero from "../components/Hero";
import AICard from "../components/AICard";
import LipusPlus from "../components/LipusPlus";
import Ebie from "../components/Ebie";
import { StyledLoadingContainer, StyledLogo } from "../components/FadesStyled";

const StyledHomeContainer = styled.section`
  max-width: 94vw;
  min-width: 94vw;
  display: flex;
  flex-direction: column;
  align-self: center;
  row-gap: 28px;
  align-content: center;
  padding-top: 140px;

  @media screen and (max-width: 960px) {
    padding-top: 90px;
  }

  @media screen and (max-width: 767px) {
    padding-top: 70px;
  }
`;

const StyledBorderBox = styled.div`
  width: 95%;
  height: 80px;
  margin: 0em 0em 0em 1em;
  border-bottom: 1px solid #1e1e1ee6;
`;

const Home = () => {
  // const [squaresRef1, isSquaresVisible1] = useIntersectionObserver();
  // const [squaresRef2, isSquaresVisible2] = useIntersectionObserver();
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

      {/* <StyledThreeSquaresContainer
        ref={squaresRef1}
        isVisible={isSquaresVisible1}
      > */}

      <Hero />
      <StyledBorderBox></StyledBorderBox>

      <CinemaCard onLoadedData={handleContentLoad} />

      <StyledBorderBox></StyledBorderBox>

      {/* </StyledThreeSquaresContainer> */}

      <LipusPlus />

      <StyledBorderBox></StyledBorderBox>

      <Ebie />

      <AICard />
    </StyledHomeContainer>
  );
};

export default Home;
