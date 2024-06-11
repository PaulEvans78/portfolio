import { useRef } from "react";
import styled from "styled-components";
import CaseLipus from "../components/CaseLipus";
import CaseEbie from "../components/CaseEbie";

const StyledCaseStudiesContainer = styled.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
  margin-top: 170px;
`;

const CaseStudies = () => {
  const caseRef = useRef(null);

  const scrollToEvent = () => {
    if (caseRef.current) {
      caseRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledCaseStudiesContainer>
      <CaseLipus />
      <CaseEbie />
    </StyledCaseStudiesContainer>
  );
};

export default CaseStudies;
