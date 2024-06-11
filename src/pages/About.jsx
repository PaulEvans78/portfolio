import {useRef} from "react";
import styled from "styled-components";
import AboutMe from "../components/AboutMe";
import ForFun from "../components/ForFun";



const StyledHomeContainer = styled.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
  margin-top: 170px;
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

const About = () => {
  const caseRef = useRef(null);

  const scrollToEvent = () => {
    if (caseRef.current) {
      caseRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledHomeContainer>
     
     <AboutMe />
     <ForFun />
      
    </StyledHomeContainer>
  );
};

export default About;
