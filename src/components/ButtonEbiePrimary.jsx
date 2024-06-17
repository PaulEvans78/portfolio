import React from "react";
import styled from "styled-components";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const StyledButtonContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: #e437e2;
`;

const StyledWrapper = styled.div`
  display: flex;
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

    /* @media (max-width: 478px) {
    width: 100%;
    } */
  }
`;

const Styledp = styled.p`
  color: #040404;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 960px) {
    font-size: 18px;
  }
`;

const Button = ({ onClick }) => {
  return (
    <StyledButtonContainer>
      <StyledWrapper>
      <Link to="/ebie">
          <FaArrowCircleRight onClick={onClick} size={70} /> 
        </Link> 
      </StyledWrapper>
      <Styledp>See Case Study</Styledp>
    </StyledButtonContainer>
  );
};

export default Button;
