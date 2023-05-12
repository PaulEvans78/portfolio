import styled from 'styled-components';

export const CardContainer = styled.div`

/* grid-area: main; */
    background-color: #ccae3f;
    position: relative; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3em;
    margin-bottom: 2em;
    margin-left: 1em;
    width: 250px;
    height: 100px;
    border-radius: 10px;
    font-family: 'Poppins';
    font-size: 1.2rem;
    overflow: hidden;
    border-radius: 100px;
    border: 2px solid white;
   
    
    /* @media screen and (max-width: 767px) {
        justify-content: center;
        margin-left: 0em;
        width: 300px;
        height: 200px;
  } */


`;

// export const StyledCardImg = styled.img`
//     width: 400px;
//     height: 400px;
//     object-fit: cover;
//     align-self: center;
//     margin-top: 0.5em;
//     border-radius: 10px;
// `;

export const StyledInfoContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    width: 60%;
    /* background-color: #ffffff; */
    padding: 1em;
    border-radius: 10px;

    /* @media screen and (max-width: 767px) {
        padding: 0em;
  } */
    
`;

export const Styledh2 = styled.h2`
    text-align: center;
    margin-bottom: 0em;
    margin-top: 0em;
    white-space: pre-wrap;
    color: black;
    font-size: 28px;
    font-weight: 900;

    @media screen and (max-width: 767px) {
        font-size: 20px;
        margin-bottom: 0em;
  }
`;

export const StyledCardp = styled.p`
    color: black;
    font-size: 14px;
    /* padding: 1em 1em 1em 1em; */
    text-align: center;
    margin-top: 0em;

    @media screen and (max-width: 767px) {
        font-size: 10px;
        margin-bottom: 0em;
    }
`;
