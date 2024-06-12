import React from "react";
import styled from "styled-components";
import { FaArrowCircleRight } from "react-icons/fa";

const StyledPlayContainer = styled.div`
  width: 200px;
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
  color: white;
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
      <FaArrowCircleRight onClick={() => setModalOpen(true)} size={80} />
      </StyledWrapper>
      <Styledp>See Case Study</Styledp>
    </StyledPlayContainer>
  );
};

export default Button;
