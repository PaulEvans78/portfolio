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
import {
  StyledSquaresContainer,
  FadeInComponent,
} from "../components/FadesStyled";
import useIntersectionObserver from "../components/useIntersectionObserver";

const StyledHomeContainer = styled.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
`;

const Home = () => {
  const [squaresRef1, isSquaresVisible1] = useIntersectionObserver();
  const [squaresRef2, isSquaresVisible2] = useIntersectionObserver();
  const [posterRef, isPosterVisible] = useIntersectionObserver();

  const caseRef = useRef(null);

  const scrollToEvent = () => {
    if (caseRef.current) {
      caseRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledHomeContainer>
      <Hero />
      <StyledSquaresContainer ref={squaresRef1} isVisible={isSquaresVisible1}>
        <UxUiCard />
        <FrontendCard />
      </StyledSquaresContainer>
      <FullFrameBranding scrollToEvent={scrollToEvent} />
      <StyledSquaresContainer ref={squaresRef2} isVisible={isSquaresVisible2}>
        <CinemaCard />
        <ConceptCard />
      </StyledSquaresContainer>
      <div ref={caseRef}></div>
      <CaseLipus />
      <FullFrameVideo />
      <CaseEbie />
      <FadeInComponent ref={posterRef} isVisible={isPosterVisible}>
        <FullFramePoster />
      </FadeInComponent>
    </StyledHomeContainer>
  );
};

export default Home;