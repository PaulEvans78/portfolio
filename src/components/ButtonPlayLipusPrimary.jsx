import React from "react";
import styled from "styled-components";
import { FaPlayCircle } from "react-icons/fa";

const StyledButtonContainer = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-top: 30px;
  color: var(--main-button-color);

  @media screen and (max-width: 650px) {
    padding-top: 0px;
  }
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
    <StyledButtonContainer>
      <StyledWrapper>
        <FaPlayCircle onClick={onClick} size={60} />
      </StyledWrapper>

      <Styledp>Play Film</Styledp>
    </StyledButtonContainer>
  );
};
export default Button;
