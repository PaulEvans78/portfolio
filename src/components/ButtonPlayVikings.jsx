import React from 'react';
import styled from "styled-components";
import { FaPlayCircle } from "react-icons/fa";


const StyledPlayContainer = styled.div`
width: 200px;
display: flex;
flex-direction: column;
align-items: flex-start;
padding-top: 30px;
color: #e437e2;

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
  const handleClick = () => {
    onClick();
  };

  return (
<StyledPlayContainer>
<FaPlayCircle onClick={onClick} size={80}/>
                 
                    <Styledp>Play Trailer</Styledp>
                  {/* <ButtonFilm onClick={() => setModalOpen(true)}/> */}
                  </StyledPlayContainer>


    // <StyledButton onClick={onClick}>
    //   <StyledButtonText>Play Trailer</StyledButtonText>
    // </StyledButton>
  );
};
export default Button;
