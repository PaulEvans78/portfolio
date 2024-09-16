import React from "react";
import styled from "styled-components";
import { FaArrowCircleRight } from "react-icons/fa";

const StyledPlayContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 24px;
  color: var(--main-button-color);
`;

const StyledWrapper = styled.div`
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    transform: scale(1.1);
    color: var(--main-button-hover-color);
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
          <FaArrowCircleRight onClick={onClick} size={60} />
        </a>
      </StyledWrapper>
      <Styledp>LipusPlus.com</Styledp>
    </StyledPlayContainer>
  );
};
export default Button;
