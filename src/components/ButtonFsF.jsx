import React from "react";
import styled from "styled-components";
import { FaArrowCircleRight } from "react-icons/fa";

const StyledPlayContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 24px;
  /* padding-bottom: 10px; */
  color: #e437e2;

  @media screen and (max-width: 478px) {
    align-items: center;
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
      <a
        href="https://paulevans-dop.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaArrowCircleRight onClick={onClick} size={80} />
      </a>
      <Styledp>See Cinematography Reel</Styledp>
    </StyledPlayContainer>
  );
};
export default Button;
