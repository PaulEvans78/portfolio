import styled from "styled-components";

export const Content = styled.div`
  overflowy: scroll;
  height: 2500px;
`;

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 94%;
  bottom: 40px;
  height: 50px;
  font-size: 4rem;
  z-index: 200;
  cursor: pointer;
  color: var(--main-button-color);

  @media screen and (max-width: 1225px) {
    left: 92%;
    } 
  
  @media screen and (max-width: 960px) {
    left: 90%;
  }

  @media screen and (max-width: 960px) {
    left: 85%;
  }

  
  @media screen and (max-width: 478px) {
    font-size: 3rem;
    left: 80%;
  }
`;

export const StyledWrapper = styled.div`
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
