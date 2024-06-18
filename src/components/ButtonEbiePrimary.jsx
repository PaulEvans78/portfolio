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
  color: var(--main-button-color);
`;

const StyledWrapper = styled.div`
  display: flex;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    transform: scale(1.1);
    color: var(--main-button-hover-color);
  }

  &:active {
    border-radius: 50%;
    border: solid 3px white;
  }
  
  @media (max-width: 960px) {
    &:hover {
      transform: none;
      color: inherit;
    }
  }
`;

const Styledp = styled.p`
  color: var(--secondary-font-color);
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
