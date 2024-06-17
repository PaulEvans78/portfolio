import React from "react";
import styled from "styled-components";
import { FaArrowCircleRight } from "react-icons/fa";

const StyledPlayContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 24px;
  /* padding-bottom: 10px; */
  color: #e437e2;

  
`;

const StyledWrapper = styled.div`
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    transform: scale(1.1); 
    color: #9804e2;; 
  }

  @media (max-width: 960px) {
    &:hover {
      transform: none; 
      color: inherit; 
    }
  }
`;

const Styledp = styled.p`
  color: #333333;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 960px) {
    font-size: 18px;
  }
`;

const Button = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <StyledPlayContainer>
       <StyledWrapper>
      <a
        href="https://www.lipusplus.com/casestudies/hammarby"
        target="_blank"
        rel="noopener noreferrer"
      >
       
        <FaArrowCircleRight onClick={onClick} size={70} />
      </a>
      </StyledWrapper>
      <Styledp>See live page at LipusPlus.com</Styledp>
    </StyledPlayContainer>
  );
};
export default Button;
