import React from "react";
import styled from "styled-components";
import { FaArrowCircleRight } from "react-icons/fa";

const StyledButtonContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  /* padding-bottom: 10px; */
  /* margin-bottom: 20px; */
  /* color: #e1bb3e;  */
  color: #e437e2;
`;

const StyledWrapper = styled.div`
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    transform: scale(1.1); 
    color: #9804e2; 
  }

  @media (max-width: 960px) {
    &:hover {
      transform: none; 
      color: inherit; 
    }
  }
`;

const Styledp = styled.p`
  color: #000000;
  font-size: 20px;
  font-weight: 600;
  margin-top: 0;

  @media (max-width: 478px) {
    font-size: 18px;
  }
`;

const Button = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <StyledButtonContainer>
      <StyledWrapper>
      <a
        href="https://github.com/PaulEvans78"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaArrowCircleRight onClick={onClick} size={70} />
      </a>
      </StyledWrapper>
      <Styledp>Go to GitHub</Styledp>
    </StyledButtonContainer>
  );
};
export default Button;
