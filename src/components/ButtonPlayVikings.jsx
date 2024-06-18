// import React from "react";
// import styled from "styled-components";
// import { FaPlayCircle } from "react-icons/fa";

// const StyledButtonContainer = styled.div`
//   width: 200px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   padding-top: 30px;
//   color: var(--main-button-color);

//   @media screen and (max-width: 478px) {
//     align-items: center;
//   }
// `;

// const StyledWrapper = styled.div`
//   display: inline-block;
//   transition: transform 0.3s ease, color 0.3s ease;
//   &:hover {
//     transform: scale(1.1);
//     color: var(--main-button-hover-color);
//   }

//   @media (max-width: 960px) {
//     &:hover {
//       transform: none;
//       color: inherit;
//     }
//   }
// `;

// const Styledp = styled.p`
//   color: var(--main-font-color);
//   font-size: 20px;
//   font-weight: 600;

//   @media (max-width: 960px) {
//     font-size: 18px;
//   }
// `;

// const Button = ({ onClick }) => {
//   const handleClick = () => {
//     onClick();
//   };

//   return (
//     <StyledButtonContainer>
//       <StyledWrapper>
//         <FaPlayCircle onClick={onClick} size={70} />
//       </StyledWrapper>
//       <Styledp>Play Trailer</Styledp>
//     </StyledButtonContainer>
//   );
// };
// export default Button;


import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaPlayCircle } from "react-icons/fa";

const StyledButtonContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  color: var(--main-button-color);

  @media screen and (max-width: 478px) {
    align-items: center;
  }
`;

const loadingAnimation = keyframes`
  0% {
    border-color: rgba(255, 255, 255, 0.3);
  }
  50% {
    border-color: rgba(255, 255, 255, 0.7);
  }
  100% {
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

const StyledWrapper = styled.div`
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
  border: 2px solid transparent; /* Initial border, hidden */
  ${({ isLoading }) =>
    isLoading &&
    `
    border: 2px solid rgba(255, 255, 255, 0.3);
    animation: ${loadingAnimation} 1s infinite;
  `}
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
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 960px) {
    font-size: 18px;
  }
`;

const Button = ({ onClick }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await onClick();
    setIsLoading(false);
  };

  return (
    <StyledButtonContainer>
      <StyledWrapper isLoading={isLoading}>
        <FaPlayCircle onClick={handleClick} size={70} />
      </StyledWrapper>
      <Styledp>Play Trailer</Styledp>
    </StyledButtonContainer>
  );
};

export default Button;
