import React from "react";
import styled from "styled-components";
import { FaArrowCircleRight } from "react-icons/fa";

const StyledPlayContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: #d5d5d5;

  @media screen and (max-width: 478px) {
    align-items: center;
  }
`;

const StyledWrapper = styled.div`
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    transform: scale(1.1); 
    color: #989898;; 
  }

  @media (max-width: 960px) {
    &:hover {
      transform: none; 
      color: inherit; 
    }
  }
`;

const Styledp = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`;

const Button = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <StyledPlayContainer>
       <StyledWrapper>
      <a
        href="https://paulevans-dop.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
       
        <FaArrowCircleRight onClick={onClick} size={80} />
      </a>
      </StyledWrapper>
      <Styledp>See Cinematography Reel</Styledp>
    </StyledPlayContainer>
  );
};
export default Button;
