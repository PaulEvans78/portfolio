import styled from "styled-components";



//CARD
export const StyledCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 3em;
    margin-bottom: 2em;
    margin-left: 0.5em;
    width: 290px;
    height: 490px;
    background-color: whitesmoke;
    border-radius: 10px;
    overflow: hidden;
    border: 2px solid white;
    
`;



//FRONT CARD

export const StyledFrontCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin-top: 3em;  */
    /* margin-bottom: 2em; */
    /* margin-left: 1em; */
    width: 290px;
    height: 490px;
    background-color: #ffffff;
    /* border: 2px solid white; */
    border-radius: 10px;
    font-family: 'Poppins';
    font-size: 1.2rem;
    overflow: hidden;

    @media screen and (max-width: 767px) {
        justify-content: center;
        margin-left: 0em;
        width: 300px;
        height: 100px;
  }

`;

   
export const StyledFrontCardImg = styled.img`
    width: 100%;
    height: 290px;
    align-self: center;
    /* margin-top: -2em; */
    object-fit: cover;
    


    @media screen and (max-width: 767px) {
        margin-left: 1em;
  }
 `;

export const StyledInfoContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    /* height: 350px; */
    background-color: #272424;   
    /* margin-bottom: -2em; */

    @media screen and (max-width: 767px) {
        padding: 0em;
  }
`;

export const Styledh5 = styled.h5`
    text-align: center;
    margin-top: 0.5em;
    margin-bottom: 0.25em;
    white-space: pre-wrap;
    color: #ffffff;
    font-size: 28px;
    font-weight: 900;

    @media screen and (max-width: 767px) {
        font-size: 20px;
        margin-bottom: 0em;
  }
`;

export const StyledCardp = styled.p`
    color: #ffffff;
    font-size: 14px;
    padding: 0em 1.5em 1.5em;
    text-align: center;

    @media screen and (max-width: 767px) {
        font-size: 10px;
        margin-bottom: 0em;
  }
`;

export const StyledButton = styled.button`
    height: 50px;
    width: 160px;
    background-color: #ffffff;
    color: #000000;
    /* padding: 0em 1.5em; */
    margin: 0em 0em 2.5em 4em;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: bold;
    &:hover{
    background: #ccae3f;
    }

    @media screen and (max-width: 767px) {
        margin: 0em 0em 0em 1em;
        font-size: 0.75rem;
        padding: 0em 2.5em;
  }
`;




