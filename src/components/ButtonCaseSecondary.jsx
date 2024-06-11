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

const Styledp = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

const Button = ({ onClick }) => {
  return (
    <StyledPlayContainer>
      <FaArrowCircleRight onClick={() => setModalOpen(true)} size={80} />
      <Styledp>See Case Study</Styledp>
    </StyledPlayContainer>
  );
};

export default Button;
