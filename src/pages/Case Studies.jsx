import { useRef } from "react";
import styled from "styled-components";
import CaseLipus from "../components/CaseLipusCard";
import CaseEbie from "../components/CaseEbieCard";
import AICaseStudyTides from "../components/AICaseStudyTides";
import AICaseStudyBreaking from "../components/AICaseStudyBreaking";
import {
  StyledSquaresContainer,
} from "../components/FadesStyled";
import useIntersectionObserver from "../components/useIntersectionObserver";

const StyledCaseStudiesContainer = styled.section`
  max-width: 100%;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
  margin-top: 180px;
  margin-bottom: 30px;

  @media screen and (max-width: 960px) {
    margin-top: 120px;
  }
`;


const CaseStudies = () => {
  const [squaresRef1, isSquaresVisible1] = useIntersectionObserver();
  const [squaresRef2, isSquaresVisible2] = useIntersectionObserver();

  const caseRef = useRef(null);


  return (
    <StyledCaseStudiesContainer>
      <StyledSquaresContainer ref={squaresRef1} isVisible={isSquaresVisible1}>
      <CaseLipus />
      <AICaseStudyTides />
      </StyledSquaresContainer>
      <StyledSquaresContainer ref={squaresRef2} isVisible={isSquaresVisible2}>
        
        <AICaseStudyBreaking />
        <CaseEbie />
      </StyledSquaresContainer>
    </StyledCaseStudiesContainer>

  );
};

export default CaseStudies;
