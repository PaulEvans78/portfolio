import { useRef } from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import CinemaCard from "../components/CinemaCard";
import ConceptCard from "../components/ConceptCard";
import UxUiCard from "../components/UxUiCard";
import FrontendCard from "../components/FrontendCard";
import FullFrameBranding from "../components/FullFrameLipus";
import CaseLipus from "../components/CaseLipusCard";
import FullFrameVideo from "../components/FullFrameVikings";
import CaseEbie from "../components/CaseEbieCard";
import FullFramePoster from "../components/FullFramePoster";

const StyledHomeContainer = styled.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
`;

const StyledSquaresContainer = styled.section`
  max-width: 100%;
  min-width: 100%;
  height: auto;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  row-gap: 16px;
  column-gap: 16px;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
  }
`;

const Home = () => {
  const caseRef = useRef(null);

  const scrollToEvent = () => {
    if (caseRef.current) {
      caseRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledHomeContainer>
      <Hero />
      <StyledSquaresContainer>
        <UxUiCard />
        <FrontendCard />
      </StyledSquaresContainer>
      <FullFrameBranding scrollToEvent={scrollToEvent} />
      <StyledSquaresContainer>
        <CinemaCard />
        <ConceptCard />
      </StyledSquaresContainer>
      <div ref={caseRef}></div>
      <CaseLipus />
      <FullFrameVideo />
      <CaseEbie />
      <FullFramePoster />
    </StyledHomeContainer>
  );
};

export default Home;
