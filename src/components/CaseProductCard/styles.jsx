import styled from 'styled-components';

export const CardContainer = styled.div`

    position: relative; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3em;
    margin-bottom: 2em;
    margin-left: 1em;
    padding: 0em 0em 1em 0em;
    width: 400px;
    height: 400px;
    border-radius: 10px;
    font-family: 'Poppins';
    font-size: 1.2rem;
    overflow: hidden;
    border-radius: 10px;
    background-color: #272424;
    border: 1px solid whitesmoke;
  
   @media screen and (max-width: 960px) {
    width: 300px;
    height: 300px;
  }
`;

export const StyledCardImg = styled.img`
    width: 400px;
    height: 400px;
    object-fit: cover;
    align-self: center;
    margin-top: 0.5em;
    border-radius: 10px;

    @media screen and (max-width: 960px) {
      width: 300px;
      height: 300px;
  }
`;