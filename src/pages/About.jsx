import { useRef } from "react";
import styled from "styled-components";
import AboutMe from "../components/AboutMe";
import ForFun from "../components/ForFun";

const StyledHomeContainer = styled.section`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding-left: 2%;
  padding-right: 2%;
  align-content: center;
  margin-top: 180px;
  margin-bottom: 30px;
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
