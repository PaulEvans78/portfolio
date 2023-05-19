import styled from 'styled-components';

export const CardContainer = styled.div`

    position: relative; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3em;
    margin-bottom: 2em;
    margin-left: 1em;
    width: 400px;
    height: 400px;
    border-radius: 10px;
    font-family: 'Poppins';
    font-size: 1.2rem;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid white;
   
    
    @media screen and (max-width: 960px) {
      height: 250px;
  }

  @media screen and (max-width: 767px) {
      height: 250px;
      width: 250px;
  }
`;

export const StyledCardImg = styled.img`
    width: 400px;
    height: 400px;
    object-fit: cover;
    align-self: center;
    border-radius: 10px;
`;

export const StyledInfoContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: flex-end;
    width: 60%;
    background-color: whitesmoke;
    padding: 1em;
    border-radius: 10px 10px 0px 0px;
`;

export const Styledh2 = styled.h2`
    text-align: center;
    margin-bottom: 0.25em;
    white-space: pre-wrap;
    color: #272424;
    font-size: 28px;
    font-weight: 900;

    @media screen and (max-width: 767px) {
        font-size: 20px;
        margin-bottom: 0em;
  }
`;

export const StyledCardp = styled.p`
    color: #272424;
    font-size: 14px;
    padding: 0em 1.5em 1.5em;
    text-align: center;

    @media screen and (max-width: 767px) {
        font-size: 10px;
        margin-bottom: 0em;
  }
`;
