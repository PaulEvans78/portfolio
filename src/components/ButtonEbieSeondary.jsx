import React from "react";
import styled from "styled-components";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const StyledPlayContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: var(--secondary-button-color);

  @media screen and (max-width: 478px) {
    align-items: center;
  }
`;

const StyledWrapper = styled.div`
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    transform: scale(1.1);
    color: var(--secondary-button-hover-color);
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
  color: var(--main-font-color);
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 960px) {
    font-size: 16px;
  }
`;

const Button = ({ onClick }) => {
  return (
    <StyledPlayContainer>
      <StyledWrapper>
        <Link to="/ebie">
          <FaArrowCircleRight onClick={onClick} size={80} />
        </Link>
      </StyledWrapper>
      <Styledp>See Case Study</Styledp>
    </StyledPlayContainer>
  );
};

export default Button;
