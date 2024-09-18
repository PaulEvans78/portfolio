import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import CaseLipus from "../components/CaseLipusCard";
import CaseEbie from "../components/CaseEbieCard";
import AICaseStudyTides from "../components/AICaseStudyTides";
import AICaseStudyBreaking from "../components/AICaseStudyBreaking";
import { StyledSquaresContainer } from "../components/FadesStyled";
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

 

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const target = searchParams.get("target"); // Check for target 
    if (target === "CaseStudySection2" && squaresRef2.current) {
      //  Scroll to squaresRef2
      squaresRef2.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchParams]); 

  return (
    <StyledCaseStudiesContainer>
      <StyledSquaresContainer ref={squaresRef1} isVisible={isSquaresVisible1}>
        <CaseLipus />
        <CaseEbie />
      </StyledSquaresContainer>
      <StyledSquaresContainer ref={squaresRef2} isVisible={isSquaresVisible2}>
        <AICaseStudyBreaking />
        <AICaseStudyTides />
      </StyledSquaresContainer>
    </StyledCaseStudiesContainer>
  );
};

export default CaseStudies;
