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
  color: var(--secondary-button-color);

  @media screen and (max-width: 650px) {
    padding-top: 0px;
  }
`;

const StyledWrapper = styled.div`
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    transform: scale(1.1);
    color: var(--secondary-button-hover-color);
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
  font-size: 16px;
  font-weight: 600;

  @media screen and (max-width: 650px) {
    margin-top: 8px;
  }

  @media (max-width: 478px) {
    font-size: 14px;
  }
`;

const Button = ({ onClick }) => {
  return (
    <StyledButtonContainer>
      <StyledWrapper>
        <Link to="/lipusplus">
          <FaArrowCircleRight onClick={onClick} size={60} />
        </Link>
      </StyledWrapper>
      <Styledp>See Case Study</Styledp>
    </StyledButtonContainer>
  );
};

export default Button;
