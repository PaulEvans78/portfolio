
import React from "react";
import styled from "styled-components";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const StyledPlayContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  padding-bottom: 10px;
  color: #e437e2;
`;

const Styledp = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

const Button = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <StyledPlayContainer>
      <Link to="/casestudies">
        <FaArrowCircleRight onClick={handleClick} size={80} /> 
      </Link>

      {/* <FaArrowCircleRight onClick={handleClick} size={80} /> */}
      <Styledp>See Case Studies</Styledp>
    </StyledPlayContainer>
  );
};

export default Button;
